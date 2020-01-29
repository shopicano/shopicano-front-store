class Settings {

    static GetApiUrl() {
        //return process.env.VUE_APP_SHOPICANO_URL + "/v1";
        return 'http://192.168.0.105:9119/v1';
    }

    static GetMediaUrl() {
        return this.GetApiUrl() + "/fs/";
    }
}

export default Settings;
