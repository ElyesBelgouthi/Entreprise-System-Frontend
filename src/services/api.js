import axios from "axios";
import store from "@/redux/store/store";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

//bind the token to the header
api.interceptors.request.use((config) => {
    const token = store.getState().mainReducer.userToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
