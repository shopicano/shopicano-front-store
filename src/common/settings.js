class Settings {
    static GetApiUrl() {
        return process.env.VUE_APP_SHOPICANO_URL;
    }

    static GetMediaUrl() {
        return this.GetApiUrl() + "/fs/";
    }
}

export default Settings;
