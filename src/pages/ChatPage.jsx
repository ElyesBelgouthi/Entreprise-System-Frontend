import React, { useEffect, useState } from "react";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import { Input } from "../app/ui/input";
import { Button } from "../app/ui/button";
import { MessageCircleIcon, PaperclipIcon, SendIcon } from "../app/ui/icons";

import AsideChat from "@/components/AsideChat";
import OtherMessage from "@/components/OtherMessage";
import MyMessage from "@/components/MyMessage";
import MainService from "@/services/main.service";
import { appendMessagesToMessagesList, appendToMessagesList, setOnlineUsers, setUsersList } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "@/socket/SockerProvider";
import DisplayMessages from "@/components/DisplayMessages";
import MessageInput from "@/components/MessageInput";
import ChatHeader from "@/components/ChatHeader";

const ChatPage = () => {

  const dispatch = useDispatch();

  const socketService = useSocket();

  const selectedConversation = useSelector((state) => state.mainReducer.selectedConversation);


  useEffect(() => {
    const handleData = (data) => {
      console.log('new message', data);
    };

    socketService.on('new-message', message => {
      console.log('new message', message);

      if (selectedConversation) {

        if (message.senderId == selectedConversation.id || message.receiverId == selectedConversation.id) {
          dispatch(appendToMessagesList(message));
        }

      }


    });

    socketService.on('userConnected', (data) => {
      console.log('user connected', data);
      fetchOnlineUsers();
    });

    socketService.on('userDisconnected', (data) => {
      console.log('user disconnected', data);
      fetchOnlineUsers();
    });
    

    return () => {
      socketService.off('new-message', handleData);
    };
  }, [dispatch, selectedConversation, socketService]);

  const fetchOnlineUsers = async () => {
    await MainService.getOnlineUsers().then((response) => {
      dispatch(setOnlineUsers(response));
    }).catch((error) => {
      console.log(error);
    });
  }



  const fetchData = async () => {
    await MainService.getUsers().then((response) => {
      console.log(response.data);
      dispatch(setUsersList(
        response.data
      ));
    }).catch((error) => {
      console.log(error);
    
    });
  }

  useEffect(() => {
    fetchData();
    fetchOnlineUsers();
  }, []);
  return (
    <div className="flex h-full">
      <AsideChat />
      <main className="flex flex-1 flex-col">

        {
          selectedConversation && (
            <ChatHeader user={selectedConversation} />
          ) 
        }
        <DisplayMessages />
        <MessageInput />
      </main>
    </div>
  );
};

export default ChatPage;
