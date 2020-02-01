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
                            </ul>
                            <div class="dashboard-wrapper user-dashboard">
                                <div class="total-order mt-4">
                                    <h4>Order History</h4>
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
                                            <tr v-for="order in orderList" :key="order.id">
                                                <td><a @click="onClickTract(order.id, order.hash)" class="text-primary">{{ order.hash }}</a></td>
                                                <td>{{ order.created_at.replace('T', ', ') }}</td>
                                                <td>{{ order.items.length }}</td>
                                                <td>$ {{ order.grand_total }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div>
                                        <BPagination
                                                v-model="currentPage"
                                                :limit="3"
                                                :hide-goto-end-buttons="true"
                                                :total-rows="rows"
                                                :per-page="perPage"
                                                :link-gen="getData"
                                                align="center">
                                        </BPagination>
                                    </div>
                                </div>
                            </div>


                            <!-- track -->
                            <section v-if="trackClicked" class="section">
                                <div class="container">
                                    <div class="row bg-dark">
                                        <div class="col-lg-12 text-center">
                                            <div class="p-4">
                                                <h5 class="text-white">TRACKING ORDER NO - <span class="txt-green">{{ trackingHash }}</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row bg-gray px-3 py-5">
                                        <div class="col-md-4 text-center">
                                            <p><strong>Shipped Via: </strong>Standard Delivery</p>
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

                                        <div class="table-responsive mt-5">
                                            <h4 class="mt-5">Order Summery</h4>

                                            <div class="row mt-4">
                                                <div class="col-md-7">
                                                    <table class="table">
                                                        <thead>
                                                        <tr class="text-center">
                                                            <td>Item</td>
                                                            <td>Quantity</td>
                                                            <td>Price</td>
                                                            <td></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="text-center"
                                                            v-for="item in orderDetails.items"
                                                            v-bind:key="item.id">
                                                            <td class="align-middle">
                                                                <img class="img-fluid img-thumbnail img-width" :src="getFullImagePath(item.image)" alt="product-img"/>
                                                                <p>{{ item.name }}</p>
                                                            </td>
                                                            <td class="align-middle">{{ item.quantity }}</td>
                                                            <td class="align-middle">${{ item.price }}</td>
                                                            <td class="align-middle"
                                                                v-if="item.is_digital">
                                                                <button @click="downloadFile" class="btn btn-dark btn-download">Download</button>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <hr>

                                                    <ul class="list-group">
                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            Payment Method
                                                            <span class="text-dark">{{ orderDetails.payment_method_name }}</span>
                                                        </li>

                                                        <li v-if="orderDetails.shipping_charge > 0" class="list-group-item d-flex justify-content-between align-items-center">
                                                            Shipping Charge
                                                            <span class="badge badge-dark">$ {{ orderDetails.shipping_charge }}</span>
                                                        </li>

                                                        <li v-if="orderDetails.discounted_amount > 0" class="list-group-item d-flex justify-content-between align-items-center">
                                                            Discount
                                                            <span class="badge badge-dark">$ {{ orderDetails.discounted_amount }}</span>
                                                        </li>

                                                        <li v-if="orderDetails.payment_processing_fee > 0" class="list-group-item d-flex justify-content-between align-items-center">
                                                            Payment Processing Fee
                                                            <span class="badge badge-dark">$ {{ orderDetails.payment_processing_fee }}</span>
                                                        </li>

                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            Subtotal
                                                            <span class="badge badge-dark">$ {{ orderDetails.sub_total }}</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="col-md-5"></div>
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
    /* eslint-disable */
    import axios from 'axios';
    import {BPagination} from "bootstrap-vue";

    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import Settings from "@/common/settings";
    import SessionStore from "@/common/session_store";

    export default {
        name: "Dashboard",
        components: {Footer, Navigation, Header, BPagination},
        data() {
            return {
                rows: 100,
                currentPage: 1,
                perPage: 10,
                orderList: '',
                trackClicked: false,
                trackingHash: '',
                orderDetails: '',
            }
        },
        mounted() {

        },
        computed: {
            getData: function () {
                return this.getOrderList();
            }
        },
        methods: {
            getOrderList: function () {
                axios.get(Settings.GetApiUrl() + '/orders?page=' + this.currentPage + '&limit='
                    + this.perPage, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);

                    if (resp.data.data.length === 0) {
                        return this.currentPage -= 1;
                    }
                    this.orderList = resp.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },
            onClickTract: function (id, hash) {
                this.trackClicked = true;

                this.trackingHash = hash;

                axios.get(Settings.GetApiUrl() + '/orders/' + id, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    this.orderDetails = resp.data.data;
                }).catch(err => {
                    console.log(err)
                })
            },
            downloadFile: function () {

            },
            getFullImagePath: function (subPath) {
                return Settings.GetMediaUrl() + subPath;
            },
        }
    }
</script>

<style scoped>
    .txt-green{
        color: #00cc00;
    }
    .img-width{
        width: 80px!important;
    }
    .btn-download{
        padding: 10px 30px;
        font-size: 12px;
    }
</style>
