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
                                    <span class="text-center d-inline-block nav-item">
                                        <i class="ti-truck d-block mb-2"/>
                                        <span class="d-block h4">Shipping Method</span>
                                    </span>
                                    <span  class="text-center d-inline-block nav-item">
                                        <i class="ti-eye d-block mb-2"/>
                                        <span class="d-block h4">Review</span>
                                    </span>
                                    <span  class="text-center d-inline-block nav-item active">
                                        <i class="ti-wallet d-block mb-2"/>
                                        <span class="d-block h4">Payment Method</span>
                                    </span>
                                </div>
                                <!-- /navbar -->

                                <div>

                                </div>

                                <!-- buttons -->
                                <div class="p-4 bg-gray d-flex justify-content-between">
                                    <button @click="onBack"
                                            class="btn btn-dark">Back</button>
                                    <button class="btn btn-primary">Continue</button>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="border-box p-4">
                                <h4>Order Summery</h4>
                                <p>Excepteur sint occaecat cupidat non proi dent sunt.officia.</p>
                                <ul class="list-unstyled">
                                    <li class="d-flex justify-content-between">
                                        <span>Subtotal</span>
                                        <span>${{ getCartTotalPrice }}</span>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <span>Shipping & Handling</span>
                                        <span>$15.00</span>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <span>Estimated Tax</span>
                                        <span>$0.00</span>
                                    </li>
                                </ul>
                                <hr>
                                <div class="d-flex justify-content-between">
                                    <span>Total</span>
                                    <strong>USD $253.00</strong>
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
                shippingInfo: [],
                transaction_id: 'cs_test_F1vKGQY5xWQ0akiUy1zL0m9llF08wITTjND6p4rfuhWtEHHqsPG9gJBy',
                public_key: '',
            };
        },
        mounted() {
            this.setInfo();
            this.checkRequired();
            //this.getOrderId();
            this.onCheckout(this.transaction_id);
        },
        computed: {
            getCartTotalPrice() {
                return this.$store.getters.cartTotalPrice;
            }
        },
        methods: {
            onCheckout: function (sessionId) {
                // eslint-disable-next-line no-undef
                alert('pub_key---->' + this.public_key);
                let stripe = Stripe(this.public_key);
                stripe.redirectToCheckout({
                    sessionId: sessionId
                }).then(resp => {
                    console.log(resp);
                }).catch(err => {
                    console.log(err.response);
                })
            },
            getOrderId() {
                axios.get(Settings.GetApiUrl() + '/orders?page=1&limit=1', {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    let orderID = resp.data.data[0].id;
                    //this.transaction_id = orderID;
                }).catch(err => {
                    console.log(err)
                });
            },
            checkRequired : function(){
                if (Object.keys(this.shippingInfo).length < 1) {
                    this.$router.push('/review');
                }
            },
            setInfo: function () {
                this.shippingInfo = this.getShippingInfo();
                this.public_key = localStorage.getItem('payment_public_key');
            },
            getShippingInfo: function() {
                return this.$store.getters.getterShippingInfo;
            },
            onBack: function () {
                this.$router.push('/review');
            },
        }
    }
</script>

<style scoped>

</style>
