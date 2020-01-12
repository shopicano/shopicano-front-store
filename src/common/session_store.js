import axios from "axios";
import Settings from "@/common/settings";

/* eslint-disable */
class SessionStore {
    static SetSession(session) {
        localStorage.setItem('access_token', session.access_token);
        localStorage.setItem('refresh_token', session.refresh_token);
        localStorage.setItem('expire_on', session.expire_on);
        localStorage.setItem("permission", session.permission);
    }

    static GetAccessToken() {
        return localStorage.getItem('access_token');
    }

    static IsAdmin() {
        return localStorage.getItem("permission") === "admin"
    }

    static IsManager() {
        return localStorage.getItem("permission") === "manager"
    }

    static IsUser() {
        return localStorage.getItem("permission") === "user"
    }

    static IsLoggedIn() {
        let token = localStorage.getItem('access_token');
        let expireOn = localStorage.getItem('expire_on');
        let now = new Date().getTime() / 1000;

        return token !== null && now < expireOn;
    }

    static CleanSession() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('expire_on');
        localStorage.removeItem('permission');
    }

    static isUnauthorized(err) {
        let resp = err.response;
        return resp.status === 401
    }

    static SetPaymentMethodGatewayConfig() {
        axios.get(Settings.GetApiUrl() + '/payments/configs').then(resp => {
            //localStorage.setItem('client_token', resp.data.data.client_token);
            localStorage.setItem('failure_callback_url', resp.data.data.failure_callback_url);
            localStorage.setItem('payment_public_key', resp.data.data.public_key);
            localStorage.setItem('success_callback_url', resp.data.data.success_callback_url);
        }).catch(err => {
            console.log('Method: SetPaymentMethodGatewayConfig -----> ' + err)
        });
    }

    static CleanPaymentMethodGatewayConfig() {
        //localStorage.removeItem('client_token');
        localStorage.removeItem('failure_callback_url');
        localStorage.removeItem('payment_public_key');
        localStorage.removeItem('success_callback_url');
    }
}

export default SessionStore;
