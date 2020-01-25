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
                        <li class="breadcrumb-item active" aria-current="page">My Accounts</li>
                    </ol>
                </div>
            </nav>
            <!-- /breadcrumb -->

            <section class="user-dashboard section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="list-inline dashboard-menu text-center">
                                <li class="list-inline-item"><router-link to="/profile-details">Profile Details</router-link></li>
                                <li class="list-inline-item"><router-link class="active" to="/orders">Orders</router-link></li>
                                <li class="list-inline-item"><router-link to="/address">Address</router-link></li>
                            </ul>
                            <!--<div class="dashboard-wrapper user-dashboard">
                                <div class="total-order mt-4">
                                    <h4>Total Orders</h4>
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Date</th>
                                                <th>Items</th>
                                                <th>Total Price</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><a href="#">#252125</a></td>
                                                <td>Mar 25, 2016</td>
                                                <td>2</td>
                                                <td>$ 99.00</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#252125</a></td>
                                                <td>Mar 25, 2016</td>
                                                <td>2</td>
                                                <td>$ 99.00</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">#252125</a></td>
                                                <td>Mar 25, 2016</td>
                                                <td>2</td>
                                                <td>$ 99.00</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>-->


                            <!-- track -->
                            <section class="section">
                                <div class="container">
                                    <div class="row bg-dark">
                                        <div class="col-lg-12 text-center">
                                            <div class="p-4">
                                                <h5 class="text-white">TRACKING ORDER NO - 3587SMRT37</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row bg-gray px-3 py-5">
                                        <div class="col-md-4 text-center">
                                            <p><strong>Shipped Via: </strong>Standard Delevery</p>
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <p><strong>Status: </strong>Processing Order</p>
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <p><strong>Expected Date: </strong>Sep 1, 2019</p>
                                        </div>
                                        <div class="d-flex justify-content-between w-100 mt-5 flex-column flex-sm-row">
                                            <div class="border mx-1 mb-2 border-primary p-2 p-md-4 text-center">
                                                <i class="ti-bag icon-md mb-3 d-inline-block"></i>
                                                <h5>Confirmed Order</h5>
                                            </div>
                                            <div class="border mx-1 mb-2 border-primary p-2 p-md-4 text-center">
                                                <i class="ti-settings icon-md mb-3 d-inline-block"></i>
                                                <h5>Processing Order</h5>
                                            </div>
                                            <div class="border mx-1 mb-2 p-2 p-md-4 text-center">
                                                <i class="ti-crown icon-md mb-3 d-inline-block"></i>
                                                <h5>Quality Check</h5>
                                            </div>
                                            <div class="border mx-1 mb-2 p-2 p-md-4 text-center">
                                                <i class="ti-truck icon-md mb-3 d-inline-block"></i>
                                                <h5>Product Dispatched</h5>
                                            </div>
                                            <div class="border mx-1 mb-2 p-2 p-md-4 text-center">
                                                <i class="ti-home icon-md mb-3 d-inline-block"></i>
                                                <h5>Product Delivered</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <!-- /track -->
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- @main wrapper -->

        <Footer/>
    </div>
</template>

<script>
    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";

    export default {
        name: "Dashboard",
        components: {Footer, Navigation, Header}
    }
</script>

<style scoped>

</style>
