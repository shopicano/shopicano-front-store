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
                                    <span  class="text-center d-inline-block nav-item active">
                                        <i class="ti-wallet d-block mb-2"/>
                                        <span class="d-block h4">Payment Method</span>
                                    </span>
                                    <span  class="text-center d-inline-block nav-item">
                                        <i class="ti-eye d-block mb-2"/>
                                        <span class="d-block h4">Review</span>
                                    </span>
                                </div>
                                <!-- /navbar -->

                                <!-- shipping-information -->
                                <h3 class="mb-5 border-bottom pb-2">Shipping Information</h3>
                                <div class="row mb-5">
                                    <div class="col-md-6">
                                        <h4 class="mb-3">Shipping Address</h4>
                                        <ul  class="list-unstyled">
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
                                <!-- billing information -->
                                <h3 class="mb-5 border-bottom pb-2">Billing Information</h3>


                                <div class="mb-4">
                                    <div class="mb-4">
                                        <input v-model="cardType" id="checkbox1" type="radio" name="checkbox" value="paypal">
                                        <label for="checkbox1" class="h4 ml-2">Pay with Paypal</label>
                                    </div>

                                    <div>
                                        <input v-model="cardType" id="checkbox2" type="radio" name="checkbox" value="creditcard">
                                        <label for="checkbox2" class="h4 ml-2">Credit Card</label>
                                    </div>
                                    <small class="mb-2 d-block ml-3">We accept following credit card</small>
                                    <div class="form-group ml-3 row">
                                        <div class="col-12">
                                            <ul class="list-inline mb-3">
                                                <li class="list-inline-item"><img src="images/payment-card/card-1.jpg" alt="card"></li>
                                                <li class="list-inline-item"><img src="images/payment-card/card-2.jpg" alt="card"></li>
                                                <li class="list-inline-item"><img src="images/payment-card/card-3.jpg" alt="card"></li>
                                                <li class="list-inline-item"><img src="images/payment-card/card-4.jpg" alt="card"></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="cardName">Name on Card</label>
                                            <input v-model="cardName" type="text" name="cardName" id="cardName" class="form-control">
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="cardNumber">Card Number</label>
                                            <input v-model="cardNumber" type="text" name="cardNumber" id="cardNumber" class="form-control">
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="row">
                                                <div class="col-12">
                                                    <label>Expiration Date</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <select v-model="exDateYear" class="form-control" name="exDate">
                                                        <option value="">Year</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2020">2020</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <select v-model="exDateMonth" class="form-control" name="exDate">
                                                        <option value="">Month</option>
                                                        <option value="jan">Jan</option>
                                                        <option value="feb">Feb</option>
                                                        <option value="mar">Mar</option>
                                                        <option value="apr">Apr</option>
                                                        <option value="may">May</option>
                                                        <option value="jun">Jun</option>
                                                        <option value="jul">Jul</option>
                                                        <option value="aug">Aug</option>
                                                        <option value="sep">Sep</option>
                                                        <option value="oct">Oct</option>
                                                        <option value="nov">Nov</option>
                                                        <option value="dec">Dec</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="cvc">CVC/CVV</label>
                                            <input v-model="cvc" type="text" name="cvc" id="cvc" class="form-control" >
                                        </div>
                                    </div>
                                </div>
                                <!-- /shipping-information -->
                                <!-- buttons -->
                                <h4 v-if="showErrMsg" class="text-danger text-right">All fields are required.</h4>
                                <div class="p-4 bg-gray d-flex justify-content-between">
                                    <button @click="onBack"
                                            class="btn btn-dark">Back</button>
                                    <button @click="storeCardInfo"
                                            class="btn btn-primary">Continue</button>
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
    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";

    export default {
        name: "Payment",
        components: {Footer, Navigation, Header},
        data() {
            return {
                cardType: '',
                cardName: '',
                cardNumber: '',
                exDateYear: '',
                exDateMonth: '',
                cvc: '',
                shippingInfo: [],
                deliveryTime: '',
                showErrMsg: false,
            };
        },
        mounted() {
            this.setInfo();
            this.checkRequired();
        },
        computed: {
            getCartTotalPrice() {
                return this.$store.getters.cartTotalPrice;
            }
        },
        methods: {
            checkRequired : function(){
                if (this.shippingInfo.length === undefined) {
                    this.$router.push('/shipping');
                }
            },
            setInfo: function () {
                this.shippingInfo = this.getShippingInfo();
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
            onBack: function () {
                this.$router.push('/shipping');
            },
            storeCardInfo: function () {
                if (this.cardType==='' || this.cardName==='' || this.cardNumber==='' || this.exDateYear==='' || this.exDateMonth===''
                    || this.cvc==='') {
                    this.showErrMsg = true;
                } else {
                    this.showErrMsg = false;

                    this.$store.dispatch('storeCardInfoAction', {
                        cardType: this.cardType,
                        cardName: this.cardName,
                        cardNumber: this.cardNumber,
                        exDateYear: this.exDateYear,
                        exDateMonth: this.exDateMonth,
                        cvc: this.cvc,
                    });

                    this.$router.push('/review');
                }


            },
        }
    }
</script>

<style scoped>

</style>
