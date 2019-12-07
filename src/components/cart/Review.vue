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
                                    <router-link to="/shipping" class="text-center d-inline-block nav-item">
                                        <i class="ti-truck d-block mb-2"/>
                                        <span class="d-block h4">Shipping Method</span>
                                    </router-link>
                                    <router-link to="/payment" class="text-center d-inline-block nav-item">
                                        <i class="ti-wallet d-block mb-2"/>
                                        <span class="d-block h4">Payment Method</span>
                                    </router-link>
                                    <router-link to="/review" class="text-center d-inline-block nav-item active">
                                        <i class="ti-eye d-block mb-2"/>
                                        <span class="d-block h4">Review</span>
                                    </router-link>
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
                                            <td class="align-middle">1</td>
                                            <td class="align-middle">${{ item.itemPrice }}</td>
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
                                            <li>Somrat</li>
                                            <li>Mohammadpur, Dhaka 120, Bangladesh </li>
                                            <li>248-321-5879 </li>
                                            <li>example.site@email.com</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <h4 class="mb-3">Shipping Method</h4>
                                        <ul class="list-unstyled">
                                            <li>Standard Ground (USPS) - $9.50 </li>
                                            <li>Delivered in 8-10 business days. </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <h4 class="mb-3">Payment Method</h4>
                                        <ul class="list-unstyled">
                                            <li>Credit Card: </li>
                                            <li>**** **** **** 2637</li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- buttons -->
                                <div class="p-4 bg-gray d-flex justify-content-between">
                                    <router-link to="/payment" class="btn btn-dark">Back</router-link>
                                    <router-link to="/confirmation" class="btn btn-primary">Continue</router-link>
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
                                        <span>$237.00</span>
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

    export default {
        name: "Review",
        components: {Footer, Navigation, Header},
        data(){
            return {
                isCartNil: true,
            };
        },
        computed: {
            getFullCart(){
                this.isCartNil = this.$store.getters.cartItemCount < 1;
                return this.$store.getters.getCart;
            },
            grandTotalPrice() {
                return this.$store.getters.cartTotalPrice;
            }
        },
        methods: {
            onClickRemoveItem: function (id) {
                this.removeFromCart(id)
            },
            removeFromCart: function (itemId) {
                this.$store.dispatch('removeItemFromAction', itemId)
            },
        }
    }
</script>

<style scoped>

</style>