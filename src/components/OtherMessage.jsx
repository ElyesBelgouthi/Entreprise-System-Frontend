import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";

const OtherMessage = ({ name, message, time }) => {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="h-8 w-8">
        <AvatarImage alt="Olivia Martin" src="/avatars/03.png" />
        <AvatarFallback>
          {name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <div className="rounded-lg bg-gray-200 p-3 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-50">
          <p>{message}</p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {name} • {time}
        </p>
      </div>
    </div>
  );
};

export default OtherMessage;
