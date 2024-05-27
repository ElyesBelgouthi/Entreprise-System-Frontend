import api from "./api";
import loginAPI from "./loginAPI";

const AuthService = {

    // Login user
    login: async (data) => {
        return await loginAPI.post("/auth/login", data);
    },

    // Register user
    register: (data) => {
        return api.post("/auth/register", data);
    },

    // Logout user
    logout: () => {
        return api.post("/auth/logout");
    },
    
};

export default AuthService;