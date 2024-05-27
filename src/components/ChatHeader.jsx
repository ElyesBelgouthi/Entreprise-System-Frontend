import React from 'react';

const UserCard = ({ username, isRoom, status }) => {
  //username first two letters
  const initials = username.slice(0, 2).toUpperCase();
  const statusColor = status === 'online' ? 'bg-green-500' : 'bg-gray-500';

  return (
    <div className="flex items-center p-4 bg-white  border-b">
      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4">
        {initials}
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900">{username}</span>
        {
          !isRoom && (
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full ${statusColor} mr-2`} />
              <span className="text-sm text-gray-600">{status}</span>
            </div>
          )
        }
      </div>
    </div>
  );
};


const ChatHeader = ({ user }) => {

  return (
    <div className="">
      <UserCard
        username={user.type == 'private' ? user.username : user.name}
        isRoom={user.type == 'room' ? true : false}
        status={"online"}
      />
    </div>
  );
};

export default ChatHeader;
