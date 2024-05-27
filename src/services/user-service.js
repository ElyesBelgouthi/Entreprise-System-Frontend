import store from '@/redux/store/store';

const base64Decode = (str) => {
  try {
    return decodeURIComponent(atob(str).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  } catch (e) {
    console.error('Error decoding base64:', e);
    return null;
  }
};

const parseJwt = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(base64Decode(base64));
  } catch (e) {
    console.error('Error parsing JWT:', e);
    return null;
  }
};

const UserService = {
  userToken: () => {
    try {
      const token = store.getState().mainReducer.userToken;
      if (token) {
        console.log('Token:', parseJwt(token));
        return parseJwt(token);
      }
      return null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  },
};

export default UserService;
