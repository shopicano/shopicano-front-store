<template>
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <h2 class="section-title">Top Categories</h2>
                </div>
                <!-- categories item -->
                <div v-for="category in topCategories.slice(0,3)"
                     v-bind:key="category.id"
                     class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <router-link to="/shop">
                                <img class="rounded-top img-fluid imageDim" alt="product-img"
                                     v-bind:src="getFullImagePath(category.image)" >
                            </router-link>
                        </div>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">{{ category.name }}</h4>
                            <router-link to="/shop" class="btn btn-sm btn-outline-primary float-right">view more</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 text-center">
                    <h2 class="section-title">Top Products</h2>
                </div>
                <!-- Top product item -->
                <div v-for="tp in topProducts.slice(0,6)"
                     v-bind:key="tp.id"
                     class="col-lg-4 col-md-6 mb-50">
                    <div class="card p-0">
                        <div class="border-bottom text-center hover-zoom-img">
                            <router-link :to="`/products/${tp.id}`">
                                <img class="rounded-top img-fluid imageDim" alt="product-img"
                                     v-bind:src="getFullImagePath(tp.image)" >
                            </router-link>
                        </div>
                        <div class="px-4 py-3 border-top">
                            <h4 class="d-inline-block mb-0 mt-1">{{ tp.name }}</h4>
                            <router-link to="/shop" class="btn btn-sm btn-outline-primary float-right">view more</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    /* eslint-disable */
    import axios from "axios";
    import Settings from "@/common/settings";

    export default {
        name: "Home",
        components: {  },
        data() {
            return {
                topCategories: [],
                topProducts: [],
            };
        },
        mounted() {
            this.getCategories();
            this.getProducts();
        },
        methods: {
            getCategories: function () {
                axios.get( Settings.GetApiUrl() + '/stats/categories').then(resp => {
                    this.topCategories = resp.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },
            getProducts: function () {
                axios.get( Settings.GetApiUrl() + '/stats/products').then(resp => {
                    this.topProducts = resp.data.data;
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

