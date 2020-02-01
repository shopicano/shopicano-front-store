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
                                        <i class="ti-wallet d-block mb-2"/>
                                        <span class="d-block h4">Payment Method</span>
                                    </span>
                                    <span  class="text-center d-inline-block nav-item">
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
                                            @change="fetchAddressInfo(selectedBillingAddressID)" class="form-control" name="city">
                                        <option disabled value="">Select</option>
                                        <option v-for="addrs in addressList"
                                                :key="addrs.id"
                                                :value="addrs.id">{{ addrs.address }}</option>
                                    </select>
                                </div>
                                <form class="row">
                                    <div class="col-sm-6">
                                        <label for="firstName">First Name</label>
                                        <input v-model="firstName" class="form-control" type="text" id="firstName" name="firstName" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="lastName">Last Name</label>
                                        <input v-model="lastName" class="form-control" type="text" id="lastName" name="lastName" required>
                                    </div>
                                    <div class="col-sm-10">
                                        <label for="email">Email</label>
                                        <input v-model="email" class="form-control" type="email" id="email" name="email" required>
                                    </div>
                                    <div class="col-sm-12">
                                        <label for="address">Address</label>
                                        <input v-model="address" class="form-control" type="text" id="address" name="address" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="phone">Phone</label>
                                        <input v-model="phone" class="form-control" type="tel" id="phone" name="phone" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="zip-code">Zip Code</label>
                                        <input v-model="zipCode" class="form-control" type="text" id="zip-code" name="zip-code" required>
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
                                </form>
                                <!-- /Billing-address -->


                                <!-- shipping-address -->
                                <div v-if="!this.$store.getters.getterIsAllProductDigital">
                                    <h3 class="mb-5 mt-5 border-bottom pb-2">Shipping Address</h3>

                                    <div class="col-sm-6 mb-4">
                                        <input type="checkbox" v-on:change="checkIsSame" id="sameas" v-model="is_shipping_sameAs_billing">
                                        <label class="ml-2" for="sameas">Shipping Address same as Billing Address</label>
                                    </div>

                                    <div v-if="!is_shipping_sameAs_billing || addressList.length > 0" class="col-sm-12">
                                        <label>Fill form by Previous Information</label>
                                        <select v-model="selectedShippingAddressID"
                                                @change="fetchAddressInfo(selectedShippingAddressID)" class="form-control" name="city">
                                            <option disabled value="">Select</option>
                                            <option v-for="addrs in addressList"
                                                    :key="addrs.id"
                                                    :value="addrs.id">{{ addrs.address }}</option>
                                        </select>
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
                                        <div class="col-sm-10">
                                            <label for="email">Email</label>
                                            <input v-model="email_shipping" class="form-control" type="email" name="email" required>
                                        </div>
                                        <div class="col-sm-12">
                                            <label for="address">Address</label>
                                            <input v-model="address_shipping" class="form-control" type="text" name="address" required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="phone">Phone</label>
                                            <input v-model="phone_shipping" class="form-control" type="tel" name="phone" required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="zip-code">Zip Code</label>
                                            <input v-model="zipCode_shipping" class="form-control" type="text" name="zip-code" required>
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

                                        <!-- select shipping method -->
                                        <div class="col-12">
                                            <h3 class="mb-5 border-bottom pb-2">Select A Shipping Method</h3>
                                        </div>
                                        <div v-for="method in shpMethods" :key="method.id" class="col-sm-6 mb-4">
                                            <input v-model="shippingMethod" :id="method.id" class="custom-checkbox" type="radio"
                                                   :value="method.id">
                                            <label class="ml-2" :for="method.id">{{ method.name }} - ${{ method.delivery_charge }}</label>
                                            <small class="d-block ml-3">Delivered in {{ method.approximate_delivery_time }} business days.</small>
                                        </div>
                                        <!-- /select shipping method -->
                                    </form>
                                </div>

                                <!-- /shipping-address -->
                                <div class="p-4 bg-gray text-right">
                                    <h4 v-if="showErrMsg" class="text-danger">All fields are required</h4>
                                    <button @click="storeInfo"
                                            class="btn btn-primary">Continue</button>
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
                                    <strong>USD ${{ getCartTotalPrice }}</strong>
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
                selectedBillingAddressID: '',    // Selected selectedBillingAddressID from the list
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
            checkRequired : function(){
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
                    console.log(resp.data.data)
                }).catch(err => {
                    console.log(err)
                });
            },
            getShippingMethodList: function () {
                axios.get(Settings.GetApiUrl() + '/platform/shipping-methods?page=' + this.currentPage + '&limit='
                    + this.perPage, {
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
                if (this.$store.getters.getterIsAllProductDigital) {
                    if (this.firstName==='' || this.lastName==='' || this.email==='' || this.address===''
                        || this.phone==='' || this.country==='' || this.city==='' || this.zipCode==='') {
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
                        });

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
                } else if (!this.$store.getters.getterIsAllProductDigital) {
                    if (this.firstName==='' || this.lastName==='' || this.email==='' || this.address===''
                        || this.phone==='' || this.country==='' || this.city==='' || this.zipCode==='' || this.shippingMethod===''
                        || this.firstName_shipping==='' || this.lastName_shipping==='' || this.email_shipping===''
                        || this.address_shipping==='' || this.phone_shipping==='' ||
                        this.country_shipping==='' || this.city_shipping==='' || this.zipCode_shipping==='') {
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
                        });

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
                const isBothAddressSame = this.$store.getters.getterIfShippingSameAsBilling;

                if (Object.keys(billingInstance).length !== 0 && Object.keys(shippingInstance).length !== 0){
                    // Billing info
                    this.firstName = billingInstance.firstName;
                    this.lastName = billingInstance.lastName;
                    this.email = billingInstance.email;
                    this.address = billingInstance.address;
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
                    this.address_shipping = shippingInstance.address;
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
                    this.address_shipping = this.address;
                    this.phone_shipping = this.phone;
                    this.country_shipping = this.country;
                    this.city_shipping = this.city;
                    this.zipCode_shipping = this.zipCode;
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
        }
    }
</script>

<style scoped>
.btn-fade{
    opacity: .6;
    cursor: default!important;
}
</style>
