import React from "react";

const formatDateTime = (time) => {
  //to display the time in the format of 2021/09/01 12:00 without moment
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}


const MyMessage = ({ message, time }) => {
  return (
    <div className="flex items-start gap-3 justify-end">
      <div className="flex flex-col gap-1">
        <div className="rounded-lg bg-blue-400 p-3 text-sm text-white">
          <p>{message}</p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">You • {formatDateTime(time)}</p>
        
      </div>
    </div>
  );
};

export default MyMessage;
