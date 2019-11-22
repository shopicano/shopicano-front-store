<template>
    <div>
        <Header/>
        <Navigation/>

        <!-- main wrapper -->
        <div class="main-wrapper">

            <div id="quickView" class="quickview">
                <div class="row w-100">
                    <div class="col-lg-6 col-md-6 mb-5 mb-md-0 pl-5 pt-4 pt-lg-0 pl-lg-0">
                        <img src="images/feature/product.png" alt="product-img" class="img-fluid">
                    </div>
                    <div class="col-lg-5 col-md-6 text-center text-md-left align-self-center pl-5">
                        <h3 class="mb-lg-2 mb-2">Woven Crop Cami</h3>
                        <span class="mb-lg-4 mb-3 h5">$90.00</span>
                        <p class="mb-lg-4 mb-3 text-gray">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspic atis unde omnis iste natus</p>
                        <form action="#">
                            <select class="form-control w-100 mb-2" name="color">
                                <option value="brown">Brown Color</option>
                                <option value="gray">Gray Color</option>
                                <option value="black">Black Color</option>
                            </select>
                            <select class="form-control w-100 mb-3" name="size">
                                <option value="small">Small Size</option>
                                <option value="medium">Medium Size</option>
                                <option value="large">Large Size</option>
                            </select>
                            <button class="btn btn-primary w-100 mb-lg-4 mb-3">add to cart</button>
                        </form>
                        <ul class="list-inline social-icon-alt">
                            <li class="list-inline-item"><a href="#"><i class="ti-facebook"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="ti-twitter-alt"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="ti-vimeo-alt"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="ti-google"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- shop -->
            <section class="section">
                <div class="container">
                    <div class="row">
                        <!-- top bar -->
                        <div class="col-lg-12 mb-50">
                            <div class="d-flex border">
                                <div class="flex-basis-55 p-2 p-sm-4 align-self-sm-center">
                                    <p class="text-gray mb-0">Showing <span class="text-color">1-9 of 20</span> Results
                                    </p>
                                </div>
                                <div class="flex-basis-15 p-2 p-sm-4 border-right border-left text-center">
                                    <select class="select" name="filter" id="filter">
                                        <option value="1">Filter</option>
                                        <option value="2">Popular</option>
                                        <option value="3">Top Products</option>
                                    </select>
                                </div>
                                <div class="flex-basis-15 p-2 p-sm-4 text-center">
                                    <select class="select" name="short" id="short">
                                        <option value="1">Sort</option>
                                        <option value="2">A-Z</option>
                                        <option value="3">Z-A</option>
                                        <option value="3">Price High</option>
                                        <option value="3">Price Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- sidebar -->
                        <div class="col-lg-3">
                            <!-- search product -->
                            <div class="position-relative mb-5">
                                <form action="#">
                                    <input type="search" class="form-control rounded-0" id="search-product"
                                           placeholder="Search...">
                                    <button type="submit" class="search-icon pr-3 r-0"><i
                                            class="ti-search text-color"></i></button>
                                </form>
                            </div>
                            <!-- categories -->
                            <div class="mb-30">
                                <h4 class="mb-3">Shop by Categories</h4>
                                <ul class="pl-0 shop-list list-unstyled">
                                    <li>
                                        <a href="#" class="d-flex py-2 text-gray justify-content-between">
                                            <span>Women’s Clothing</span><span>9</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex py-2 text-gray justify-content-between">
                                            <span>Man Fashion</span><span>5</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex py-2 text-gray justify-content-between">
                                            <span>Kid’s Clothing</span><span>3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex py-2 text-gray justify-content-between">
                                            <span>Watches & Jewelry</span><span>2</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex py-2 text-gray justify-content-between">
                                            <span>Bags & Shoes</span><span>7</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex py-2 text-gray justify-content-between">
                                            <span>Toys & Kids</span><span>1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex py-2 text-gray justify-content-between">
                                            <span>Electronics</span><span>8</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex py-2 text-gray justify-content-between">
                                            <span>Computers</span><span>11</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <!-- product-list -->
                        <div class="col-lg-9">
                            <div class="row">
                                <!-- product -->
                                <div v-for="product in productsList" class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <router-link to="/products">
                                                    <img class="img-fluid w-100 mb-3 img-first imageDim"
                                                         v-bind:src="getFullImagePath(product.image)" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second imageDim"
                                                         v-bind:src="getFullImagePath(product.image)" alt="product-img">
                                                </router-link>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   v-on:click="onClikView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><router-link class="text-color" to="/products">Leather
                                                Backpack</router-link></h3>
                                            <span class="h5">$320.79</span>
                                        </div>
                                        <!-- product label badge -->
                                        <div class="product-label sale">
                                            -8%
                                        </div>
                                    </div>
                                </div>
                                <!-- //end of product -->

                                <div class="col-12 mt-5">
                                    <nav>
                                        <div class="pagination justify-content-center">
                                            <div class="overflow-auto">
                                                <BPagination
                                                        class="page-item"
                                                        v-model="currentPage"
                                                        :limit="4"
                                                        :total-rows="rows"
                                                        :per-page="perPage"
                                                        :link-gen="getData">
                                                </BPagination>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /shop -->

            <Services/>
            <NewsLetter/>
            <Footer/>
        </div>
        <!-- /main wrapper -->
    </div>
</template>

<script>
    import { BPagination } from 'bootstrap-vue';
    import axios from 'axios';

    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import NewsLetter from "@/components/indexComponents/NewsLetter";
    import Services from "@/components/indexComponents/Services";
    import Settings from "@/common/settings";

    export default {
        name: "Shop",
        components: {Services, NewsLetter, Footer, Navigation, Header, BPagination},
        data() {
            return{
                rows: 100,
                currentPage: 1,
                perPage: 20,
                productsList: [],
            }
        },
        mounted() {
            this.getProducts();
            this.loadjQueryScripts();
        },
        computed: {
            getData: function () {
                console.log(this.currentPage);
                return this.getProducts();
            }
        },
        methods: {
            getProducts: function () {
                axios.get( Settings.GetApiUrl() + "/products?page=" + this.currentPage + "&limit="
                    + this.perPage,).then(resp => {
                    this.productsList = resp.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },
            getFullImagePath(subPath) {
                return Settings.GetMediaUrl() + subPath;
            },
            loadjQueryScripts: function () {
                // tooltip
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip();
                });
            },
            onClikView: function () {
                //  collection item quick view
                $('.venobox').venobox({
                    framewidth: '80%',
                    frameheight: '100%'
                });
            }
        },
    }
</script>

<style scoped>
    @import '~bootstrap-vue/dist/bootstrap-vue.css';
    .imageDim {
        height: 330px!important;
    }
</style>
