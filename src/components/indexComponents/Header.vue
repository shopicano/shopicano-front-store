<template>
    <!-- header -->
    <header>
        <!-- top header -->
        <div class="top-header">
            <div class="row">
                <div class="col-lg-6 text-center text-lg-left">
                    <p class="text-white mb-lg-0 mb-1"></p>
                </div>
                <div class="col-lg-6 text-center text-lg-right">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <span class="myaccount" @click="onCheckLoggedIn">My Account</span>
                        </li>
                        <li class="list-inline-item">
                            <select class="country" name="country">
                                <option value="USD">USD</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /top-header -->
    </header>
</template>

<script>
    import SessionStore from "@/common/session_store";

    export default {
        name: "Header",
        methods: {
            onCheckLoggedIn: function () {
                if (SessionStore.IsLoggedIn()) {
                    this.$router.push('/profile-details');
                } else {
                    this.$router.push('/login');
                }
            }
        }
    }
</script>

<style scoped>
    .myaccount {
        color: white;
        cursor: pointer;
        font-size: 12px;
    }
</style>
