<template>
    <router-view/>
</template>

<script>
    import axios from 'axios';
    import Settings from "@/common/settings";

    export default {
        name: 'app',
        components: {},
        mounted() {
            this.paymentMethodGatewayConfig();
        },
        methods: {
            // for brainTree payment method
            paymentMethodGatewayConfig: function () {

                if (localStorage.getItem('client_token') !== '') {
                    localStorage.removeItem('client_token');
                    localStorage.removeItem('failure_callback_url');
                    localStorage.removeItem('payment_public_key');
                    localStorage.removeItem('success_callback_url');
                }

                axios.get(Settings.GetApiUrl() + '/payments/configs').then(resp => {
                    localStorage.setItem('client_token', resp.data.data.client_token);
                    localStorage.setItem('failure_callback_url', resp.data.data.failure_callback_url);
                    localStorage.setItem('payment_public_key', resp.data.data.public_key);
                    localStorage.setItem('success_callback_url', resp.data.data.success_callback_url);
                }).catch(err => {
                    console.log(err)
                });
            }
        }
    }
</script>
