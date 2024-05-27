import React, { useState } from 'react'
import { Input } from "../app/ui/input";
import { Button } from "../app/ui/button";
import { MessageCircleIcon, PaperclipIcon, SendIcon } from "../app/ui/icons";
import { useSocket } from '@/socket/SockerProvider';
import { useSelector } from 'react-redux';


function MessageInput() {

    const [messageInput, setMessageInput] = useState('');
    const currentUserId = useSelector((state) => state.mainReducer.userData.id);
    const selectedConversation = useSelector((state) => state.mainReducer.selectedConversation);
    const socket = useSocket();


    const sendMessage = (event) => {

        event.preventDefault();

        if (!selectedConversation) {
            return;
        }

        if(!messageInput) {
            return;
        }

        const data = {
            senderId: currentUserId,
            receiverId: selectedConversation.id,
            messageContent: messageInput
        }

        if (selectedConversation.type == 'room') {
            data.roomId = selectedConversation.id;
        }

        if (messageInput) {
           console.log('sending message', data);
            socket.emit('addMessage', data);
            setMessageInput('');
        }
    }
    
  return (
    <div className="border-t bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-900">
    <form className="flex items-center gap-2">
      <Input
        className="flex-1 bg-gray-200 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-50 dark:placeholder:text-gray-400"
        placeholder="Type your message..."
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <Button
          className="bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
          variant="secondary"
        >
          <PaperclipIcon className="h-5 w-5" />
        </Button>
        <Button
          className="bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
          variant="secondary"
            onClick={sendMessage}
        >
          <SendIcon className="h-5 w-5" />
        </Button>
      </div>
    </form>
  </div>
  )
}

export default MessageInput