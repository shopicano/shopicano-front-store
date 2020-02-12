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
                                <input v-model="new_password" type="password" autocomplete="off" class="form-control"
                                       placeholder="New Password">
                            </div>
                            <div class="form-group">
                                <input v-model="new_password_again" type="password" class="form-control"
                                       placeholder="New Password Again">
                            </div>
                            <div class="text-center">
                                <button v-on:click="onResetPassword"
                                        :disabled="is_loading"
                                        type="submit" class="btn btn-primary">Reset Password
                                </button>
                            </div>
                        </form>
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
        name: "ResetPassword",
        data() {
            return {
                new_password: "",
                new_password_again: "",
                is_loading: false
            };
        },
        methods: {
            toggleLoading: function (ok) {
                this.is_loading = ok;
            },
            onResetPassword: function () {
                this.toggleLoading(true);

                if (this.new_password === "") {
                    alert("Password is required");
                    this.toggleLoading(false);
                    return;
                }
                if (this.new_password !== this.new_password_again) {
                    alert("Password mismatch");
                    this.toggleLoading(false);
                    return;
                }

                this.requestPasswordReset();
            },
            requestPasswordReset: function () {
                axios.post(Settings.GetApiUrl() + "/reset-password", {
                    new_password: this.new_password,
                    new_password_again: this.new_password_again,
                    email: this.$route.query.email,
                    token: this.$route.query.token
                }).then(resp => {
                    this.toggleLoading(false);
                    // eslint-disable-next-line no-console
                    console.log(resp);
                    this.$router.push("/login")
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
