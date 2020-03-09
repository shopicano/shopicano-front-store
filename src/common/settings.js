class Settings {

    static GetApiUrl() {
        return "http://128.199.89.247:9119/v1";
    }

    static GetMediaUrl() {
        return this.GetApiUrl() + "/fs/";
    }
}

export default Settings;
