import api from "./api";

const MainService = {
    
        // Get all users
        getUsers: async () => {
            return await api.get("/users");
        },
    
        // Get user by id
        getUserById: async (id) => {
            return await api.get(`/users/${id}`);
        },
    
        // Update user
        updateUser: async (id, data) => {
            return await api.put(`/users/${id}`, data);
        },
    
        // Delete user
        deleteUser: async (id) => {
            return await api.delete(`/users/${id}`);
        },
    
};

export default MainService;