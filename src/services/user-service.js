import store from '@/redux/store/store';
import jwtDecode from 'jwt-decode';

const UserService = {
  userToken: () => {
    try {
      const token = store.getState().mainReducer.userToken;
      console.log("user-service.js: ", token);
      if (!token) {
        throw new Error('Token is not available');
      }
      const decodedToken = jwtDecode(token);
      console.log("user-service.js: ", decodedToken);
      return decodedToken;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
}

export default UserService;
