<template>
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <h2 class="section-title">Top Categories</h2>
                </div>
                <!-- categories item -->
                <div v-for="category in categories" class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <router-link to="/shop">
                                <img class="rounded-top img-fluid imageDim" alt="product-img"
                                     v-bind:src="getFullImagePath(category.image)" >
                            </router-link>
                        </div>
                        <ul class="d-flex list-unstyled pl-0 categories-list">
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-1.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-2.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-3.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                        </ul>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">{{ category.name }}</h4>
                            <a href="shop.html" class="btn btn-sm btn-outline-primary float-right">view more</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 text-center">
                    <h2 class="section-title">Top Products</h2>
                </div>
                <!-- categories item -->
                <div class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <a href="shop.html"><img src="images/categories/product-big-1.jpg"
                                                     class="rounded-top img-fluid w-100" alt="product-img"></a>
                        </div>
                        <ul class="d-flex list-unstyled pl-0 categories-list">
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-1.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-2.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-3.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                        </ul>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">Clothing</h4>
                            <a href="shop.html" class="btn btn-sm btn-outline-primary float-right">view more</a>
                        </div>
                    </div>
                </div>
                <!-- categories item -->
                <div class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <a href="shop.html"><img src="images/categories/product-big-2.jpg"
                                                     class="rounded-top img-fluid w-100" alt="product-img"></a>
                        </div>
                        <ul class="d-flex list-unstyled pl-0 categories-list">
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-4.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-5.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-6.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                        </ul>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">Shoes</h4>
                            <a href="shop.html" class="btn btn-sm btn-outline-primary float-right">view more</a>
                        </div>
                    </div>
                </div>
                <!-- categories item -->
                <div class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <a href="shop.html"><img src="images/categories/product-big-3.jpg"
                                                     class="rounded-top img-fluid w-100" alt="product-img"></a>
                        </div>
                        <ul class="d-flex list-unstyled pl-0 categories-list">
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-7.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-8.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-9.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                        </ul>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">Accessories</h4>
                            <a href="shop.html" class="btn btn-sm btn-outline-primary float-right">view more</a>
                        </div>
                    </div>
                </div>
                <!-- categories item -->
                <div class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <a href="shop.html"><img src="images/categories/product-big-1.jpg"
                                                     class="rounded-top img-fluid w-100" alt="product-img"></a>
                        </div>
                        <ul class="d-flex list-unstyled pl-0 categories-list">
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-1.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-2.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-3.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                        </ul>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">Clothing</h4>
                            <a href="shop.html" class="btn btn-sm btn-outline-primary float-right">view more</a>
                        </div>
                    </div>
                </div>
                <!-- categories item -->
                <div class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <a href="shop.html"><img src="images/categories/product-big-2.jpg"
                                                     class="rounded-top img-fluid w-100" alt="product-img"></a>
                        </div>
                        <ul class="d-flex list-unstyled pl-0 categories-list">
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-4.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-5.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-6.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                        </ul>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">Shoes</h4>
                            <a href="shop.html" class="btn btn-sm btn-outline-primary float-right">view more</a>
                        </div>
                    </div>
                </div>
                <!-- categories item -->
                <div class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <a href="shop.html"><img src="images/categories/product-big-3.jpg"
                                                     class="rounded-top img-fluid w-100" alt="product-img"></a>
                        </div>
                        <ul class="d-flex list-unstyled pl-0 categories-list">
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-7.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-8.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-9.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                        </ul>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">Accessories</h4>
                            <a href="shop.html" class="btn btn-sm btn-outline-primary float-right">view more</a>
                        </div>
                    </div>
                </div>
                <!-- categories item -->
                <div class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <a href="shop.html"><img src="images/categories/product-big-1.jpg"
                                                     class="rounded-top img-fluid w-100" alt="product-img"></a>
                        </div>
                        <ul class="d-flex list-unstyled pl-0 categories-list">
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-1.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-2.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-3.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                        </ul>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">Clothing</h4>
                            <a href="shop.html" class="btn btn-sm btn-outline-primary float-right">view more</a>
                        </div>
                    </div>
                </div>
                <!-- categories item -->
                <div class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <a href="shop.html"><img src="images/categories/product-big-2.jpg"
                                                     class="rounded-top img-fluid w-100" alt="product-img"></a>
                        </div>
                        <ul class="d-flex list-unstyled pl-0 categories-list">
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-4.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-5.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-6.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                        </ul>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">Shoes</h4>
                            <a href="shop.html" class="btn btn-sm btn-outline-primary float-right">view more</a>
                        </div>
                    </div>
                </div>
                <!-- categories item -->
                <div class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <a href="shop.html"><img src="images/categories/product-big-3.jpg"
                                                     class="rounded-top img-fluid w-100" alt="product-img"></a>
                        </div>
                        <ul class="d-flex list-unstyled pl-0 categories-list">
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-7.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-8.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                            <li class="m-0 hover-zoom-img">
                                <a href="shop.html"><img src="images/categories/product-sm-9.jpg"
                                                         class="img-fluid w-100" alt="product-img"></a>
                            </li>
                        </ul>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">Accessories</h4>
                            <a href="shop.html" class="btn btn-sm btn-outline-primary float-right">view more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from "axios";
    import Settings from "@/common/settings";

    export default {
        name: "Home",
        components: {  },
        data() {
            return {
                categories: [],
            };
        },
        mounted() {
            this.getCategories();
        },
        methods: {
            getCategories: function () {
                axios.get( Settings.GetApiUrl() + '/categories?limit=3').then(resp => {
                    console.log(resp);
                    this.categories = resp.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },
            getFullImagePath(subPath) {
                return Settings.GetMediaUrl() + subPath;
            },
        },
    }
</script>

<style scoped>
    .imageDim {
        height: 267px!important;
    }
</style>

