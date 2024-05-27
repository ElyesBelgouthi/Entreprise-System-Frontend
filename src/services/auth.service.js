import api from "./api";

const AuthService = {

    // Login user
    login: async (data) => {
        return await api.post("/auth/login", data);
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