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

                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="mb-5 border-bottom pb-2">Select A Payment Method</h3>
                                    </div>

                                    <div v-for="method in paymentMethods" :key="method.id" class="col-sm-6 mb-4">
                                        <input v-model="payment_method" :id="method.id" class="custom-checkbox" :value="method.id" type="radio">
                                        <label class="ml-2" :for="method.id">{{ method.name }}</label>
                                    </div>
                                </div>

                                <!-- buttons -->
                                <div class="p-4 bg-gray d-flex justify-content-between">
                                    <router-link to="/shipping" class="btn btn-dark">Back</router-link>
                                    <span @click="onCheckLoggedIn" class="btn btn-primary text-capitalize">confirm purchase</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="border-box p-4">
                                <h4>Order Summery</h4>
                                <hr>
                                <!--<p>Excepteur sint occaecat cupidat non proi dent sunt.officia.</p>-->
                                <ul class="list-unstyled mt-5">
                                    <li class="d-flex justify-content-between">
                                        <span>Subtotal</span>
                                        <span>${{ getCartTotalPrice }}</span>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <span>Shipping Charge</span>
                                        <span>${{ shippingMethodDetailed.delivery_charge }}</span>
                                    </li>
                                    <li v-if="discountType!=='' && discountAmount!==''" class="d-flex justify-content-between">
                                        <span class="text-capitalize">{{ discountType.replace('_', ' ') }}</span>
                                        <span>${{ discountAmount }}</span>
                                    </li>
                                    <!--<li class="d-flex justify-content-between">
                                        <span>Shipping & Handling</span>
                                        <span>$15.00</span>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <span>Estimated Tax</span>
                                        <span>$0.00</span>
                                    </li>-->
                                </ul>
                                <hr>
                                <div class="d-flex justify-content-between">
                                    <span>Total</span>
                                    <strong>USD ${{ generateTotalPrice }}</strong>
                                </div>
                            </div>
                            <div class="d-flex flex-column flex-md-row align-items-center mt-5">
                                <input v-model="coupon" type="text" class="form-control text-md-left text-center mb-3 mb-md-0 d-block" id="coupon" placeholder="I have a discount coupon">
                                <a @click="onApplyCoupon" class="btn btn-outline-primary ">Apply</a>
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
                billingAddress_id: '',
                shippingAddress_id: '',
                orderID: 'uuuuuu',
                is_purchase_confirmed: false,
                nonce: '',
                gatewayName: '',
                is_gateway_braintree: false,
                is_gateway_stripe: false,
                payment_method_name: '',
                payment_method: '',
                paymentMethods: '',
                shippingMethodDetailed: '',
                coupon: '',
                discount: [],
                discountAmount: '',
                discountType: '',
                totalPrice: '',
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
            },
            generateTotalPrice: function () {
                this.totalPrice = this.$store.getters.cartTotalPrice;

                return this.totalPrice = this.totalPrice + this.shippingMethodDetailed.delivery_charge - this.discountAmount;
            },
        },
        methods: {
            getSippingMethod: function (id) {
                axios.get(Settings.GetApiUrl() + '/platform/shipping-methods/' + id, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    this.shippingMethodDetailed = resp.data.data;
                }).catch(err => {
                    console.log(err)
                })
            },
            onApplyCoupon: function () {
                axios.get(Settings.GetApiUrl() + '/coupons/' + this.coupon + '/check?store_id=' + this.$store.getters.getterIsFromSameStore +
                    '&order_amount=' + this.$store.getters.cartTotalPrice +
                    '&shipping_cost=' + this.shippingMethodDetailed.delivery_charge, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);

                    if (this.discount.length > 0) {
                        this.discount.push(resp.data.data);
                    }

                    this.discountAmount = resp.data.data.discount_amount;
                    this.discountType = resp.data.data.discount_type;
                }).catch(err => {
                    console.log(err);
                })
            },
            getPaymentMethodList: function () {
                axios.get(Settings.GetApiUrl() + '/platform/payment-methods', {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    this.paymentMethods = resp.data.data;
                }).catch(err => {
                    console.log(err)
                })
            },
            createOrder: function(shippingAddressId, billingAddressId) {
                let items = [];
                let order = {};
                let cart_items = this.$store.getters.getCart;

                cart_items.forEach(item => {
                    items.push({
                        id: item.itemID,
                        quantity: item.itemQuantity
                    })
                });

                if (shippingAddressId !== '') {
                    order = {
                        items: items,
                        billing_address_id: billingAddressId,
                        payment_method_id: this.payment_method,
                        shipping_address_id: shippingAddressId,
                        coupon_code: this.coupon,
                    }
                } else {
                    order = {
                        items: items,
                        billing_address_id: billingAddressId,
                        payment_method_id: this.payment_method,
                        coupon_code: this.coupon,
                    }
                }

                axios.post(Settings.GetApiUrl() + '/orders', order, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    return this.$router.push({ path: `/payment/${resp.data.data.id}` });
                }).catch(err => {
                    console.log(err)
                });
            },
            createShippingAddress: function() {
                let shipping_address = {
                    name: this.shippingInfo.firstName + ' ' + this.shippingInfo.lastName,
                    address: this.shippingInfo.address,
                    city: this.shippingInfo.city,
                    country: this.shippingInfo.country,
                    postcode: this.shippingInfo.zipCode,
                    email: this.shippingInfo.email,
                    phone: this.shippingInfo.phone,
                };

                axios.post(Settings.GetApiUrl() + '/addresses', shipping_address, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    this.createBillingAddress(resp.data.data.id);
                    this.shippingAddress_id = resp.data.data.id;
                }).catch(err => {
                    console.log(err)
                });
            },
            createBillingAddress: function(shippingAddress) {

                let billing_address = {
                    name: this.billingInfo.firstName + ' ' + this.billingInfo.lastName,
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
                    console.log(resp);
                    this.billingAddress_id = resp.data.data.id;
                    this.createOrder(shippingAddress, resp.data.data.id);
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

                this.getSippingMethod(this.shippingInfo.shippingMethod);
                this.getPaymentMethodList();
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
                        if (this.$store.getters.getterIsAllProductDigital === false) {
                            this.createShippingAddress();
                        } else {
                            this.createBillingAddress('');
                        }
                        console.log(this.shippingAddress_id)
                        //this.createBillingAddress();
                    }
                    //this.getOrderId();

                    //this.$router.push({ path: `/payment/${orderID}` });
                } else {
                    localStorage.setItem('redirect_to', '/review');
                    console.log(localStorage.getItem('redirect_to'));
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
