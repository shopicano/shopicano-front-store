<template>
    <router-view/>
</template>

<script>
    /* eslint-disable */
    import SessionStore from "@/common/session_store";

    export default {
        name: 'app',
        mounted() {
            SessionStore.CleanPaymentMethodGatewayConfig();
            SessionStore.SetPaymentMethodGatewayConfig();
        },
    }
</script>
