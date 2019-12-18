<template>
    <section class="signin-page account">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="block text-center">
                        <router-link class="logo" to="/">
                            <img src="images/logo.png" alt="logo">
                        </router-link>
                        <h2 class="text-center">Create Your Account</h2>
                        <form class="text-left clearfix">
                            <div class="form-group">
                                <input v-model="name" type="text" class="form-control"  placeholder="Name">
                            </div>
                            <div class="form-group">
                                <input v-model="email"  type="email" class="form-control"  placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input v-model="password"  type="password" class="form-control"  placeholder="Password">
                            </div>
                            <div class="text-center">
                                <span v-on:click="onRegister"
                                        :disabled="is_loading"
                                        class="btn btn-primary">Sign Up</span>
                            </div>
                        </form>
                        <p class="mt-3">Already have an account? <router-link to="/login" class="font-weight-bold">Login</router-link></p>
                        <p><router-link to="/recovery"> Forgot your password?</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    /* eslint-disable */
    import axios from "axios";
    import Settings from "@/common/settings";

    export default {
        name: "SignUp",
        data() {
            return {
                name: "",
                email: "",
                password: "",
                is_loading: false
            }
        },
        methods: {
            toggleLoading: function (ok) {
                this.is_loading = ok;
            },
            onRegister: function () {
                axios.post(Settings.GetApiUrl() + "/users/sign-up", {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }).then(resp => {
                    console.log(resp);
                    alert("Please check email to activate your account");
                    this.$router.push("/login");
                }).catch(err => {
                    this.toggleLoading(false);

                    let result = err.response;
                    if (result === undefined) {
                        alert("Server seems busy!");
                        return
                    }
                    alert(result.data.title);
                })
            }
        },
    }
</script>

<style scoped>

</style>
