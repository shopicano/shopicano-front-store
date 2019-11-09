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
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/shop">Shop</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact Us</a>
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
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation",
        methods: {
            onCartClicked: function () {
                this.$router.push("/cart")
            }
        }
    }
</script>
