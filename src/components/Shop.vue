<template>
    <div>
        <Header/>
        <Navigation @changeValue="categorySelected=false"/>

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
                            <li class="list-inline-item"><a href="#"><i class="ti-facebook"/></a></li>
                            <li class="list-inline-item"><a href="#"><i class="ti-twitter-alt"/></a></li>
                            <li class="list-inline-item"><a href="#"><i class="ti-vimeo-alt"/></a></li>
                            <li class="list-inline-item"><a href="#"><i class="ti-google"/></a></li>
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
                                    <input type="search"
                                           v-model="query"
                                           @keyup="onSearchProducts"
                                           class="form-control rounded-0" id="search-product"
                                           placeholder="Search...">
                                    <span class="search-icon pr-3 r-0">
                                        <i class="ti-search text-color"/></span>
                                </form>
                            </div>

                            <!-- categories -->
                            <div class="mb-30">
                                <h4 class="mb-3">Shop by Categories</h4>
                                <ul class="pl-0 shop-list list-unstyled">
                                    <li v-for="category in categories.slice(0,10)" :key="category.id" v-on:click="setCategoryId(category.id)">
                                        <a class="d-flex py-2 text-gray justify-content-between">
                                            <span>{{ category.name }}</span><span>9</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <!-- product-list -->
                        <div class="col-lg-9">
                            <div class="row">
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4"></div>
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div v-if="fetchIsEmpty" class="text-center">
                                        <h4 class="py-1 bg-dark text-white">Found no item.</h4>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-4"></div>

                                <div v-for="product in productsList" v-bind:key="product.id" class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <router-link :to="`/products/${product.id}`">
                                                    <img class="img-fluid w-100 mb-3 img-first imageDim"
                                                         v-bind:src="getFullImagePath(product.image)" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second imageDim"
                                                         v-bind:src="getFullImagePath(product.image)" alt="product-img">
                                                </router-link>
                                                <div class="btn-cart">
                                                    <button @click="addToCart(product.id, getFullImagePath(product.image), product.name, 1, product.price, product.is_digital)"
                                                            class="btn btn-primary btn-sm">Add To Cart</button>
                                                </div>
                                            </div>
                                            <!--<div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist">
                                                    <i class="ti-heart"/>
                                                </a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   v-on:click="onClikView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View">
                                                    <i class="ti-search"/>
                                                </a>
                                            </div>-->
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><router-link class="text-color" :to="`/products/${product.id}`">{{ product.name }}</router-link></h3>
                                            <span class="h5">${{ product.price }}</span>
                                        </div>
                                        <!-- product label badge -->
                                        <!--<div class="product-label sale">
                                            -8%
                                        </div>-->
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
                                                        :limit="3"
                                                        :hide-goto-end-buttons="true"
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
    /* eslint-disable */
    import { BPagination } from 'bootstrap-vue';
    import axios from 'axios';

    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import NewsLetter from "@/components/indexComponents/NewsLetter";
    import Services from "@/components/indexComponents/Services";
    import Settings from "@/common/settings";
    import SessionStore from "@/common/session_store";

    export default {
        name: "Shop",
        components: {Services, NewsLetter, Footer, Navigation, Header, BPagination},
        data() {
            return{
                rows: 100,
                currentPage: 1,
                perPage: 20,
                productsList: [],
                categories: [],
                catID: '',
                categoryItems: [],
                categorySelected: false,
                fetchIsEmpty: false,
                query: '',
                prevIsDigital: '',
            }
        },
        mounted() {
            this.getProducts();
            this.loadjQueryScripts();
            this.getCategories();
        },
        computed: {
            getData: function () {
                if (!this.categorySelected) {
                    return this.getProducts();
                } else if (this.categorySelected) {
                    return this.getCategoryItems();
                }
            }
        },
        methods: {
            getProducts: function () {
                axios.get( Settings.GetApiUrl() + "/products?page=" + this.currentPage + "&limit="
                    + this.perPage,).then(resp => {
                    this.productsList = resp.data.data;
                    this.categorySelected = false;
                }).catch(err => {
                    console.log(err);
                })
            },
            setCategoryId: function (id) {
                this.catID = id;
                this.categorySelected = true;

                this.getCategoryItems();
            },
            getCategoryItems: function () {
                axios.get( Settings.GetApiUrl() + "/products?page=" + this.currentPage + "&limit="
                    + this.perPage,).then(resp => {

                    this.categoryItems = [];
                    for (let key in resp.data.data) {
                        if (resp.data.data[key].category_id === this.catID) {
                            var obj = resp.data.data[key];
                            this.categoryItems.push(obj);
                        }
                    }

                    this.productsList = this.categoryItems;

                    console.log(this.categoryItems)
                }).catch(err => {
                    console.log(err);
                })
            },
            getCategories: function () {
                axios.get( Settings.GetApiUrl() + '/stats/categories').then(resp => {
                    this.categories = resp.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },
            getFullImagePath(subPath) {
                return Settings.GetMediaUrl() + subPath;
            },
            onSearchProducts: function() {
                axios.get(Settings.GetApiUrl() + '/products?query=' + this.query).then(resp => {
                    this.fetchIsEmpty = resp.data.data.length === 0;
                    this.productsList = resp.data.data;
                    console.log(this.productsList)
                }).catch(err => {
                    console.log(err);
                })
            },
            addToCart: function (id, imgUrl, itemName, quantity, price, isDigital) {
                /*if (this.tempIsDigital !== isDigital) {
                    alert('You can not add both Digital and Physical product in cart.')
                } else if (this.tempIsDigital==='' || this.tempIsDigital === isDigital) {
                }
                this.tempIsDigital = isDigital;*/

                if (this.prevIsDigital === '') {
                    this.$store.dispatch('addItemToCartAction', {itemID: id, itemThumbnail: imgUrl, itemName: itemName, itemQuantity: quantity, itemPrice: price});
                    this.prevIsDigital = isDigital;
                } else if (this.prevIsDigital !== isDigital) {
                    alert('Cart must have all digital or all non-digital products')
                } else if (this.prevIsDigital === isDigital) {
                    this.$store.dispatch('addItemToCartAction', {itemID: id, itemThumbnail: imgUrl, itemName: itemName, itemQuantity: quantity, itemPrice: price});
                    this.prevIsDigital = isDigital;
                }
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
            },
        },
    }
</script>

<style scoped>
    @import '~bootstrap-vue/dist/bootstrap-vue.css';
    .imageDim {
        height: 330px!important;
    }
</style>
