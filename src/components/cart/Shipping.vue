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
                                <div class="align-content-between nav mb-5">
                                    <span class="text-center d-inline-block active nav-item">
                                        <i class="ti-truck d-block mb-2"/>
                                        <span class="d-block h4">Shipping Method</span>
                                    </span>
                                    <span  class="text-center d-inline-block nav-item">
                                        <i class="ti-eye d-block mb-2"/>
                                        <span class="d-block h4">Review</span>
                                    </span>
                                    <span  class="text-center d-inline-block nav-item">
                                        <i class="ti-wallet d-block mb-2"/>
                                        <span class="d-block h4">Payment Method</span>
                                    </span>
                                </div>
                                <!-- /navbar -->

                                <!-- Billing-address -->
                                <h3 class="mb-5 border-bottom pb-2">Billing Address</h3>
                                <form action="#" class="row">
                                    <div class="col-sm-6">
                                        <label for="firstName">First Name</label>
                                        <input v-model="firstName" class="form-control" type="text" id="firstName" name="firstName" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="lastName">Last Name</label>
                                        <input v-model="lastName" class="form-control" type="text" id="lastName" name="lastName" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="email">Email</label>
                                        <input v-model="email" class="form-control" type="email" id="email" name="email" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="company">Company</label>
                                        <input v-model="company" class="form-control" type="text" id="company" name="company" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="house">House</label>
                                        <input v-model="house" class="form-control" type="text" id="house" name="house" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="address">Road</label>
                                        <input v-model="road" class="form-control" type="text" id="address" name="address" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="phone">Phone</label>
                                        <input v-model="phone" class="form-control" type="tel" id="phone" name="phone" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label >Country</label>
                                        <select v-model="country" class="form-control" name="country">
                                            <option disabled value="">Please select one</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Uruguay">Uruguay</option>
                                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label >City</label>
                                        <select v-model="city" class="form-control" name="city">
                                            <option disabled value="">Your City</option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Newyork">Newyork</option>
                                            <option value="Delhi">Delhi</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="zip-code">Zip Code</label>
                                        <input v-model="zipCode" class="form-control" type="text" id="zip-code" name="zip-code" required>
                                    </div>
                                </form>
                                <!-- /Billing-address -->


                                <!-- shipping-address -->
                                <h3 class="mb-5 mt-5 border-bottom pb-2">Shipping Address</h3>

                                <div class="col-sm-6 mb-4">
                                    <input type="checkbox" v-on:change="checkIsSame" id="sameas" v-model="is_shipping_sameAs_billing">
                                    <label class="ml-2" for="sameas">Shipping Address same as Billing Address</label>
                                </div>

                                <form class="row">
                                    <div class="col-sm-6">
                                        <label for="firstName">First Name</label>
                                        <input v-model="firstName_shipping" class="form-control" type="text" name="firstName" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="lastName">Last Name</label>
                                        <input v-model="lastName_shipping" class="form-control" type="text" name="lastName" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="email">Email</label>
                                        <input v-model="email_shipping" class="form-control" type="email" name="email" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="company">Company</label>
                                        <input v-model="company_shipping" class="form-control" type="text"  name="company" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label >House</label>
                                        <input v-model="house_shipping" class="form-control" type="text" name="house" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="address">Road</label>
                                        <input v-model="road_shipping" class="form-control" type="text" name="address" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="phone">Phone</label>
                                        <input v-model="phone_shipping" class="form-control" type="tel" name="phone" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label >Country</label>
                                        <select v-model="country_shipping" class="form-control" name="country">
                                            <option disabled value="">Please select one</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Uruguay">Uruguay</option>
                                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label >City</label>
                                        <select v-model="city_shipping" class="form-control" >
                                            <option disabled value="">Your City</option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Newyork">Newyork</option>
                                            <option value="Delhi">Delhi</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="zip-code">Zip Code</label>
                                        <input v-model="zipCode_shipping" class="form-control" type="text" name="zip-code" required>
                                    </div>

                                    <!-- select shipping method -->
                                    <div class="col-12">
                                        <h3 class="mb-5 border-bottom pb-2">Select A Shipping Method</h3>
                                    </div>
                                    <div class="col-sm-6 mb-4">
                                        <input v-model="shippingMethod" id="standard" class="custom-checkbox" type="radio"
                                               value="standard" checked="checked">
                                        <label class="ml-2" for="standard">Standard Ground (USPS) - $7.50</label>
                                        <small class="d-block ml-3">Delivered in 8-12 business days.</small>
                                    </div>
                                    <div class="col-sm-6 mb-4">
                                        <input v-model="shippingMethod" id="premium" type="radio" name="checkbox"
                                               value="premium">
                                        <label class="ml-2" for="premium">Premium Ground (UPS) - $12.50</label>
                                        <small class="d-block ml-3">Delivered in 4-7 business days.</small>
                                    </div>
                                    <div class="col-sm-6 mb-4">
                                        <input v-model="shippingMethod" id="ups2" type="radio" name="checkbox"
                                               value="ups2">
                                        <label class="ml-2" for="ups2">UPS 2 Business Day - $15.00</label>
                                        <small class="d-block ml-3">Orders placed by 9:45AM PST will ship same day.</small>
                                    </div>
                                    <div class="col-sm-6 mb-4">
                                        <input v-model="shippingMethod" id="ups1" type="radio" name="checkbox"
                                               value="ups1">
                                        <label class="ml-2" for="ups1">UPS 1 Business Day - $35.00</label>
                                        <small class="d-block ml-3">Orders placed by 9:45AM PST will ship same day.</small>
                                    </div>
                                    <!-- /select shipping method -->
                                </form>
                                <!-- /shipping-address -->
                                <div class="p-4 bg-gray text-right">
                                    <h4 v-if="showErrMsg" class="text-danger">All fields required</h4>
                                    <button @click="storeInfo"
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
    /* eslint-disable */
    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";

    export default {
        name: "Shipping",
        components: {Footer, Navigation, Header},
        data() {
            return {
                fullName: 'ww',
                firstName: 'qq',
                lastName: 'sd',
                email: 'da@d.com',
                company: 'asd',
                house: '3',
                road: 'asdac',
                phone: 'dWED322',
                country: 'BD',
                city: 'dha',
                zipCode: '2020',
                showErrMsg: false,
                is_shipping_sameAs_billing: false,
                firstName_shipping: '',
                lastName_shipping: '',
                email_shipping: '',
                company_shipping: '',
                house_shipping: '',
                road_shipping: '',
                phone_shipping: '',
                country_shipping: '',
                city_shipping: '',
                zipCode_shipping: '',
                shippingMethod: '',
            };
        },
        mounted() {
            this.checkRequired();
            this.onFieldLoad();
        },
        computed: {
            getCartTotalPrice() {
                return this.$store.getters.cartTotalPrice;
            },
        },
        methods: {
            checkRequired : function(){
                if (this.$store.getters.cartItemCount < 1) {
                    this.$router.push('/shop');
                }
            },
            storeInfo: function () {
                if (this.firstName==='' || this.lastName==='' || this.email==='' || this.company==='' || this.road===''
                    || this.phone==='' || this.country==='' || this.city==='' || this.zipCode==='' || this.shippingMethod===''
                    || this.firstName_shipping==='' || this.lastName_shipping==='' || this.email_shipping===''
                    || this.company_shipping==='' || this.road_shipping==='' || this.phone_shipping==='' ||
                    this.country_shipping==='' || this.city_shipping==='' || this.zipCode_shipping==='') {
                    this.showErrMsg = true;
                } else {
                    this.showErrMsg = false;

                    // Storing Billing info into state
                    this.$store.dispatch('storeBillingInfoAction', {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        company: this.company,
                        house: this.house,
                        road: this.road,
                        phone: this.phone,
                        country: this.country,
                        city: this.city,
                        zipCode: this.zipCode,
                    });

                    // Storing both address is same flag into state
                    this.$store.dispatch('storeIfShippingSameAsBillingAction', this.is_shipping_sameAs_billing);

                    // Storing Shipping info into state
                    this.$store.dispatch('storeShippingInfoAction', {
                        firstName: this.firstName_shipping,
                        lastName: this.lastName_shipping,
                        email: this.email_shipping,
                        company: this.company_shipping,
                        house: this.house_shipping,
                        road: this.road_shipping,
                        phone: this.phone_shipping,
                        country: this.country_shipping,
                        city: this.city_shipping,
                        zipCode: this.zipCode_shipping,
                        shippingMethod: this.shippingMethod,
                    });

                    this.$router.push('/review');
                }
            },
            onFieldLoad: function () {
                const billingInstance = this.$store.getters.getterBillingInfo;
                const shippingInstance = this.$store.getters.getterShippingInfo;
                const isBothAddressSame = this.$store.getters.getterIfShippingSameAsBilling;

                if (Object.keys(billingInstance).length !== 0 && Object.keys(shippingInstance).length !== 0){
                    // Billing info
                    this.firstName = billingInstance.firstName;
                    this.lastName = billingInstance.lastName;
                    this.email = billingInstance.email;
                    this.company = billingInstance.company;
                    this.house = billingInstance.house;
                    this.road = billingInstance.road;
                    this.phone = billingInstance.phone;
                    this.country = billingInstance.country;
                    this.city = billingInstance.city;
                    this.zipCode = billingInstance.zipCode;

                    // check addresses
                    this.is_shipping_sameAs_billing = isBothAddressSame;

                    // Shipping info
                    this.firstName_shipping = shippingInstance.firstName;
                    this.lastName_shipping = shippingInstance.lastName;
                    this.email_shipping = shippingInstance.email;
                    this.company_shipping = shippingInstance.company;
                    this.house_shipping = shippingInstance.house;
                    this.road_shipping = billingInstance.road;
                    this.phone_shipping = shippingInstance.phone;
                    this.country_shipping = shippingInstance.country;
                    this.city_shipping = shippingInstance.city;
                    this.zipCode_shipping = shippingInstance.zipCode;
                    this.shippingMethod = shippingInstance.shippingMethod;
                }
            },
            checkIsSame: function () {
                if (this.is_shipping_sameAs_billing === true) {
                    this.firstName_shipping = this.firstName;
                    this.lastName_shipping = this.lastName;
                    this.email_shipping = this.email;
                    this.company_shipping = this.company;
                    this.house_shipping = this.house;
                    this.road_shipping = this.road;
                    this.phone_shipping = this.phone;
                    this.country_shipping = this.country;
                    this.city_shipping = this.city;
                    this.zipCode_shipping = this.zipCode;
                } else {
                    this.firstName_shipping = '';
                    this.lastName_shipping = '';
                    this.email_shipping = '';
                    this.company_shipping = '';
                    this.house_shipping = '';
                    this.road_shipping = '';
                    this.phone_shipping = '';
                    this.country_shipping = '';
                    this.city_shipping = '';
                    this.zipCode_shipping = '';
                }
            },
        }
    }
</script>

<style scoped>
.btn-fade{
    opacity: .6;
    cursor: default!important;
}
</style>
