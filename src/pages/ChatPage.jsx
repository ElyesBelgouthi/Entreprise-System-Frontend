import React, { useEffect, useState } from "react";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import { Input } from "../app/ui/input";
import { Button } from "../app/ui/button";
import { MessageCircleIcon, PaperclipIcon, SendIcon } from "../app/ui/icons";

import AsideChat from "@/components/AsideChat";
import OtherMessage from "@/components/OtherMessage";
import MyMessage from "@/components/MyMessage";
import MainService from "@/services/main.service";
import { appendMessagesToMessagesList, appendToMessagesList, setOnlineUsers, setRoomsList, setUsersList, unsetSelectedConversation } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "@/socket/SockerProvider";
import DisplayMessages from "@/components/DisplayMessages";
import MessageInput from "@/components/MessageInput";
import ChatHeader from "@/components/ChatHeader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyWithCustomIcon } from "@/components/toast/notifyWithCustomIcon";

const ChatPage = () => {

  const dispatch = useDispatch();

  const socketService = useSocket();

  const selectedConversation = useSelector((state) => state.mainReducer.selectedConversation);
  const currentUser = useSelector((state) => state.mainReducer.userData);

  useEffect(() => {
    const handleNewMessage = (message) => {
      console.log("new message", message);

      if (selectedConversation) {
        handleMessageWithSelectedConversation(message);
      } else {
        handleNotificationForNewMessage(message);
      }
    };

    const handleMessageWithSelectedConversation = (message) => {
      if (message.type === "room" && message.roomId === selectedConversation.id && selectedConversation.type === "room") {
        dispatch(appendToMessagesList(message));
      } else if (message.type === "private" && (message.senderId === selectedConversation.id || message.receiverId === selectedConversation.id) && selectedConversation.type === "private") {
        dispatch(appendToMessagesList(message));
      } else {
        handleNotificationForNewMessage(message);
      }
    };

    const handleNotificationForNewMessage = (message) => {
      if (message.type === "room") {
        notifyWithCustomIcon(`You have a new message in ${message.room.name}`);
      } else {
        notifyWithCustomIcon(`${message.sender.username} sent you a message`);
      }
    };

    const handleUserConnected = (data) => {
      console.log("user connected", data);
      dispatch(fetchOnlineUsers());
    };

    const handleUserDisconnected = (data) => {
      console.log("user disconnected", data);
      dispatch(fetchOnlineUsers());
    };

    socketService.on("new-message", handleNewMessage);
    socketService.on("userConnected", handleUserConnected);
    socketService.on("userDisconnected", handleUserDisconnected);

    return () => {
      socketService.off("new-message", handleNewMessage);
      socketService.off("userConnected", handleUserConnected);
      socketService.off("userDisconnected", handleUserDisconnected);
    };
  }, [dispatch, selectedConversation, currentUser]);



  const fetchOnlineUsers = async () => {
    await MainService.getOnlineUsers().then((response) => {
      dispatch(setOnlineUsers(response));
    }).catch((error) => {
      console.log(error);
    });
  }

  const fetchUserRooms = async () => {
    await MainService.getUserRooms().then((response) => {
      dispatch(setRoomsList(response));
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }


 




  useEffect(() => {
    fetchOnlineUsers();
    fetchUserRooms();

    return () => {
      dispatch(unsetSelectedConversation());
    }
  }, []);
  return (
    <div className="flex h-full">
      <AsideChat />
      <main className="flex flex-1 flex-col">

        { 
          !selectedConversation ?
          <div className="flex h-full items-center justify-center">
            <p className="text-2xl">Select a conversation to start chatting</p>
          </div>
          :
          <>
          {
          selectedConversation && (
            <ChatHeader user={selectedConversation} />
          ) 
        }
        <DisplayMessages />
        <MessageInput />
          </>
        }
      </main>
      <ToastContainer />

    </div>
  );
};

export default ChatPage;
