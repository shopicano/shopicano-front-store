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
                        <li class="breadcrumb-item">
                            <router-link to="/">Home</router-link>
                        </li>
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
                                    <span class="text-center d-inline-block nav-item">
                                        <i class="ti-wallet d-block mb-2"/>
                                        <span class="d-block h4">Billing Info</span>
                                    </span>
                                    <span v-if="!this.$store.getters.getterIsAllProductDigital"
                                          class="text-center d-inline-block active nav-item">
                                        <i class="ti-truck d-block mb-2"/>
                                        <span class="d-block h4">Shipping Info</span>
                                    </span>
                                    <span class="text-center d-inline-block nav-item">
                                        <i class="ti-eye d-block mb-2"/>
                                        <span class="d-block h4">Review</span>
                                    </span>
                                </div>
                                <!-- /navbar -->


                                <!-- shipping-address -->
                                <div v-if="!this.$store.getters.getterIsAllProductDigital">
                                    <h3 class="mb-5 mt-5 border-bottom pb-2">Shipping Address</h3>

                                    <div class="col-sm-6 mb-4">
                                        <input type="checkbox" v-on:change="checkIsSame" id="sameas"
                                               v-model="is_shipping_sameAs_billing">
                                        <label class="ml-2" for="sameas">Shipping Address same as Billing
                                            Address</label>
                                    </div>

                                    <div v-if="!is_shipping_sameAs_billing || addressList.length > 0" class="col-sm-12">
                                        <label>Fill form by Previous Information</label>
                                        <select v-model="selectedShippingAddressID"
                                                @change="fetchAddressInfo(selectedShippingAddressID)"
                                                class="form-control" name="city">
                                            <option disabled value="">Select Address</option>
                                            <option v-for="addrs in addressList"
                                                    :key="addrs.id"
                                                    :value="addrs.id">{{ addrs.address }}
                                            </option>
                                        </select>
                                    </div>

                                    <form class="row">
                                        <div class="col-sm-6">
                                            <label for="firstName">First Name</label>
                                            <input id="firstName" v-model="firstName_shipping" class="form-control"
                                                   type="text" name="firstName" required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="lastName">Last Name</label>
                                            <input id="lastName" v-model="lastName_shipping" class="form-control"
                                                   type="text" name="lastName" required>
                                        </div>
                                        <div class="col-sm-10">
                                            <label for="email">Email</label>
                                            <input id="email" v-model="email_shipping" class="form-control" type="email"
                                                   name="email" required>
                                        </div>
                                        <div class="col-sm-12">
                                            <label for="address">Address</label>
                                            <input id="address" v-model="address_shipping" class="form-control"
                                                   type="text" name="address" required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="phone">Phone</label>
                                            <input id="phone" v-model="phone_shipping" class="form-control" type="tel"
                                                   name="phone" required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="zip-code">Zip Code</label>
                                            <input id="zip-code" v-model="zipCode_shipping" class="form-control"
                                                   type="text" name="zip-code" required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label>City</label>
                                            <select v-model="city_shipping" class="form-control">
                                                <option disabled value="">Your City</option>
                                                <option value="Dhaka">Dhaka</option>
                                                <option value="Newyork">Newyork</option>
                                                <option value="Delhi">Delhi</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-6">
                                            <label>Country</label>
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

                                        <!-- select shipping method -->
                                        <div class="col-12">
                                            <h3 class="mb-5 border-bottom pb-2">Select A Shipping Method</h3>
                                        </div>
                                        <div v-for="method in shpMethods" :key="method.id" class="col-sm-6 mb-4">
                                            <input v-model="shippingMethod" :id="method.id" class="custom-checkbox"
                                                   type="radio"
                                                   :value="method.id">
                                            <label class="ml-2" :for="method.id">{{ method.name }} - ${{
                                                formatPrice(method.delivery_charge) }}</label>
                                            <small class="d-block ml-3">Delivered in {{ method.approximate_delivery_time
                                                }} business days.</small>
                                        </div>
                                        <!-- /select shipping method -->
                                    </form>
                                </div>
                                <!-- /shipping-address -->

                                <div class="p-4 bg-gray d-flex justify-content-between">
                                    <h4 v-if="showErrMsg" class="text-danger">All fields are required</h4>
                                    <router-link to="/billing" class="btn btn-dark">Back</router-link>
                                    <button @click="storeInfo"
                                            class="btn btn-primary">Continue
                                    </button>
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
                                        <span>${{ formatPrice(getCartTotalPrice) }}</span>
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
                                    <strong>${{ formatPrice(getCartTotalPrice) }}</strong>
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
    import axios from 'axios';
    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import Settings from "@/common/settings";
    import SessionStore from "@/common/session_store";
    import NumberUtil from "../../common/number";

    export default {
        name: "Shipping",
        components: {Footer, Navigation, Header},
        data() {
            return {
                showErrMsg: false,
                is_shipping_sameAs_billing: false,
                firstName_shipping: '',
                lastName_shipping: '',
                email_shipping: '',
                company_shipping: '',
                address_shipping: '',
                phone_shipping: '',
                country_shipping: '',
                city_shipping: '',
                zipCode_shipping: '',
                shippingMethod: '',
                shpMethods: [],     // Shipping Method list
                addressList: [],    // List of addresses if there any available - (For drop down)
                selectedShippingAddressID: '',
                selectedAddress: [],
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
            checkRequired: function () {
                if (Object.keys(this.$store.getters.getterBillingInfo).length < 1) {
                    this.$router.push('/billing');
                }
            },
            loadAddressList: function () {
                axios.get(Settings.GetApiUrl() + '/addresses', {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    this.addressList = resp.data.data;
                    console.log(this.addressList)
                }).catch(err => {
                    console.log(err)
                });
            },
            fetchAddressInfo: function (id) {
                axios.get(Settings.GetApiUrl() + '/addresses/' + id, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    this.selectedAddress = resp.data.data;

                    this.firstName_shipping = this.selectedAddress.name.split(' ')[0];
                    this.lastName_shipping = this.selectedAddress.name.split(' ')[1];
                    this.email_shipping = this.selectedAddress.email;
                    this.address_shipping = this.selectedAddress.address;
                    this.phone_shipping = this.selectedAddress.phone;
                    this.country_shipping = this.selectedAddress.country;
                    this.city_shipping = this.selectedAddress.city;
                    this.zipCode_shipping = this.selectedAddress.postcode;

                    this.is_shipping_sameAs_billing = false;
                    console.log(resp.data.data)
                }).catch(err => {
                    console.log(err)
                });
            },
            getShippingMethodList: function () {
                axios.get(Settings.GetApiUrl() + '/shipping-methods', {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    this.shpMethods = resp.data.data;
                }).catch(err => {
                    console.log(err)
                })
            },
            storeInfo: function () {
                if (!this.$store.getters.getterIsAllProductDigital) {
                    if (this.shippingMethod === '' || this.firstName_shipping === '' || this.lastName_shipping === ''
                        || this.email_shipping === '' || this.address_shipping === '' || this.phone_shipping === ''
                        || this.country_shipping === '' || this.city_shipping === '' || this.zipCode_shipping === '') {
                        this.showErrMsg = true;
                    } else {
                        this.showErrMsg = false;

                        // Storing both address is same flag into state
                        this.$store.dispatch('storeIfShippingSameAsBillingAction', this.is_shipping_sameAs_billing);

                        // Storing Shipping info into state
                        this.$store.dispatch('storeShippingInfoAction', {
                            firstName: this.firstName_shipping,
                            lastName: this.lastName_shipping,
                            email: this.email_shipping,
                            address: this.address_shipping,
                            phone: this.phone_shipping,
                            country: this.country_shipping,
                            city: this.city_shipping,
                            zipCode: this.zipCode_shipping,
                            shippingMethod: this.shippingMethod,
                        });
                        this.$router.push('/review');
                    }
                }
            },
            onFieldLoad: function () {
                if (!this.$store.getters.getterIsAllProductDigital) {
                    this.getShippingMethodList();
                }

                this.loadAddressList();
                const billingInstance = this.$store.getters.getterBillingInfo;
                const shippingInstance = this.$store.getters.getterShippingInfo;

                if (Object.keys(billingInstance).length !== 0 && Object.keys(shippingInstance).length !== 0) {
                    this.is_shipping_sameAs_billing = this.$store.getters.getterIfShippingSameAsBilling;

                    // Shipping info
                    this.firstName_shipping = shippingInstance.firstName;
                    this.lastName_shipping = shippingInstance.lastName;
                    this.email_shipping = shippingInstance.email;
                    this.address_shipping = shippingInstance.address;
                    this.phone_shipping = shippingInstance.phone;
                    this.country_shipping = shippingInstance.country;
                    this.city_shipping = shippingInstance.city;
                    this.zipCode_shipping = shippingInstance.zipCode;
                    this.shippingMethod = shippingInstance.shippingMethod;
                }
            },
            checkIsSame: function () {
                const billingInstance = this.$store.getters.getterBillingInfo;

                if (this.is_shipping_sameAs_billing === true) {
                    this.firstName_shipping = billingInstance.firstName;
                    this.lastName_shipping = billingInstance.lastName;
                    this.email_shipping = billingInstance.email;
                    this.address_shipping = billingInstance.address;
                    this.phone_shipping = billingInstance.phone;
                    this.country_shipping = billingInstance.country;
                    this.city_shipping = billingInstance.city;
                    this.zipCode_shipping = billingInstance.zipCode;
                } else {
                    this.firstName_shipping = '';
                    this.lastName_shipping = '';
                    this.email_shipping = '';
                    this.company_shipping = '';
                    this.address_shipping = '';
                    this.phone_shipping = '';
                    this.country_shipping = '';
                    this.city_shipping = '';
                    this.zipCode_shipping = '';
                }
            },
            formatPrice: function (v) {
                return NumberUtil.toDisplayUnit(v);
            },
        }
    }
</script>

<style scoped>
    .btn-fade {
        opacity: .6;
        cursor: default !important;
    }
</style>
