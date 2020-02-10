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
                        <li class="breadcrumb-item">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Order Track</li>
                    </ol>
                </div>
            </nav>
            <!-- /breadcrumb -->

            <!-- track -->
            <section class="section">
                <div class="container">
                    <div class="row bg-dark">
                        <div class="col-lg-12 text-center">
                            <div class="p-4">
                                <h5 class="text-white">TRACKING ORDER NO - <span
                                        class="text-primary">{{ trackingHash }}</span></h5>
                            </div>
                        </div>
                    </div>
                    <div class="row bg-gray px-3 py-5">
                        <!--                        <div class="col-md-4 text-center" v-if="orderDetails.shipping_charge > 0">-->
                        <!--                            <p class="text-capitalize p-1"><strong>Shipping Via: </strong>{{-->
                        <!--                                orderDetails.shipping_method_name }}</p>-->
                        <!--                        </div>-->
                        <!--                        <div class="col-md-4 text-center">-->
                        <!--                            <p class="text-capitalize p-1"><strong>Status: </strong> {{ orderDetails.status.replace('_',-->
                        <!--                                ' ') }} </p>-->
                        <!--                        </div>-->
                        <!--                        <div class="col-md-4 text-center">-->
                        <!--                            <p><strong>Expected Delivery Date: </strong>{{ this.deliveryDate }}</p>-->
                        <!--                        </div>-->
                        <!--                        <div class="d-flex justify-content-between w-100 mt-5 flex-column flex-sm-row">-->
                        <!--                            <div class="border mx-1 mb-2 border-primary p-2 p-md-4 text-center">-->
                        <!--                                <i class="ti-bag icon-md mb-3 d-inline-block"></i>-->
                        <!--                                <h5>Confirmed Order</h5>-->
                        <!--                            </div>-->
                        <!--                            <div class="border mx-1 mb-2 border-primary p-2 p-md-4 text-center">-->
                        <!--                                <i class="ti-settings icon-md mb-3 d-inline-block"></i>-->
                        <!--                                <h5>Processing Order</h5>-->
                        <!--                            </div>-->
                        <!--                            <div class="border mx-1 mb-2 p-2 p-md-4 text-center">-->
                        <!--                                <i class="ti-crown icon-md mb-3 d-inline-block"></i>-->
                        <!--                                <h5>Quality Check</h5>-->
                        <!--                            </div>-->
                        <!--                            <div class="border mx-1 mb-2 p-2 p-md-4 text-center">-->
                        <!--                                <i class="ti-truck icon-md mb-3 d-inline-block"></i>-->
                        <!--                                <h5>Product Dispatched</h5>-->
                        <!--                            </div>-->
                        <!--                            <div class="border mx-1 mb-2 p-2 p-md-4 text-center">-->
                        <!--                                <i class="ti-home icon-md mb-3 d-inline-block"></i>-->
                        <!--                                <h5>Product Delivered</h5>-->
                        <!--                            </div>-->
                        <!--                        </div>-->

                        <div class="table-responsive">
                            <div class="container">
                                <div class="row mt-4">
                                    <div class="col-md-7">
                                        <h4 class="mt-5">Order Summery</h4>
                                        <table class="table mt-5">
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
                                                    <img class="img-fluid img-thumbnail img-width"
                                                         :src="getFullImagePath(item.image)" alt="product-img"/>
                                                    <p>{{ item.name }}</p>
                                                </td>
                                                <td class="align-middle">{{ item.quantity }}</td>
                                                <td class="align-middle">${{ item.price }}</td>
                                                <td class="align-middle"
                                                    v-if="item.is_digital && orderDetails.payment_status == 'payment_completed'">
                                                    <button @click="downloadFile" class="btn btn-dark btn-download">
                                                        Download
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <hr>

                                        <ul class="list-group">
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Status
                                                <span class="text-dark text-capitalize p-1">{{ orderDetails.status.replace('_', ' ') }}</span>
                                            </li>

                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Payment Method
                                                <span class="text-dark">{{ orderDetails.payment_method_name }}</span>
                                            </li>

                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Payment Status
                                                <span class="text-capitalize p-1">{{ orderDetails.payment_status.replace('_', ' ') }}</span>
                                            </li>

                                            <li v-if="orderDetails.payment_processing_fee > 0"
                                                class="list-group-item d-flex justify-content-between align-items-center">
                                                Payment Processing Fee
                                                <span class="">$ {{ orderDetails.payment_processing_fee }}</span>
                                            </li>

                                            <li v-if="orderDetails.shipping_charge > 0"
                                                class="list-group-item d-flex justify-content-between align-items-center">
                                                Shipping Charge
                                                <span class="">$ {{ orderDetails.shipping_charge }}</span>
                                            </li>

                                            <li v-if="orderDetails.shipping_charge > 0"
                                                class="list-group-item d-flex justify-content-between align-items-center">
                                                Shipping Via
                                                <span class="">{{ orderDetails.shipping_method_name }}</span>
                                            </li>

                                            <li v-if="orderDetails.shipping_charge > 0"
                                                class="list-group-item d-flex justify-content-between align-items-center">
                                                Expected Delivery Date
                                                <span class="">{{ deliveryDate.toDateString() }}</span>
                                            </li>

                                            <li v-if="orderDetails.discounted_amount > 0"
                                                class="list-group-item d-flex justify-content-between align-items-center">
                                                Discount
                                                <span class="">$ {{ orderDetails.discounted_amount }}</span>
                                            </li>

                                            <li v-if="orderDetails.discounted_amount > 0"
                                                class="list-group-item d-flex justify-content-between align-items-center">
                                                Coupon Code
                                                <span class="">$ {{ orderDetails.coupon_code }}</span>
                                            </li>

                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Sub Total
                                                <span class="">$ {{ orderDetails.sub_total }}</span>
                                            </li>

                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Grand Total
                                                <span class="badge badge-dark">$ {{ orderDetails.grand_total }}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div v-if="!orderDetails.is_all_digital_products" class="col-md-5">
                                        <h4 class="mt-5">Shipping Address</h4>

                                        <div class="mt-5">
                                            <hr>
                                            <ul class="list-group">
                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    <span class="text-dark">{{ orderDetails.shipping_name }}</span>
                                                </li>

                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    <span class="text-dark small">{{ orderDetails.shipping_address }}</span>
                                                </li>

                                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                                    <span class="text-dark small">{{ orderDetails.shipping_phone }}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <!-- /track -->
        </div>
        <Footer/>
    </div>
</template>

<script>
    /* eslint-disable */
    import axios from "axios";

    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Settings from "@/common/settings";
    import SessionStore from "@/common/session_store";
    import Footer from "@/components/indexComponents/Footer";

    export default {
        name: "OrderTrack",
        components: {Footer, Navigation, Header},
        data() {
            return {
                trackingHash: '',
                orderDetails: '',
                deliveryDate: Date
            };
        },
        mounted() {
            this.loadOrderInfo();
        },
        methods: {
            loadOrderInfo: function () {
                axios.get(Settings.GetApiUrl() + '/orders/' + this.$route.params.id, {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    this.orderDetails = resp.data.data;
                    this.trackingHash = this.orderDetails.hash;

                    let deliveryDate = new Date(this.orderDetails.created_at);
                    deliveryDate.setDate(deliveryDate.getDate() + this.orderDetails.approximate_delivery_time);
                    this.deliveryDate = deliveryDate;
                }).catch(err => {
                    console.log(err)
                })
            },
            downloadFile: function () {

            },
            getFullImagePath: function (subPath) {
                return Settings.GetMediaUrl() + subPath;
            }
        }
    }
</script>

<style scoped>
    .txt-green {
        color: #00cc00;
    }

    .img-width {
        width: 80px !important;
    }

    .btn-download {
        padding: 10px 30px;
        font-size: 12px;
    }
</style>
