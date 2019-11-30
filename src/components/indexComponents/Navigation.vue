<template>
    <!-- navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white w-100" id="navbar">
        <a class="navbar-brand order-2 order-lg-1" href="/">
            <img class="img-fluid" src="images/logo.png" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse order-1 order-lg-2" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li @click="emitToShop" class="nav-item">
                    <router-link class="nav-link" to="/shop">Shop</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact Us</router-link>
                </li>
            </ul>
        </div>
        <div class="order-3 navbar-right-elements">
            <div class="search-cart">
                <div class="cart">
                    <button id="cartOpen" class="cart-btn" v-on:click="onCartClicked">
                        <i class="ti-bag"></i>
                        <span class="d-xs-none">CART</span> 3
                    </button>

                    <div class="cart-wrapper" v-bind:class="{ open:isCartOpen }">
                        <i id="cartClose" class="ti-close cart-close" v-on:click="onCartClose"></i>
                        <h4 class="mb-4">Your Cart</h4>

                        <ul class="pl-0 mb-3 cart-dimension">
                            <li class="d-flex border-bottom">
                                <img src="images/cart/product-1.jpg" alt="product-img">
                                <div class="mx-3">
                                    <h6>Eleven Paris Skinny Jeans</h6>
                                    <span>1</span> X <span>$79.00</span>
                                </div>
                                <i class="ti-close"></i>
                            </li>
                            <li class="d-flex border-bottom">
                                <img src="images/cart/product-2.jpg" alt="product-img">
                                <div class="mx-3">
                                    <h6>Eleven Paris Skinny Jeans top</h6>
                                    <span>1 X</span> <span>$79.00</span>
                                </div>
                                <i class="ti-close"></i>
                            </li>
                            <li class="d-flex border-bottom">
                                <img src="images/cart/product-2.jpg" alt="product-img">
                                <div class="mx-3">
                                    <h6>Eleven Paris Skinny Jeans top</h6>
                                    <span>1 X</span> <span>$79.00</span>
                                </div>
                                <i class="ti-close"></i>
                            </li>
                            <li class="d-flex border-bottom">
                                <img src="images/cart/product-2.jpg" alt="product-img">
                                <div class="mx-3">
                                    <h6>Eleven Paris Skinny Jeans top</h6>
                                    <span>1 X</span> <span>$79.00</span>
                                </div>
                                <i class="ti-close"></i>
                            </li>
                            <li class="d-flex border-bottom">
                                <img src="images/cart/product-2.jpg" alt="product-img">
                                <div class="mx-3">
                                    <h6>Eleven Paris Skinny Jeans top</h6>
                                    <span>1 X</span> <span>$79.00</span>
                                </div>
                                <i class="ti-close"></i>
                            </li>
                        </ul>

                        <div class="mb-3">
                            <span>Cart Total</span>
                            <span class="float-right">$79.00</span>
                        </div>
                        <div class="text-center">
                            <router-link to="/cart" class="btn btn-dark btn-mobile rounded-0">view cart</router-link>
                            <router-link to="/shipping" class="btn btn-dark btn-mobile rounded-0">check out</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation",
        data(){
            return {
                isCartOpen: false,
            };
        },
        methods: {
            onCartClicked: function () {
                //this.$router.push("/cart")
                this.isCartOpen = true;
            },
            onCartClose: function () {
                this.isCartOpen = false;
            },
            emitToShop: function () {
                this.$emit('changeValue', false)
            }
        }
    }
</script>

<style scoped>
    .cart-dimension{
        height: 235px;
        overflow: auto;
    }
</style>
