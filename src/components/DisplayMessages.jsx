import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";

function DisplayMessages() {
  const messages = useSelector((state) => state.mainReducer.messagesList);
  const currentUserId = useSelector((state) => state.mainReducer.userData?.id);
  const selectedConversation = useSelector((state) => state.mainReducer.selectedConversation);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [messages]);

  const renderMessages = () => {
    if (messages?.length === 0) {
      return (
        <div className="flex justify-center items-center h-full text-gray-500">
          No messages yet
        </div>
      );
    } else {
      return messages?.map((message, index) => {
        if (message.sender && message.sender.id === currentUserId) {
          return (
            <MyMessage
              key={message.id} // Use a unique key for each message
              message={message.messageContent}
              time={message.createdAt}
            />
          );
        } else if (message.sender) {
          return (
            <OtherMessage
              key={message.id} // Use a unique key for each message
              name={message.sender.username}
              message={message.messageContent}
              time={message.createdAt}
            />
          );
        } else {
          return (
            <div key={message.id} className="text-red-500">
              Invalid message format
            </div>
          );
        }
      });
    }
  };

  const renderRoomMessages = () => {
    if (messages?.length === 0) {
      return (
        <div className="flex justify-center items-center h-full text-gray-500">
          No messages yet
        </div>
      );
    } else {
      return messages?.map((message, index) => {
        const sender = message.sender || message.room?.users?.find(user => user.id === message.senderId);
        if (sender && sender.id === currentUserId) {
          return (
            <MyMessage
              key={message.id} // Use a unique key for each message
              message={message.messageContent}
              time={message.createdAt}
            />
          );
        } else if (sender) {
          return (
            <OtherMessage
              key={message.id} // Use a unique key for each message
              name={sender.username}
              message={message.messageContent}
              time={message.createdAt}
            />
          );
        } else {
          return (
            <div key={message.id} className="text-red-500">
              Invalid message format
            </div>
          );
        }
      });
    }
  };

  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto p-4">
      {selectedConversation ? (
        <div className="grid gap-4 h-96">
          {selectedConversation.type === 'private' ? renderMessages() : renderRoomMessages()}
          <div ref={bottomRef} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-full text-gray-500">
          Select a conversation to start messaging
        </div>
      )}
    </div>
  );
}

export default DisplayMessages;
