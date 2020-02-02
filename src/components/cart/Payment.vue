<template>
    <div>
        <Header/>
        <Navigation/>

        <!-- main wrapper -->
        <div class="main-wrapper">

            <!-- breadcrumb -->
            <nav class="bg-gray py-3">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Shipping Information</li>
                    </ol>
                </div>
            </nav>
            <!-- /breadcrumb -->

            <!-- shipping method -->
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="inner-wrapper border-box">
                                <!-- navbar -->
                                <div class="justify-content-between nav mb-5">
                                    <span  class="text-center d-inline-block active nav-item">
                                        <i class="ti-wallet d-block mb-2"/>
                                        <span class="d-block h4">Payment</span>
                                    </span>
                                </div>
                                <!-- /navbar -->

                                <div v-if="is_gateway_braintree" class="row mb-5">
                                    <div class="col">
                                        <v-braintree :authorization="clientToken"
                                                     @success="onSuccess"
                                                     @error="onError"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="border-box p-4">
                                <h4>Order Summery</h4>
                                <ul class="list-unstyled">
                                    <li class="d-flex justify-content-between">
                                        <span>Subtotal</span>
                                        <span>${{ getCartTotalPrice }}</span>
                                    </li>

                                    <li v-if="!this.$store.getters.getterIsAllProductDigital" class="d-flex justify-content-between">
                                        <span>Shipping Charge</span>
                                        <span>${{ getDeliveryCharge }}</span>
                                    </li>

                                    <li v-if="this.$store.getters.getterStoreDiscount.type!=='' && this.$store.getters.getterStoreDiscount.amount!==''" class="d-flex justify-content-between">
                                        <span class="text-capitalize">{{ this.$store.getters.getterStoreDiscount.type.replace('_', ' ') }}</span>
                                        <span>${{ this.$store.getters.getterStoreDiscount.amount }}</span>
                                    </li>
                                </ul>
                                <hr>
                                <div class="d-flex justify-content-between">
                                    <span>Total</span>
                                    <strong>USD ${{ getGrandTotal }}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /shipping method -->

            <Footer/>
        </div>
        <!-- /main wrapper -->
    </div>
</template>

<script>
    /* eslint-disable */
    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import axios from "axios";
    import Settings from "@/common/settings";
    import SessionStore from "@/common/session_store";

    export default {
        name: "Payment",
        components: {Footer, Navigation, Header},
        data() {
            return {
                orderID: '',
                order: '',
                shippingInfo: [],
                billingInfo: [],
                transaction_id: '',
                public_key: '',
                is_gateway_braintree: false,
                clientToken: '',
            };
        },
        mounted() {
            this.setInfo();
            this.checkRequired();
            this.getOrderDetails();
        },
        computed: {
            getCartTotalPrice() {
                return this.$store.getters.cartTotalPrice;
            },
            getGrandTotal() {
                return this.$store.getters.getterStoreGrandTotal;
            },
            getDeliveryCharge() {
                return this.$store.getters.getterStoreDeliveryCharge;
            }
        },
        methods: {
            setInfo: function () {
                this.orderID = this.$route.params.orderID;

                if (!this.$store.getters.getterIsAllProductDigital) {
                    this.shippingInfo = this.getShippingInfo();
                }

                this.billingInfo = this.$store.getters.getterBillingInfo;

                this.public_key = localStorage.getItem('payment_public_key');
                this.clientToken = localStorage.getItem('client_token');
            },
            getShippingInfo: function() {
                return this.$store.getters.getterShippingInfo;
            },
            checkRequired : function(){
                console.log(Object.keys(this.billingInfo).length + '  -->  ' + this.$store.getters.getterIsAllProductDigital)
                if (this.$store.getters.getterIsAllProductDigital && Object.keys(this.billingInfo).length < 1) {
                    return this.$router.push('/review');
                } else if (!this.$store.getters.getterIsAllProductDigital && Object.keys(this.shippingInfo).length < 1) {
                    return this.$router.push('/review');
                }
            },
            getOrderDetails: function () {
                axios.get(Settings.GetApiUrl() + '/orders/' + this.orderID, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    this.order = resp.data.data;

                    // Calling onCheckout function
                    this.onCheckout();
                }).catch(err => {
                    console.log(err)
                })
            },
            generateNonce: function () {
                axios.post(Settings.GetApiUrl() + '/orders/' + this.orderID + '/nonce', null,{
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);

                    let stripe = Stripe(this.public_key);
                    stripe.redirectToCheckout({
                        sessionId: resp.data.data.nonce
                    }).then(resp => {
                        console.log(resp);
                    }).catch(err => {
                        console.log(err.response);
                    })
                }).catch(err => {
                    console.log(err)
                })
            },
            onSuccess: function(payload) {
                let nonce = payload.nonce;
                //console.log(payload);

                axios.post(Settings.GetApiUrl() + '/orders/' + this.orderID + '/pay', {nonce: nonce}, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log('onSuccess ---> ' + resp);
                    SessionStore.CleanPaymentMethodGatewayConfig();
                    return this.$router.push('/confirmation/' + this.orderID);
                    /*return this.$router.push({
                        path: '/confirmation/',
                        query: {id: resp.data.data.id, hash: resp.data.data.hash}
                    });*/
                }).catch(err => {
                    console.log(err)
                });
            },
            onError: function (error) {
                let message = error.message;
                alert(message)
            },
            onCheckout: function () {
                console.log('payment_gateway ---> ' + this.order.payment_gateway);
                if (this.order.payment_gateway === 'stripe') {
                    // Generating Nonce for stripe
                    this.generateNonce();


                } else if (this.order.payment_gateway === 'brain_tree') {
                    this.is_gateway_braintree = true;
                } else if (this.order.payment_gateway === 'cash') {
                    this.$router.push('/confirmation/' + this.orderID);
                } else {
                    alert("Error happened")
                }
            },
        }
    }
</script>

<style scoped>

</style>
