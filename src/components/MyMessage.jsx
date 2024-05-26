import React from "react";

const MyMessage = ({ message, time }) => {
  return (
    <div className="flex items-start gap-3 justify-end">
      <div className="flex flex-col gap-1">
        <div className="rounded-lg bg-blue-400 p-3 text-sm text-white">
          <p>{message}</p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">You • {time}</p>
      </div>
    </div>
  );
};

export default MyMessage;
