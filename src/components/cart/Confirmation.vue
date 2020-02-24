<template>
    <div>
        <Header/>
        <Navigation/>

        <!-- main wrapper -->
        <div class="main-wrapper">

            <!-- Page Wrapper -->
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div v-if="is_payment_done === 'payment_completed'" class="block text-center">
                                <h3 class="text-center mb-3">Thank you! For your payment</h3>
                                <p class="text-color">Your order has been placed and will be processed as soon as
                                    possible. Make sure you make note of your order number, which is <span
                                            class="text-primary">{{ trackingHash }}</span> You will be receiving an
                                    email shortly with confirmation of your order. You can now:</p>
                                <router-link to="/shop" class="btn btn-primary mt-3 mx-2">Go To Shopping</router-link>
                                <button @click="onOrderTrack" class="btn btn-dark mt-3 mx-2">Track order</button>
                            </div>
                            <div v-else-if="is_payment_done === 'payment_failed'">
                                <h3 class="text-center mb-3">Payment Field</h3>
                                <router-link to="/shop" class="btn btn-primary mt-3 mx-2">Go To Shopping</router-link>
                            </div>
                            <div v-else-if="is_payment_done === 'payment_pending'">
                                <h3 class="text-center mb-3">Your Payment is pending</h3>
                                <router-link to="/shop" class="btn btn-primary mt-3 mx-2">Go To Shopping</router-link>
                                <button @click="onOrderTrack" class="btn btn-dark mt-3 mx-2">Track order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section><!-- /.page-warpper -->

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
        name: "Confirmation",
        components: {Footer, Navigation, Header},
        data() {
            return {
                orderDetails: '',
                trackingHash: '',
                is_payment_done: '',
            }
        },
        mounted() {
            this.checkRequired();
            this.loadOrderInfo();
        },
        methods: {
            checkRequired: function (orderId) {
                /*if (Object.keys(this.$store.getters.getterPaymentInfo) < 1) {
                    this.$router.push('/review');
                } else {
                    this.$store.dispatch('resetStateAction');
                }*/
                /*if (orderId !== this.$route.params.id) {
                    this.$router.push('/payment/' + this.$route.params.id);
                }*/
                if (this.$route.params.id === '') {
                    this.$router.push('/review');
                }
            },
            loadOrderInfo: function () {
                axios.get(Settings.GetApiUrl() + '/orders/' + this.$route.params.id, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    this.checkRequired(resp.data.data.id);

                    this.orderDetails = resp.data.data;
                    this.is_payment_done = resp.data.data.payment_status;
                    this.trackingHash = resp.data.data.hash;

                    this.$store.dispatch('resetStateAction'); // reset state
                }).catch(err => {
                    console.log(err)
                })
            },
            onOrderTrack: function () {
                this.$router.push('/order-history/' + this.$route.params.id);
            }
        }
    }
</script>

<style scoped>

</style>
