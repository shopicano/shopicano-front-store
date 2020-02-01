<template>
    <div>
        <Header/>
        <Navigation logo="../images/logo.png"/>

        <!-- main wrapper -->
        <div class="main-wrapper">

            <!-- breadcrumb -->
            <nav class="bg-gray py-3">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Product Single</li>
                    </ol>
                </div>
            </nav>
            <!-- /breadcrumb -->

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
                            <!--<select class="form-control w-100 mb-2" name="color">
                                <option value="brown">Brown Color</option>
                                <option value="gray">Gray Color</option>
                                <option value="black">Black Color</option>
                            </select>
                            <select class="form-control w-100 mb-3" name="size">
                                <option value="small">Small Size</option>
                                <option value="medium">Medium Size</option>
                                <option value="large">Large Size</option>
                            </select>-->
                            <button class="btn btn-primary w-100 mb-lg-4 mb-3 mt-1">add to cart</button>
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

            <!-- product-single -->
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <!-- product image slider -->
                            <!--<div class="product-slider">
                                <div v-bind:data-image="getFullImagePath(product.image)">
                                    <img class="img-fluid w-100 image-zoom" v-bind:src="getFullImagePath(product.image)" alt="product-img"
                                         v-bind:data-zoom="getFullImagePath(product.image)">
                                </div>
                                <div v-bind:data-image="getFullImagePath(product.image)">
                                    <img class="img-fluid w-100 image-zoom" v-bind:src="getFullImagePath(product.image)" alt="product-img"
                                         v-bind:data-zoom="getFullImagePath(product.image)">
                                </div>
                                <div v-bind:data-image="getFullImagePath(product.image)">
                                    <img class="img-fluid w-100 image-zoom" v-bind:src="getFullImagePath(product.image)"  alt="product-img"
                                         v-bind:data-zoom="getFullImagePath(product.image)">
                                </div>
                            </div>-->

                            <VueAgile :options="sliderOptions">
                                <div class="slide">
                                    <img class="img-fluid w-100 image-zoom" v-bind:src="getFullImagePath(product.image)" alt="product-img">
                                </div>

                                <div :key="img.id" class="slide" v-for="img in product.additional_images.split(',')">
                                    <img class="img-fluid w-100 image-zoom" v-bind:src="getFullImagePath(img)" alt="product-img">
                                </div>
                            </VueAgile>
                        </div>
                        <!-- produt details -->
                        <div class="col-lg-6 mb-100">
                            <h2>{{ product.name }}</h2>
                            <i class="ti-check-box text-success"/>
                            <span class="text-success">Instock</span>
                            <!--<ul class="list-inline mb-4">
                                <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"/></a></li>
                                <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"/></a></li>
                                <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"/></a></li>
                                <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"/></a></li>
                                <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"/></a></li>
                                <li class="list-inline-item"><a href="#" class="text-gray ml-3">( 3 Reviews )</a></li>
                            </ul>-->
                            <h4 class="text-primary h3 mt-2">${{ product.price }} <!--<s class="text-color ml-2">$90.00</s>--></h4>
                            <!--<h6 class="mb-4">You save: <span class="text-primary">$25.00 USD (30%)</span></h6>-->
                            <div class="d-flex flex-column flex-sm-row justify-content-between mt-5 mb-4">
                                <div class="input-group  bootstrap-touchspin bootstrap-touchspin-injected w-25">
                                    <input id="quantity" class="quantity mr-sm-2 mb-3 mb-sm-0 form-control"
                                           v-model.number="quantity"
                                           @keydown="$event.key === '-' ? $event.preventDefault() : null"
                                           min="1"
                                           type="number">

                                    <span class="input-group-btn-vertical">
                                        <button @click="onQuantityUp"
                                                class="btn btn-primary bootstrap-touchspin-up angle-up">+</button>
                                        <button @click="onQuantityDown"
                                                class="btn btn-primary bootstrap-touchspin-down angle-down">-</button>
                                    </span>
                                </div>


                                <!--<select class="form-control mx-sm-2 mb-3 mb-sm-0" name="color">
                                    <option value="brown">Brown Color</option>
                                    <option value="gray">Gray Color</option>
                                    <option value="black">Black Color</option>
                                </select>

                                <select class="form-control ml-sm-2 mb-3 mb-sm-0" name="size">
                                    <option class="form-control" value="small">Small Size</option>
                                    <option value="medium">Medium Size</option>
                                    <option value="large">Large Size</option>
                                </select>-->
                            </div>
                            <button @click="addToCart(product.id, getFullImagePath(product.image), product.name, quantity, product.price)"
                                    class="btn btn-primary mb-4">add to cart</button>
                            <!--<h4 class="mb-3"><span class="text-primary">Harry up!</span> Sale ends in</h4>-->
                            <!-- syo-timer -->
                            <div class="syotimer dark">
                                <div id="sale-timer" data-year="2019" data-month="5" data-day="1" data-hour="1"></div>
                            </div>

                            <!--<div class="payment-option border border-primary mt-5 mb-4">
                                <h5 class="bg-white">Guaranted Safe Checkout</h5>
                                <img class="img-fluid w-100 p-3" src="../../public/images/payment-card/all-card.png" alt="payment-card">
                            </div>-->

                        </div>
                        <div class="col-lg-12 mt-5">
                            <h3 class="mb-3">Product Description</h3>
                            <p class="text-gray mb-4">{{ product.description }}</p>
                            <!--<h4>Product Features</h4>
                            <ul class="features-list">
                                <li>Mapped with 3M™ Thinsulate™ Insulation [40G Body / Sleeves / Hood]</li>
                                <li>Embossed Taffeta Lining</li>
                                <li>DRYRIDE Durashell™ 2-Layer Oxford Fabric [10,000MM, 5,000G]</li>
                            </ul>-->
                        </div>
                    </div>
                </div>
            </section>
            <!-- /product-single -->

            <!-- testimonial -->
            <!--<section class="section bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3 class="mb-4">What Our Customers Think?</h3>
                        </div>
                        &lt;!&ndash; testimonial-item &ndash;&gt;
                        <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div class="d-flex">
                                <div>
                                    <img class="rounded-circle mr-4" src="images/customer/customer-1.jpg" alt="customer-img">
                                </div>
                                <div>
                                    <ul class="list-inline">
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                    </ul>
                                    <h4 class="text-dark">Best quality for the price</h4>
                                    <p class="text-gray">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe
                                        laudant tota rem ape riamipsa eaque.</p>
                                    <h5 class="customer-name text-dark">Maggie Scott</h5>
                                </div>
                            </div>
                        </div>
                        &lt;!&ndash; testimonial-item &ndash;&gt;
                        <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div class="d-flex">
                                <div>
                                    <img class="rounded-circle mr-4" src="images/customer/customer-2.jpg" alt="customer-img">
                                </div>
                                <div>
                                    <ul class="list-inline">
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                    </ul>
                                    <h4 class="text-dark">Best quality for the price</h4>
                                    <p class="text-gray">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe
                                        laudant tota rem ape riamipsa eaque.</p>
                                    <h5 class="customer-name text-dark">Maggie Scott</h5>
                                </div>
                            </div>
                        </div>
                        &lt;!&ndash; testimonial-item &ndash;&gt;
                        <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div class="d-flex">
                                <div>
                                    <img class="rounded-circle mr-4" src="images/customer/customer-3.jpg" alt="customer-img">
                                </div>
                                <div>
                                    <ul class="list-inline">
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                        <li class="list-inline-item mx-0"><a href="#" class="rated"><i class="ti-star"></i></a></li>
                                    </ul>
                                    <h4 class="text-dark">Best quality for the price</h4>
                                    <p class="text-gray">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe
                                        laudant tota rem ape riamipsa eaque.</p>
                                    <h5 class="customer-name text-dark">Maggie Scott</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>-->
            <!-- /testimonial -->

            <!-- related products -->
            <!--<section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="mb-4">Related Products</h2>
                        </div>
                        &lt;!&ndash; product &ndash;&gt;
                        <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                            <div class="product text-center">
                                <div class="product-thumb">
                                    <div class="overflow-hidden position-relative">
                                        <router-link to="/products">
                                            <img class="img-fluid w-100 mb-3 img-first" src="images/collection/product-2.jpg" alt="product-img">
                                            <img class="img-fluid w-100 mb-3 img-second" src="images/collection/product-5.jpg" alt="product-img">
                                        </router-link>
                                        <div class="btn-cart">
                                            <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                        </div>
                                    </div>
                                    <div class="product-hover-overlay">
                                        <a href="#" class="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                                class="ti-heart"></i></a>
                                        <a data-vbtype="inline" href="#quickView" class="product-icon view venobox" data-toggle="tooltip"
                                           data-placement="left" title="Quick View"><i class="ti-search"></i></a>
                                    </div>
                                </div>
                                <div class="product-info">
                                    <h3 class="h5"><router-link class="text-color" to="/products">Box Leather Shoulder Bag</router-link></h3>
                                    <span class="h5">$520.79</span>
                                </div>
                                &lt;!&ndash; product label badge &ndash;&gt;
                                <div class="product-label new">
                                    new
                                </div>
                            </div>
                        </div>
                        &lt;!&ndash; //end of product &ndash;&gt;

                        &lt;!&ndash; product &ndash;&gt;
                        <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                            <div class="product text-center">
                                <div class="product-thumb">
                                    <div class="overflow-hidden position-relative">
                                        <router-link to="/products">
                                            <img class="img-fluid w-100 mb-3 img-first" src="images/collection/product-3.jpg" alt="product-img">
                                            <img class="img-fluid w-100 mb-3 img-second" src="images/collection/product-6.jpg" alt="product-img">
                                        </router-link>
                                        <div class="btn-cart">
                                            <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                        </div>
                                    </div>
                                    <div class="product-hover-overlay">
                                        <a href="#" class="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                                class="ti-heart"></i></a>
                                        <a data-vbtype="inline" href="#quickView" class="product-icon view venobox" data-toggle="tooltip"
                                           data-placement="left" title="Quick View"><i class="ti-search"></i></a>
                                    </div>
                                </div>
                                <div class="product-info">
                                    <h3 class="h5"><router-link class="text-color" to="/products">Sneaky Leather Sneakers</router-link></h3>
                                    <span class="h5">$270.79</span>
                                </div>
                                &lt;!&ndash; product label badge &ndash;&gt;
                                <div class="product-label sale">
                                    -10%
                                </div>
                            </div>
                        </div>
                        &lt;!&ndash; //end of product &ndash;&gt;

                        &lt;!&ndash; product &ndash;&gt;
                        <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                            <div class="product text-center">
                                <div class="product-thumb">
                                    <div class="overflow-hidden position-relative">
                                        <a href="product-single.html">
                                            <img class="img-fluid w-100 mb-3 img-first" src="images/collection/product-4.jpg" alt="product-img">
                                            <img class="img-fluid w-100 mb-3 img-second" src="images/collection/product-2.jpg" alt="product-img">
                                        </a>
                                        <div class="btn-cart">
                                            <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                        </div>
                                    </div>
                                    <div class="product-hover-overlay">
                                        <a href="#" class="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                                class="ti-heart"></i></a>
                                        <a href="#" class="product-icon cart" data-toggle="tooltip" data-placement="left" title="Compare"><i
                                                class="ti-direction-alt"></i></a>
                                        <a data-vbtype="inline" href="#quickView" class="product-icon view venobox" data-toggle="tooltip"
                                           data-placement="left" title="Quick View"><i class="ti-search"></i></a>
                                    </div>
                                </div>
                                <div class="product-info">
                                    <h3 class="h5"><a class="text-color" href="product-single.html">Puzzle leather shoulder bag</a></h3>
                                    <span class="h5">$400.79</span>
                                </div>
                                &lt;!&ndash; product label badge &ndash;&gt;
                                <div class="product-label new">
                                    new
                                </div>
                            </div>
                        </div>
                        &lt;!&ndash; //end of product &ndash;&gt;
                        &lt;!&ndash; product &ndash;&gt;
                        <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                            <div class="product text-center">
                                <div class="product-thumb">
                                    <div class="overflow-hidden position-relative">
                                        <a href="product-single.html">
                                            <img class="img-fluid w-100 mb-3 img-first" src="images/collection/product-6.jpg" alt="product-img">
                                            <img class="img-fluid w-100 mb-3 img-second" src="images/collection/product-1.jpg" alt="product-img">
                                        </a>
                                        <div class="btn-cart">
                                            <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                        </div>
                                    </div>
                                    <div class="product-hover-overlay">
                                        <a href="#" class="product-icon favorite" data-toggle="tooltip" data-placement="left" title="Wishlist"><i
                                                class="ti-heart"></i></a>
                                        <a href="#" class="product-icon cart" data-toggle="tooltip" data-placement="left" title="Compare"><i
                                                class="ti-direction-alt"></i></a>
                                        <a data-vbtype="inline" href="#quickView" class="product-icon view venobox" data-toggle="tooltip"
                                           data-placement="left" title="Quick View"><i class="ti-search"></i></a>
                                    </div>
                                </div>
                                <div class="product-info">
                                    <h3 class="h5"><a class="text-color" href="product-single.html">Puzzle leather shoulder bag</a></h3>
                                    <span class="h5">$400.79</span>
                                </div>
                            </div>
                        </div>
                        &lt;!&ndash; //end of product &ndash;&gt;
                    </div>
                </div>
            </section>-->
            <!-- /related products -->

            <Footer/>
        </div>
        <!-- /main wrapper -->
    </div>
</template>

<script>
    /* eslint-disable */
    import axios from "axios";
    import { VueAgile } from 'vue-agile';

    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import Settings from "@/common/settings";

    export default {
        name: "ProductView",
        components: {Footer, Navigation, Header, VueAgile},
        data() {
            return {
                product: [],
                quantity: 1,
                sliderOptions: {
                    navButtons: false,
                }
            };
        },
        mounted() {
            this.getProduct();
        },
        methods: {
            getProduct: function () {
                axios.get(Settings.GetApiUrl() + '/products/' + this.$route.params.id).then(resp => {
                    this.product = resp.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },
            getFullImagePath(subPath) {
                return Settings.GetMediaUrl() + subPath;
            },
            addToCart: function (id, imgUrl, itemName, quantity, price ) {
                //this.$store.dispatch('changeQuantityAction', {itemId: id, qntt: quantity});
                this.$store.dispatch('addItemToCartAction', {itemID: id, itemThumbnail: imgUrl, itemName: itemName, itemQuantity: quantity, itemPrice: price, subTotal:price, fromView: true})
            },
            onQuantityUp: function () {
                this.quantity += 1;
            },
            onQuantityDown: function () {
                if (this.quantity > 1) {
                    this.quantity -= 1;
                }
            }
        }
    }
</script>

<style scoped>
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
