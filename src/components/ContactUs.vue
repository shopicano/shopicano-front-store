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
                        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </div>
            </nav>
            <!-- /breadcrumb -->

            <!-- google map -->
            <GmapMap
                    :center="{lat:23.755971, lng:90.366957}"
                    :zoom="15"
                    map-type-id="roadmap"
                    style="width: 100vw; height: 500px">
                <GmapMarker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :ref="`marker${index}`"
                        :clickable="true"
                        :icon="iconpath"
                        :draggable="true"
                        @click="center=m.position"/>
            </GmapMap>
            <!-- /google map -->

            <!-- contact -->
            <section class="section">
                <div class="container">
                    <div class="row justify-content-between">
                        <!-- form -->
                        <div class="col-lg-7 mb-5 mb-lg-0 text-center text-md-left">
                            <h2 class="section-title">Contact Us</h2>
                            <form action="#" class="row">
                                <div class="col-md-6">
                                    <input type="text" id="firstName" name="firstName" class="form-control mb-4 rounded-0" placeholder="First Name" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" id="lastName" name="lastName" class="form-control mb-4 rounded-0" placeholder="Last Name" required>
                                </div>
                                <div class="col-md-12">
                                    <input type="text" id="subject" name="subject" class="form-control mb-4 rounded-0" placeholder="Subject" required>
                                </div>
                                <div class="col-md-12">
                                    <textarea name="message" id="message" class="form-control rounded-0 mb-4" placeholder="Message"></textarea>
                                </div>
                                <div class="col-md-12">
                                    <button type="submit" value="send" class="btn btn-primary">Submit now</button>
                                </div>
                            </form>
                        </div>
                        <!-- contact item -->
                        <div class="col-lg-4">
                            <div class="d-flex mb-60">
                                <i class="ti-location-pin contact-icon"/>
                                <div>
                                    <h4>Our Location</h4>
                                    <p class="text-gray">Shopicano, Lalmatia, Mohammadpur</p>
                                </div>
                            </div>
                            <div class="d-flex mb-60">
                                <i class="ti-mobile contact-icon"/>
                                <div>
                                    <h4>Call Us Now</h4>
                                    <p class="text-gray mb-0">(+88) 0117 022 7728</p>
                                    <p class="text-gray mb-0">(+88) 0117 022 7729</p>
                                </div>
                            </div>
                            <div class="d-flex mb-60">
                                <i class="ti-email contact-icon"/>
                                <div>
                                    <h4>Write Us Now</h4>
                                    <p class="text-gray mb-0">info@shopicano.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /contact -->

            <Footer/>
        </div>
        <!-- /main wrapper -->
    </div>
</template>

<script>
    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer"

    export default {
        name: "ContactUs",
        components: {Footer, Navigation, Header},
        data() {
            return {
                iconpath: 'plugins/google-map/images/marker.png',
                markers: [
                    {
                        position: {
                            lat: 23.755971,
                            lng: 90.366957,
                        },
                    },
                ],
            };
        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
