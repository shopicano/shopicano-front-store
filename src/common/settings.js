class Settings {

    static GetApiUrl() {
        //return process.env.VUE_APP_SHOPICANO_URL + "/v1";
        return 'http://128.199.89.247:9119/v1';
    }

    static GetMediaUrl() {
        return this.GetApiUrl() + "/fs/";
    }
}

export default Settings;
