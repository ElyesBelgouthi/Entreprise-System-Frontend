import axios from "axios";

const loginAPI = axios.create({
    baseURL: "http://localhost:3000",
});

export default loginAPI;
