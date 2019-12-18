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
                                <div class="justify-content-between nav mb-5">
                                    <span class="text-center d-inline-block nav-item">
                                        <i class="ti-truck d-block mb-2"/>
                                        <span class="d-block h4">Shipping Method</span>
                                    </span>
                                    <span  class="text-center d-inline-block nav-item">
                                        <i class="ti-wallet d-block mb-2"/>
                                        <span class="d-block h4">Payment Method</span>
                                    </span>
                                    <span  class="text-center d-inline-block nav-item active">
                                        <i class="ti-eye d-block mb-2"/>
                                        <span class="d-block h4">Review</span>
                                    </span>
                                </div>
                                <!-- /navbar -->

                                <!-- review -->
                                <h3>Order Review</h3>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <td></td>
                                            <td>Product Name</td>
                                            <td>Quantity</td>
                                            <td>Sub Total</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="item in getFullCart" v-bind:key="item.id">
                                            <td class="align-middle"><img class="img-fluid w-25" :src="item.itemThumbnail" alt="product-img" /></td>
                                            <td class="align-middle">{{ item.itemName }}</td>
                                            <td class="align-middle">{{ item.itemQuantity }}</td>
                                            <td class="align-middle">${{ item.subTotal }}</td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <!-- /review -->

                                <!-- shipping-information -->
                                <h3 class="mb-5 border-bottom pb-2">Shipping Information</h3>
                                <div class="row mb-5">
                                    <div class="col-md-4">
                                        <h4 class="mb-3">Shipping Address</h4>
                                        <ul class="list-unstyled">
                                            <li>{{ shippingInfo.firstName + ' ' + shippingInfo.lastName }}</li>
                                            <li>{{ shippingInfo.address }} </li>
                                            <li>{{ shippingInfo.phone }} </li>
                                            <li>{{ shippingInfo.email }}</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <h4 class="mb-3">Shipping Method</h4>
                                        <ul class="list-unstyled">
                                            <li>{{ getShippingMethod(shippingInfo.shippingMethod) }}</li>
                                            <li>{{ deliveryTime }}</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <h4 class="mb-3">Payment Method</h4>
                                        <ul class="list-unstyled">
                                            <li>{{ getCartType(paymentInfo.cardType) }}: </li>
                                            <li>**** **** **** 2637</li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- buttons -->
                                <div class="p-4 bg-gray d-flex justify-content-between">
                                    <router-link to="/payment" class="btn btn-dark">Back</router-link>
                                    <span @click="onCheckLoggedIn" class="btn btn-primary">Continue</span>
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
            <!-- /ORDER-REVIEW -->

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
    import SessionStore from "@/common/session_store";

    export default {
        name: "Review",
        components: {Footer, Navigation, Header},
        data(){
            return {
                isCartNil: true,
                shippingInfo: [],
                deliveryTime: '',
                paymentInfo: [],
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
            checkRequired : function(){
                if (this.shippingInfo.length === undefined || this.paymentInfo.length === undefined) {
                    this.$router.push('/payment');
                }
            },
            setInfo: function () {
                this.shippingInfo = this.getShippingInfo();
                this.paymentInfo = this.getPaymentInfo();
            },
            getShippingInfo: function() {
                return this.$store.getters.getterShippingInfo;
            },
            getShippingMethod(method) {
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
            getPaymentInfo: function() {
                return this.$store.getters.getterPaymentInfo;
            },
            getCartType: function (type) {
                if (type === 'paypal') {
                    type = 'Paypal';
                } else if (type === 'creditcard') {
                    type = 'Credit Card';
                }

                return type;
            },
            onCheckLoggedIn: function () {
                if (SessionStore.IsLoggedIn()) {
                    this.$router.push('/confirmation');
                } else {
                    this.$router.push('/login');
                }
            }
        }
    }
</script>

<style scoped>

</style>
