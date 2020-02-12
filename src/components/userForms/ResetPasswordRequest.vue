<template>
    <section class="signin-page account">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="block text-center">
                        <a class="logo" href="/">
                            <img src="images/logo.png" alt="logo">
                        </a>
                        <h2 class="text-center">Reset Password</h2>
                        <form class="text-left clearfix">
                            <div class="form-group">
                                <input v-model="email" type="email" autocomplete="off" class="form-control"
                                       placeholder="Email">
                            </div>
                            <div class="text-center">
                                <button v-on:click="onResetPasswordRequest"
                                        :disabled="is_loading"
                                        type="submit" class="btn btn-primary">Send Request
                                </button>
                            </div>
                        </form>
                        <p class="mt-3">
                            <router-link to="/login" class="font-weight-bold"> Login</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    import Settings from "@/common/settings";

    export default {
        name: "ResetPasswordRequest",
        data() {
            return {
                is_loading: false,
                email: "",
            };
        },
        methods: {
            toggleLoading: function (ok) {
                this.is_loading = ok;
            },
            onResetPasswordRequest: function () {
                this.toggleLoading(true);

                if (this.email === "") {
                    alert("Email is required");
                    this.toggleLoading(false);
                    return;
                }

                this.requestPasswordResetRequest();
            },
            requestPasswordResetRequest: function () {
                axios.get(Settings.GetApiUrl() + "/reset-password?email=" + this.email).then(resp => {
                    // eslint-disable-next-line no-console
                    console.log(resp);
                    alert("Request has been sent. Please check email");
                    this.$router.push("/")
                }).catch(err => {
                    this.toggleLoading(false);
                    let result = err.response;
                    alert(result.data.title);
                })
            },
        }
    }
</script>

<style scoped>

</style>