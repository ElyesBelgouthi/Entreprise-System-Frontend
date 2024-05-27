import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';

function DisplayMessages() {
  const messages = useSelector((state) => state.mainReducer.messagesList);
  const currentUserId = useSelector((state) => state.mainReducer.userData?.id);

  const bottomRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom immediately when messages change
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [messages]);

  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto p-4">
      <div className="grid gap-4">
        {messages.map((message, index) => {
          if (message.sender && message.sender.id === currentUserId) {
            return (
              <MyMessage
                key={index}
                message={message.messageContent}
                time={message.createdAt}
              />
            );
          } else if (message.sender) {
            return (
              <OtherMessage
                key={index}
                name={message.sender.username}
                message={message.messageContent}
                time={message.createdAt}
              />
            );
          } else {
            return (
              <div key={index} className="text-red-500">
                Invalid message format
              </div>
            );
          }
        })}
        {/* Dummy div to scroll into view */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default DisplayMessages;
