<template>
    <!-- header -->
    <header>
        <!-- top header -->
        <div class="top-header">
            <div class="row">
                <div class="col-lg-6 text-center text-lg-left">
                    <p class="text-white mb-lg-0 mb-1">Free shipping • Free 30 days return • Express delivery</p>
                </div>
                <div class="col-lg-6 text-center text-lg-right">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <router-link to="/profile">My Accounts</router-link>
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
    export default {
        name: "Header"
    }
</script>
