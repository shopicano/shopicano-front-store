<template>
    <div>
        <!--    Loader  -->
        <loading :active.sync="isLoading"
                 :can-cancel="canCancel"
                 :is-full-page="fullPage"></loading>

        <Header/>
        <Navigation @changeValue="categorySelected=false"/>

        <!-- main wrapper -->
        <div class="main-wrapper">
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
                                    <li v-for="category in categories.slice(0,10)" :key="category.id"
                                        v-on:click="setCategoryId(category.id)">
                                        <a class="d-flex py-2 text-gray justify-content-between">
                                            <span>{{ category.name }}</span><span>{{ category.count }}</span>
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

                                <div v-for="product in productsList" v-bind:key="product.id"
                                     class="col-lg-4 col-sm-6 mb-4">
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
                                                    <button @click="addToCart(product,product.id, product.store_id, getFullImagePath(product.image), product.name, 1, product.price, product.is_digital)"
                                                            class="btn btn-primary btn-sm">{{
                                                        isOutOfStock(product)?"out of stock":"Add to cart" }}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5">
                                                <router-link class="text-color" :to="`/products/${product.id}`">{{
                                                    product.name }}
                                                </router-link>
                                            </h3>
                                            <span v-if="product.price !==0"
                                                  class="h5">${{ formatPrice(product.price) }}</span>
                                            <span v-if="product.price ===0" class="h5">Free</span>
                                            <span class="d-block">Seller: <span class="text-primary">{{ product.store_name }}</span></span>
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
    import {BPagination} from 'bootstrap-vue';
    import axios from 'axios';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import NewsLetter from "@/components/indexComponents/NewsLetter";
    import Services from "@/components/indexComponents/Services";
    import Settings from "@/common/settings";
    import SessionStore from "@/common/session_store";
    import NumberUtil from "../common/number";

    export default {
        name: "Shop",
        components: {Services, NewsLetter, Footer, Navigation, Header, BPagination, Loading},
        data() {
            return {
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
                isLoading: false,
                fullPage: true,
                canCancel: false,
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
            },
        },
        methods: {
            getProducts: function () {
                this.isLoading = true;
                axios.get(Settings.GetApiUrl() + "/products?page=" + this.currentPage + "&limit="
                    + this.perPage,).then(resp => {
                    this.productsList = resp.data.data;
                    this.categorySelected = false;
                    this.isLoading = false;
                }).catch(err => {
                    this.canCancel = true;
                    console.log(err);
                })
            },
            setCategoryId: function (id) {
                this.catID = id;
                this.categorySelected = true;

                this.getCategoryItems();
            },
            getCategoryItems: function () {
                axios.get(Settings.GetApiUrl() + "/products?page=" + this.currentPage + "&limit="
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
                axios.get(Settings.GetApiUrl() + '/stats/categories').then(resp => {
                    this.categories = resp.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },
            getFullImagePath(subPath) {
                return Settings.GetMediaUrl() + subPath;
            },
            onSearchProducts: function () {
                axios.get(Settings.GetApiUrl() + '/products?query=' + this.query).then(resp => {
                    this.fetchIsEmpty = resp.data.data.length === 0;
                    this.productsList = resp.data.data;
                    console.log(this.productsList)
                }).catch(err => {
                    console.log(err);
                })
            },
            addToCart: function (p, id, store_id, imgUrl, itemName, quantity, price, isDigital) {
                if (this.isOutOfStock(p)) {
                    return
                }

                const digital = this.$store.getters.getterIsAllProductDigital;
                const prevStoreId = this.$store.getters.getterIsFromSameStore;

                if (prevStoreId === '' || store_id === prevStoreId) {
                    this.$store.dispatch('isFromSameStoreAction', store_id)
                } else {
                    return alert('All selected products must be from same store.')
                }

                if (digital === '' || digital === isDigital) {
                    this.$store.dispatch('storeIsProductDigitalAction', isDigital);
                    this.$store.dispatch('addItemToCartAction', {
                        itemID: id,
                        storeID: store_id,
                        itemThumbnail: imgUrl,
                        itemName: itemName,
                        itemQuantity: quantity,
                        itemPrice: price
                    });

                    //console.log(this.$store.getters.getterIsAllProductDigital);
                } else if (digital !== isDigital) {
                    alert('Cart must have all Digital or all Non-Digital products');
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
            formatPrice: function (v) {
                return NumberUtil.toDisplayUnit(v);
            },
            isOutOfStock: function (product) {
                console.log(product);

                if (product.is_digital) {
                    return false;
                }
                return product.stock <= 0
            }
        },
    }
</script>

<style scoped>
    @import '~bootstrap-vue/dist/bootstrap-vue.css';

    .imageDim {
        height: 330px !important;
    }
</style>
