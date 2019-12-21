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
                                <li class="list-inline-item"><router-link to="/dashboard">Dashboard</router-link></li>
                                <li class="list-inline-item"><router-link to="/order">Orders</router-link></li>
                                <li class="list-inline-item"><router-link to="/address">Address</router-link></li>
                                <li class="list-inline-item"><router-link class="active" to="/profile-details">Profile Details</router-link></li>
                            </ul>
                            <div class="dashboard-wrapper dashboard-user-profile">
                                <div class="media">
                                    <div class="text-center">
                                        <img class="media-object user-img" src="images/avater.jpg" alt="Image">
                                        <a href="#" class="btn btn-sm mt-3 d-block">Change Image</a>
                                    </div>
                                    <div class="media-body">
                                        <ul class="user-profile-list">
                                            <li><span>Full Name:</span>Johanna Doe</li>
                                            <li><span>Country:</span>USA</li>
                                            <li><span>Email:</span>mail@gmail.com</li>
                                            <li><span>Phone:</span>+880123123</li>
                                            <li><span>Date of Birth:</span>Dec , 22 ,1991</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="container text-right">
                                    <button @click="onLogOut" class="btn btn-dark text-capitalize">Log out</button>
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
    import Header from "@/components/indexComponents/Header";
    import Navigation from "@/components/indexComponents/Navigation";
    import Footer from "@/components/indexComponents/Footer";
    import SessionStore from "@/common/session_store";

    export default {
        name: "Profile",
        components: {Footer, Navigation, Header},
        methods: {
            onLogOut: function () {
                SessionStore.CleanSession();
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>

</style>
