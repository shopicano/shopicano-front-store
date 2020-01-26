<template>
    <section class="signin-page account">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="block text-center">
                        <a class="logo" href="index.html">
                            <img src="images/logo.png" alt="logo">
                        </a>
                        <h2 class="text-center">Welcome Back</h2>
                        <form class="text-left clearfix">
                            <div class="form-group">
                                <input v-model="email" type="email" autocomplete="off" class="form-control"  placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input v-model="password" type="password" class="form-control" placeholder="Password">
                            </div>
                            <div class="text-center">
                                <button v-on:click="onLogin"
                                        :disabled="is_loading"
                                        type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p class="mt-3">New in this site?<router-link to="/signup" class="font-weight-bold"> Create New Account</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    /* eslint-disable */
    import axios from 'axios';
    import Settings from "@/common/settings";
    import SessionStore from '@/common/session_store';

    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
                is_loading: false
            };
        },
        mounted() {
            if (SessionStore.IsLoggedIn()) {
                this.$router.push("/");
            }
        },
        methods: {
            toggleLoading: function (ok) {
                this.is_loading = ok;
            },
            onLogin: function () {
                this.toggleLoading(true);

                if (this.email === "") {
                    alert("Email is required");
                    this.toggleLoading(false);
                    return;
                }
                if (this.password === "") {
                    alert("Password is required");
                    this.toggleLoading(false);
                    return;
                }

                this.requestLogin();
            },
            requestLogin: function () {
                axios.post(Settings.GetApiUrl() + "/login", {
                    email: this.email,
                    password: this.password
                }).then(resp => {
                    let data = resp.data.data;
                    console.log(data);
                    SessionStore.SetSession(data);

                    if (localStorage.getItem('redirect_to') === undefined) {
                        localStorage.removeItem('redirect_to');
                        return this.$router.push("/review");
                    }

                    this.$router.push("/");
                }).catch(err => {
                    this.toggleLoading(false);
                    let result = err.response;
                    console.log(result);
                    /*if (result === undefined) {
                        alert("Server seems busy!");
                        return;
                    }
                    alert(result.data.title);*/
                })
            },
            onRegister: function () {

            }
        }
    }
</script>

<style scoped>

</style>
