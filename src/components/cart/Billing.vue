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
                                    <span class="text-center d-inline-block active nav-item">
                                        <i class="ti-wallet d-block mb-2"/>
                                        <span class="d-block h4">Billing Info</span>
                                    </span>
                                    <span v-if="!this.$store.getters.getterIsAllProductDigital"
                                          class="text-center d-inline-block nav-item">
                                        <i class="ti-truck d-block mb-2"/>
                                        <span class="d-block h4">Shipping Info</span>
                                    </span>
                                    <span class="text-center d-inline-block nav-item">
                                        <i class="ti-eye d-block mb-2"/>
                                        <span class="d-block h4">Review</span>
                                    </span>
                                </div>
                                <!-- /navbar -->

                                <!-- Billing-address -->
                                <h3 class="mb-5 border-bottom pb-2">Billing Address</h3>
                                <div v-if="addressList.length > 0" class="col-sm-12">
                                    <label>Fill form by Previous Information</label>
                                    <select v-model="selectedBillingAddressID"
                                            @change="fetchAddressInfo(selectedBillingAddressID)" class="form-control"
                                            name="city">
                                        <option disabled value="">Select</option>
                                        <option v-for="addrs in addressList"
                                                :key="addrs.id"
                                                :value="addrs.id">{{ addrs.address }}
                                        </option>
                                    </select>
                                </div>
                                <form class="row">
                                    <div class="col-sm-6">
                                        <label for="firstName">First Name</label>
                                        <input v-model="firstName" class="form-control" type="text" id="firstName"
                                               name="firstName" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="lastName">Last Name</label>
                                        <input v-model="lastName" class="form-control" type="text" id="lastName"
                                               name="lastName" required>
                                    </div>
                                    <div class="col-sm-10">
                                        <label for="email">Email</label>
                                        <input v-model="email" class="form-control" type="email" id="email" name="email"
                                               required>
                                    </div>
                                    <div class="col-sm-12">
                                        <label for="address">Address</label>
                                        <input v-model="address" class="form-control" type="text" id="address"
                                               name="address" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="phone">Phone</label>
                                        <input v-model="phone" class="form-control" type="tel" id="phone" name="phone"
                                               required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="zip-code">Zip Code</label>
                                        <input v-model="zipCode" class="form-control" type="text" id="zip-code"
                                               name="zip-code" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label>City</label>
                                        <select v-model="city" class="form-control" name="city">
                                            <option disabled value="">Your City</option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Newyork">Newyork</option>
                                            <option value="Delhi">Delhi</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Country</label>
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
                                </form>
                                <!-- /Billing-address -->

                                <!--<div class="row">
                                    <div class="col-12">
                                        <h3 class="mb-5 border-bottom pb-2">Select A Payment Method</h3>
                                    </div>

                                    <div v-for="method in paymentMethods" :key="method.id" class="col-sm-6 mb-4">
                                        <input v-model="payment_method" :id="method.id" class="custom-checkbox" :value="method.id" type="radio">
                                        <label class="ml-2" :for="method.id">{{ method.name }}</label>
                                    </div>
                                </div>-->
                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="mb-5 border-bottom pb-2">Select A Payment Method</h3>
                                    </div>

                                    <div v-for="method in paymentMethods" :key="method.id" class="col-sm-6 mb-4">
                                        <input v-model="payment_method" :id="method.id" class="custom-checkbox"
                                               :value="method.id" type="radio">
                                        <label class="ml-2" :for="method.id">{{ method.name }}</label>
                                    </div>
                                </div>


                                <div class="p-4 bg-gray text-right">
                                    <h4 v-if="showErrMsg" class="text-danger">All fields are required</h4>
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
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                phone: '',
                country: '',
                city: '',
                zipCode: '',
                showErrMsg: false,
                addressList: [],    // List of addresses if there any available - (For drop down)
                selectedBillingAddressID: '',    // Selected selectedBillingAddressID from the list
                selectedAddress: [],
                paymentMethods: [],
                payment_method: '',
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
                if (this.$store.getters.cartItemCount < 1) {
                    this.$router.push('/shop');
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

                    this.firstName = this.selectedAddress.name.split(' ')[0];
                    this.lastName = this.selectedAddress.name.split(' ')[1];
                    this.email = this.selectedAddress.email;
                    this.address = this.selectedAddress.address;
                    this.phone = this.selectedAddress.phone;
                    this.country = this.selectedAddress.country;
                    this.city = this.selectedAddress.city;
                    this.zipCode = this.selectedAddress.postcode;
                    console.log(resp.data.data)
                }).catch(err => {
                    console.log(err)
                });
            },
            storeInfo: function () {
                if (this.firstName === '' || this.lastName === '' || this.email === '' || this.address === ''
                    || this.phone === '' || this.country === '' || this.city === '' || this.zipCode === ''
                    || this.payment_method === '') {
                    this.showErrMsg = true;
                } else {
                    this.showErrMsg = false;

                    // Storing Billing info into state
                    this.$store.dispatch('storeBillingInfoAction', {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        address: this.address,
                        phone: this.phone,
                        country: this.country,
                        city: this.city,
                        zipCode: this.zipCode,
                        paymentMethod: this.payment_method,
                    });

                    if (this.$store.getters.getterIsAllProductDigital) {
                        this.$router.push('/review');
                    } else {
                        this.$router.push('/shipping');
                    }

                }
            },
            onFieldLoad: function () {
                this.loadAddressList();
                this.getPaymentMethodList();

                const billingInstance = this.$store.getters.getterBillingInfo;

                if (Object.keys(billingInstance).length !== 0) {
                    // Billing info
                    this.firstName = billingInstance.firstName;
                    this.lastName = billingInstance.lastName;
                    this.email = billingInstance.email;
                    this.address = billingInstance.address;
                    this.phone = billingInstance.phone;
                    this.country = billingInstance.country;
                    this.city = billingInstance.city;
                    this.zipCode = billingInstance.zipCode;
                }
            },
            getPaymentMethodList: function () {
                axios.get(Settings.GetApiUrl() + '/payment-methods', {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp.data);
                    this.paymentMethods = resp.data.data;
                }).catch(err => {
                    console.log(err)
                })
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
