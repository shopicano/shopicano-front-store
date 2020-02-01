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
                                                <td><a @click="onClickTract(order.id)" class="text-primary">{{ order.hash }}</a></td>
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
            onClickTract: function (id) {
                this.$router.push('/ordertrack/' + id);
            },
        }
    }
</script>

<style scoped>

</style>
