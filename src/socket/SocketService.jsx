import { io } from 'socket.io-client';
import UserService from '@/services/user-service';

class SocketService {
  constructor() {
    this.socket = null;
  }

  connect() {
    const token = UserService.userToken();
    if (token) {
      this.socket = io('http://localhost:3000', {
        query: {
          userId: token.id,
        },
      });
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }

  on(event, callback) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  off(event, callback) {
    if (this.socket) {
      this.socket.off(event, callback);
    }
  }

  emit(event, data) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }
}

const socketService = new SocketService();
export default socketService;
