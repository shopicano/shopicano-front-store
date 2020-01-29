<template>
    <!-- navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white w-100" id="navbar">
        <a class="navbar-brand order-2 order-lg-1" href="/">
            <img class="img-fluid" src="images/logo.png" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"/>
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
                        <i class="ti-bag"/>
                        <span class="d-xs-none">CART</span> {{ itemCount }}
                    </button>

                    <div class="cart-wrapper" v-bind:class="{ open:isCartOpen }">
                        <i id="cartClose" class="ti-close cart-close" v-on:click="onCartClose"/>
                        <h4 class="mb-4">Your Cart</h4>

                        <ul class="pl-0 mb-3 cart-dimension">
                            <li v-for="item in getFullCart" v-bind:key="item.id" class="d-flex border-bottom">
                                <img :src="item.itemThumbnail" class="cart-imgsize" alt="product-img">
                                <div class="mx-3">
                                    <h6>{{ item.itemName }}</h6>
                                    <span>{{ item.itemQuantity }}</span> X <span>${{ item.itemPrice }}</span>
                                </div>
                                <i @click="onClickRemoveItem(item.itemID)" class="ti-close"/>
                            </li>
                        </ul>

                        <div v-if="isCartNil">
                            <p>You have no selected item in cart.</p>
                        </div>
                        <div v-else>
                            <div class="mb-3">
                                <span>Cart Total</span>
                                <span class="float-right">${{ getTotalPrice }}</span>
                            </div>
                            <div class="text-center">
                                <router-link to="/cart" class="btn btn-dark btn-mobile rounded-0">view cart</router-link>
                                <router-link to="/shipping" class="btn btn-dark btn-mobile rounded-0">check out</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Navigation",
        data(){
            return {
                isCartOpen: false,
                isCartNil: true,
            };
        },
        computed: {
            getFullCart(){
                return this.$store.getters.getCart;
            },
            itemCount() {
                this.isCartNil = this.$store.getters.cartItemCount < 1;
                if (this.isCartNil) {
                    this.$store.dispatch('storeIsProductDigitalAction', '');
                }
                return this.$store.getters.cartItemCount;
            },
            getTotalPrice() {
                return this.$store.getters.cartTotalPrice;
            }
        },
        methods: {
            onCartClicked: function () {
                //this.$router.push("/cart")
                this.isCartOpen = true;
            },
            onClickRemoveItem: function (id) {
                this.removeFromCart(id)
            },
            removeFromCart: function (itemId) {
                this.$store.dispatch('removeItemFromAction', itemId)
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
        max-height: 235px;
        overflow: auto;
    }
    .cart-imgsize{
        width: 63px;
        height: 85px;
    }
</style>
