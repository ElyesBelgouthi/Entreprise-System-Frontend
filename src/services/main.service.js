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

        //get messages with user
        getMessages: async (senderId, receiverId, isRoom) => {
            try {
              const response = await api.get('/messages', {
                params: {
                  senderId,
                  receiverId,
                  isRoom
                }
              });

              

              return response.data;
            } catch (error) {
              console.error('Error fetching messages:', error);
              throw error;
            }
          },

        getOnlineUsers: async () => {
            try {
              const response = await api.post('/users/online-users');
              return response.data;
            } catch (error) {
              console.error('Error fetching online users:', error);
              throw error;
            }
          },

        getUserRooms: async () => {
            try {
              const response = await api.get('/rooms/user-rooms');
              return response.data;
            } catch (error) {
              console.error('Error fetching rooms:', error);
              throw error;
            }
          },

        getRoomMessages: async (roomId, senderId) => {
            try {
              const response = await api.get(`/messages`, {
                params: {
                  isRoom: true,
                  senderId,
                  receiverId: roomId
                }
              });
              return response.data;
            } catch (error) {
              console.error('Error fetching room messages:', error);
              throw error;
            }
          }
        
    
};

export default MainService;