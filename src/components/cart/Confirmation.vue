<template>
    <div>
        <Header/>
        <navigation/>

        <!-- main wrapper -->
        <div class="main-wrapper">

            <!-- Page Wrapper -->
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="block text-center">
                                <h3 class="text-center mb-3">Thank you! For your payment</h3>
                                <p class="text-color">Your order has been placed and will be processed as soon as possible. Make sure you make note of your order number, which is <span class="text-primary">34VB5540K83</span> You will be receiving an email shortly with confirmation of your order. You can now:</p>
                                <router-link to="/shop" class="btn btn-primary mt-3 mx-2">Go To Shopping</router-link>
                                <router-link to="/track" class="btn btn-dark mt-3 mx-2">Track order</router-link>
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
    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";

    export default {
        name: "Confirmation",
        components: {Footer, Navigation, Header},
        mounted() {
            this.checkRequired();
        },
        methods: {
            checkRequired : function(){
                if (this.$store.getters.getterPaymentInfo.length === undefined) {
                    this.$router.push('/review');
                } else {
                    this.$router.push('/confirmation');
                }
            },
        }
    }
</script>

<style scoped>

</style>
