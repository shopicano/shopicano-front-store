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
                                <li class="list-inline-item"><router-link to="/orders">Orders</router-link></li>
                                <li class="list-inline-item"><router-link class="active" to="/address">Address</router-link></li>
                            </ul>

                            <div class="dashboard-wrapper user-dashboard">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Country</th>
                                            <th>Phone</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="address in addresses" :key="address.id">
                                            <td>{{ address.created_at }}</td>
                                            <td>{{ address.name }}</td>
                                            <td>{{ address.house+', '+address.road+', '+address.city+'-'+address.postcode }}</td>
                                            <td>{{ address.country }}</td>
                                            <td>{{ address.phone }}</td>
                                            <td>
                                                <div class="btn-group" role="group">
                                                    <!--<button type="button" class="btn btn-sm btn-outline-primary">
                                                        <i class="ti-pencil" aria-hidden="true"/>
                                                    </button>-->
                                                    <button type="button" class="btn btn-sm btn-outline-primary">
                                                        <i @click="deleteAddress(address.id)" class="ti-close" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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

    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import SessionStore from "@/common/session_store";
    import Settings from "@/common/settings";

    export default {
        name: "Addresses",
        components: {Footer, Navigation, Header},
        data() {
            return {
                addresses: [],
            }
        },
        mounted() {
            this.getAddressList();
        },
        methods: {
            getAddressList: function() {
                axios.get(Settings.GetApiUrl() + '/addresses', {
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    this.addresses = resp.data.data;
                    console.log(this.addresses)
                }).catch(err => {
                    console.log(err)
                });
            },
            deleteAddress: function (id) {
                axios.delete(Settings.GetApiUrl() + '/addresses/' + id,{
                    headers: {
                        "Authorization": "Bearer " + SessionStore.GetAccessToken(),
                    }
                }).then(resp => {
                    console.log(resp);
                    this.getAddressList();
                }).then(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
