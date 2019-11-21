<template>
    <div>
        <Header/>
        <Navigation/>

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
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <router-link to="/products">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
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
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <a href="/products/1">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
                                                </a>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><a class="text-color" href="product-single.html">Leather
                                                Backpack</a></h3>
                                            <span class="h5">$320.79</span>
                                        </div>
                                        <!-- product label badge -->
                                        <div class="product-label sale">
                                            -8%
                                        </div>
                                    </div>
                                </div>
                                <!-- //end of product -->
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <a href="/products/1">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
                                                </a>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><a class="text-color" href="product-single.html">Leather
                                                Backpack</a></h3>
                                            <span class="h5">$320.79</span>
                                        </div>
                                        <!-- product label badge -->
                                        <div class="product-label sale">
                                            -8%
                                        </div>
                                    </div>
                                </div>
                                <!-- //end of product -->
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <a href="/products/1">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
                                                </a>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><a class="text-color" href="product-single.html">Leather
                                                Backpack</a></h3>
                                            <span class="h5">$320.79</span>
                                        </div>
                                        <!-- product label badge -->
                                        <div class="product-label sale">
                                            -8%
                                        </div>
                                    </div>
                                </div>
                                <!-- //end of product -->
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <a href="/products/1">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
                                                </a>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><a class="text-color" href="product-single.html">Leather
                                                Backpack</a></h3>
                                            <span class="h5">$320.79</span>
                                        </div>
                                        <!-- product label badge -->
                                        <div class="product-label sale">
                                            -8%
                                        </div>
                                    </div>
                                </div>
                                <!-- //end of product -->
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <a href="/products/1">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
                                                </a>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><a class="text-color" href="product-single.html">Leather
                                                Backpack</a></h3>
                                            <span class="h5">$320.79</span>
                                        </div>
                                        <!-- product label badge -->
                                        <div class="product-label sale">
                                            -8%
                                        </div>
                                    </div>
                                </div>
                                <!-- //end of product -->
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <a href="/products/1">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
                                                </a>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><a class="text-color" href="product-single.html">Leather
                                                Backpack</a></h3>
                                            <span class="h5">$320.79</span>
                                        </div>
                                        <!-- product label badge -->
                                        <div class="product-label sale">
                                            -8%
                                        </div>
                                    </div>
                                </div>
                                <!-- //end of product -->
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <a href="/products/1">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
                                                </a>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><a class="text-color" href="product-single.html">Leather
                                                Backpack</a></h3>
                                            <span class="h5">$320.79</span>
                                        </div>
                                        <!-- product label badge -->
                                        <div class="product-label sale">
                                            -8%
                                        </div>
                                    </div>
                                </div>
                                <!-- //end of product -->
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <a href="/products/1">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
                                                </a>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><a class="text-color" href="product-single.html">Leather
                                                Backpack</a></h3>
                                            <span class="h5">$320.79</span>
                                        </div>
                                        <!-- product label badge -->
                                        <div class="product-label sale">
                                            -8%
                                        </div>
                                    </div>
                                </div>
                                <!-- //end of product -->
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <a href="/products/1">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
                                                </a>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><a class="text-color" href="product-single.html">Leather
                                                Backpack</a></h3>
                                            <span class="h5">$320.79</span>
                                        </div>
                                        <!-- product label badge -->
                                        <div class="product-label sale">
                                            -8%
                                        </div>
                                    </div>
                                </div>
                                <!-- //end of product -->
                                <!-- product -->
                                <div class="col-lg-4 col-sm-6 mb-4">
                                    <div class="product text-center">
                                        <div class="product-thumb">
                                            <div class="overflow-hidden position-relative">
                                                <a href="/products/1">
                                                    <img class="img-fluid w-100 mb-3 img-first"
                                                         src="images/collection/product-1.jpg" alt="product-img">
                                                    <img class="img-fluid w-100 mb-3 img-second"
                                                         src="images/collection/product-4.jpg" alt="product-img">
                                                </a>
                                                <div class="btn-cart">
                                                    <a href="#" class="btn btn-primary btn-sm">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div class="product-hover-overlay">
                                                <a href="#" class="product-icon favorite" data-toggle="tooltip"
                                                   data-placement="left" title="Wishlist"><i
                                                        class="ti-heart"></i></a>
                                                <a data-vbtype="inline" href="#quickView"
                                                   class="product-icon view venobox" data-toggle="tooltip"
                                                   data-placement="left" title="Quick View"><i
                                                        class="ti-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="h5"><a class="text-color" href="product-single.html">Leather
                                                Backpack</a></h3>
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
                                        <ul class="pagination justify-content-center">
                                            <li class="page-item"><a class="page-link" href="#"><i
                                                    class="ti-arrow-left"></i></a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#"><i
                                                    class="ti-arrow-right"></i></a></li>
                                        </ul>
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
    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import NewsLetter from "@/components/indexComponents/NewsLetter";
    import Services from "@/components/indexComponents/Services";

    export default {
        name: "Shop",
        components: {Services, NewsLetter, Footer, Navigation, Header}
    }
</script>
