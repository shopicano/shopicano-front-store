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
                        <li class="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </div>
            </nav>
            <!-- /breadcrumb -->

            <div class="section">
                <div class="cart shopping">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 mx-auto">
                                <div class="block">
                                    <div class="product-list">
                                        <form method="#">
                                            <div class="table-responsive">
                                                <table class="table cart-table">
                                                    <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Product Name</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Sub Total</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <a class="product-remove" href="">&times;</a>
                                                        </td>
                                                        <td>
                                                            <div class="product-info">
                                                                <img class="img-fluid" src="images/cart/product-1.jpg" alt="product-img" />
                                                                <a href="">Tops</a>
                                                            </div>
                                                        </td>
                                                        <td>$200.00</td>
                                                        <td><input type="text" value="1" name="cart-quantity"></td>
                                                        <td>$200.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a class="product-remove" href="">&times;</a>
                                                        </td>
                                                        <td>
                                                            <div class="product-info">
                                                                <img class="img-fluid" src="images/cart/product-2.jpg" alt="product-img" />
                                                                <a href="">Jacket</a>
                                                            </div>
                                                        </td>
                                                        <td>$200.00</td>
                                                        <td><input type="text" value="1" name="cart-quantity"></td>
                                                        <td>$200.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a class="product-remove" href="">&times;</a>
                                                        </td>
                                                        <td>
                                                            <div class="product-info">
                                                                <img class="img-fluid" src="images/cart/product-1.jpg" alt="product-img" />
                                                                <a href="">Scarf</a>
                                                            </div>
                                                        </td>
                                                        <td>$200.00</td>
                                                        <td><input type="text" value="1" name="cart-quantity"></td>
                                                        <td>$200.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a class="product-remove" href="">&times;</a>
                                                        </td>
                                                        <td>
                                                            <div class="product-info">
                                                                <img class="img-fluid" src="images/cart/product-2.jpg" alt="product-img" />
                                                                <a href="">Tops</a>
                                                            </div>
                                                        </td>
                                                        <td>$200.00</td>
                                                        <td><input type="text" value="1" name="cart-quantity"></td>
                                                        <td>$200.00</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <hr>
                                            <div class="d-flex flex-column flex-md-row align-items-center">
                                                <input type="text" class="form-control text-md-left text-center mb-3 mb-md-0" name="coupon" id="coupon" placeholder="I have a discout coupon">
                                                <button class="btn btn-outline-primary ml-md-3 w-100 mb-3 mb-md-0">Apply Coupon</button>
                                                <a href="#" class="btn ml-md-4 btn-dark w-100">Update Cart</a>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-12">
                                                    <ul class="list-unstyled text-right">
                                                        <li>Sub Total <span class="d-inline-block w-100px">$800.00</span></li>
                                                        <li>UK Vat <span class="d-inline-block w-100px">$10.00</span></li>
                                                        <li>Grand Total <span class="d-inline-block w-100px">$10.00</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <hr>
                                            <router-link to="/shipping" class="btn btn-primary float-right">Checkout</router-link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        <!-- /main wrapper -->
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Navigation from "@/components/Navigation";
    import Footer from "@/components/Footer";

    export default {
        name: "Cart",
        components: {Footer, Navigation, Header}
    }
</script>

<style scoped>

</style>