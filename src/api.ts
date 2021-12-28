import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import Config from "config";


class ApiMethod {
    private _uri: string;
    private _authKey: string;
    private _config: AxiosRequestConfig<object> = {};

    constructor(uri: string, authKey: string, headers: object = {}) {
        this._uri = uri;
        this._authKey = authKey;
        this._config = {
            headers: {
                "Admin-Auth-Key": this._authKey,
                ...headers
            } 
        }
    }

    private _response(res: AxiosResponse<any, any>) {
        return res.data;
    }

    async get() {
        const res = await axios.get(`${Config.api}${this._uri}`, this._config);
        return this._response(res);
    }

    async post(data: object) {
        const res = await axios.post(`${Config.api}${this._uri}`, data, this._config);
        return this._response(res);
    }
}

class Api {
    static method(uri: string, headers?: object) {
        return new ApiMethod(uri, this._getAuthKey(), headers);
    }

    private static _getAuthKey() : string {
        return localStorage.getItem("admin_auth_key");
    }
}

export default Api;