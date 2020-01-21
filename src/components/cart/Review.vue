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

            <!-- ORDER-REVIEW -->
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="inner-wrapper border-box">
                                <!-- navbar -->
                                <div class="align-content-between nav mb-5">
                                    <span class="text-center d-inline-block nav-item">
                                        <i class="ti-truck d-block mb-2"/>
                                        <span class="d-block h4">Shipping Method</span>
                                    </span>
                                    <span  class="text-center d-inline-block nav-item active">
                                        <i class="ti-eye d-block mb-2"/>
                                        <span class="d-block h4">Review</span>
                                    </span>
                                    <span  class="text-center d-inline-block nav-item">
                                        <i class="ti-wallet d-block mb-2"/>
                                        <span class="d-block h4">Payment Method</span>
                                    </span>
                                </div>
                                <!-- /navbar -->

                                <!-- review -->
                                <h3>Order Review</h3>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                        <tr class="text-center">
                                            <td></td>
                                            <td>Product Name</td>
                                            <td>Quantity</td>
                                            <td>Sub Total</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="text-center" v-for="item in getFullCart" v-bind:key="item.id">
                                            <td class="align-middle"><img class="img-fluid img-thumbnail img-width" :src="item.itemThumbnail" alt="product-img" /></td>
                                            <td class="align-middle">{{ item.itemName }}</td>
                                            <td class="align-middle">{{ item.itemQuantity }}</td>
                                            <td class="align-middle">${{ item.subTotal }}</td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <!-- /review -->

                                <!-- shipping-information -->
                                <h3 class="mt-5 mb-5 border-bottom pb-2">Shipping Information</h3>
                                <div class="row mb-5">
                                    <div class="col-md-6">
                                        <h4 class="mb-3">Shipping Address</h4>
                                        <ul class="list-unstyled">
                                            <li>{{ shippingInfo.firstName + ' ' + shippingInfo.lastName }}</li>
                                            <li>{{ shippingInfo.address }} </li>
                                            <li>{{ shippingInfo.phone }} </li>
                                            <li>{{ shippingInfo.email }}</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class="mb-3">Shipping Method</h4>
                                        <ul class="list-unstyled">
                                            <li>{{ getShippingMethod(shippingInfo.shippingMethod) }}</li>
                                            <li>{{ deliveryTime }}</li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- @shipping-information -->

                                <!-- billing-information -->
                                <h3 class="mb-5 border-bottom pb-2">Billing Information</h3>
                                <div class="row mb-5">
                                    <div class="col">
                                        <h4 class="mb-3">Billing Address</h4>
                                        <ul class="list-unstyled">
                                            <li>{{ billingInfo.firstName + ' ' + billingInfo.lastName }}</li>
                                            <li>{{ billingInfo.address }} </li>
                                            <li>{{ billingInfo.phone }} </li>
                                            <li>{{ billingInfo.email }}</li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- @billing-information -->

                                <!-- buttons -->
                                <div class="p-4 bg-gray d-flex justify-content-between">
                                    <router-link to="/shipping" class="btn btn-dark">Back</router-link>
                                    <span @click="onCheckLoggedIn" class="btn btn-primary text-capitalize">confirm purchase</span>
                                </div>

                                <!--<div v-if="is_purchase_confirmed" class="mt-4 container">
                                    <div v-on:change="checkGateWay">
                                        <input v-model="gatewayName" id="checkbox1" type="radio" name="checkbox" value="braintree">
                                        <label for="checkbox1" class="h4 ml-2">Brain Tree</label>
                                    </div>

                                    <div v-on:change="checkGateWay">
                                        <input v-model="gatewayName" id="checkbox2" type="radio" name="checkbox" value="stripe">
                                        <label for="checkbox2" class="h4 ml-2">Stripe</label>
                                    </div>
                                </div>-->

                                <!--<div v-if="is_gateway_braintree">
                                    <v-braintree :authorization="token"
                                                 @success="onSuccess"
                                                 @error="onError"/>
                                </div>-->
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
            <!-- /ORDER-REVIEW -->

            <Footer/>
        </div>
        <!-- /main wrapper -->
    </div>
</template>

<script>
    /* eslint-disable */
    import axios from 'axios';

    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import SessionStore from "@/common/session_store";
    import Settings from "@/common/settings";

    export default {
        name: "Review",
        components: {Footer, Navigation, Header},
        data(){
            return {
                isCartNil: true,
                shippingInfo: [],
                deliveryTime: '',
                billingInfo: [],
                //token: '',
                billingAddress_id: '',
                orderID: 'uuuuuu',
                is_purchase_confirmed: false,
                nonce: '',
                gatewayName: '',
                is_gateway_braintree: false,
                is_gateway_stripe: false,
            };
        },
        mounted() {
            this.setInfo();
            this.checkRequired();
        },
        computed: {
            getFullCart(){
                this.isCartNil = this.$store.getters.cartItemCount < 1;
                return this.$store.getters.getCart;
            },
            getCartTotalPrice() {
                return this.$store.getters.cartTotalPrice;
            }
        },
        methods: {
            checkGateWay() {
                if (this.gatewayName === 'braintree') {
                    this.is_gateway_stripe = false;
                    this.is_gateway_braintree = true;
                } else if (this.gatewayName === 'stripe') {
                    this.is_gateway_braintree = false;
                    this.is_gateway_stripe = true;

                }
            },
            createOrder: function(addressId) {
                let items = [];
                let order = {};
                let cart_items = this.$store.getters.getCart;

                cart_items.forEach(item => {
                    items.push({
                        id: item.itemID,
                        quantity: item.itemQuantity
                    })
                });

                order = {
                    items: items,
                    store_id: '65422e25-2bd2-4d6e-9f5d-2bf7bbe19727',
                    billing_address_id: addressId,
                    payment_method_id: '97edb2e0-d606-4873-bb1e-1f7474e85ba1',
                };

                axios.post(Settings.GetApiUrl() + '/orders', order, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    return this.$router.push({ path: `/payment/${resp.data.data.id}` });
                }).catch(err => {
                    console.log(err)
                })
            },
            createBillingAddress: function() {
                let billing_address = {
                    name: this.billingInfo.firstName + this.billingInfo.lastName,
                    address: this.billingInfo.address,
                    city: this.billingInfo.city,
                    country: this.billingInfo.country,
                    postcode: this.billingInfo.zipCode,
                    email: this.billingInfo.email,
                    phone: this.billingInfo.phone,
                };

                axios.post(Settings.GetApiUrl() + '/addresses', billing_address, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    this.createOrder(resp.data.data.id)
                }).catch(err => {
                    console.log(err)
                });
            },
            onSuccess: function(payload) {
                /*axios.post(Settings.GetApiUrl() + '/orders/' + this.orderID + '/nonce', {},{
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);

                    this.nonce = '';
                }).catch(err => [
                    log(err)
                ]);*/

                let nonce = payload.nonce;
                //console.log(payload);

                axios.post(Settings.GetApiUrl() + '/orders/' + this.orderID + '/pay', {nonce: nonce}, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp)
                }).catch(err => {
                    console.log(err)
                });
            },
            onError: function (error) {
                let message = error.message;
                alert(message)
            },
            // Checking are shippingInfo & billingInfo stored in state
            checkRequired : function(){
                if (Object.keys(this.shippingInfo).length < 1 || Object.keys(this.billingInfo).length < 1) {
                    this.$router.push('/shipping');
                }
            },
            setInfo: function () {
                this.shippingInfo = this.getShippingInfo();
                this.billingInfo = this.getBillingInfo();
                //this.token = localStorage.getItem('client_token');
            },
            getShippingInfo: function() {
                return this.$store.getters.getterShippingInfo;
            },
            getBillingInfo: function() {
                return this.$store.getters.getterBillingInfo;
            },
            getShippingMethod: function(method) {
                if (method === 'standard') {
                    method = 'Standard Ground (USPS) - $7.50';
                    this.deliveryTime = 'Delivered in 8-12 business days.';
                } else if (method === 'premium') {
                    method = 'Premium Ground (UPS) - $12.50';
                    this.deliveryTime = 'Delivered in 4-7 business days.';
                } else if (method === 'ups2') {
                    method = 'UPS 2 Business Day - $15.00';
                    this.deliveryTime = 'Orders placed by 9:45AM PST will ship same day.';
                }else if (method === 'ups1') {
                    method = 'UPS 1 Business Day - $35.00';
                    this.deliveryTime = 'Orders placed by 9:45AM PST will ship same day.';
                }

                return method;
            },
            onCheckLoggedIn: function () {
                if (SessionStore.IsLoggedIn()) {
                    if (this.billingAddress_id === '') {
                        this.createBillingAddress();
                    }
                    //this.getOrderId();

                    //this.$router.push({ path: `/payment/${orderID}` });
                } else {
                    this.$router.push('/login');
                }
            }
        }
    }
</script>

<style scoped>
    .img-width{
        width: 80px!important;
    }
</style>
