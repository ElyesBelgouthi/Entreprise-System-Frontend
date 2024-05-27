import React from 'react'
import { useSelector } from 'react-redux'
import {
    DropdownMenuItem
} from "../app/ui/dropdown-menu";

const DisplayPostCreated = ({ data, key }) => {
    const usersList = useSelector((state) => state.mainReducer.usersList);
    const user = usersList.find((user) => user.id === data.data.authorId);
  
    return (
      <DropdownMenuItem key={key}>
        <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
          <div className="grid gap-1">
            <p className="text-sm font-medium">
              {user?.username} has created a new post.
            </p>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">
              5 min ago
            </p> */}
          </div>
        </div>
      </DropdownMenuItem>
    );
  };

  function NotificationsDisplay() {
    const notifications = useSelector((state) => state.mainReducer.notifications);
  
    return (
      <>
        {notifications?.length > 0 ? (
          notifications.map((notification, index) => {
            if (notification.type === "post.created") {
              return <DisplayPostCreated key={index} data={notification} />;
            }
            return null;
          })
        ) : (
          <DropdownMenuItem>
            <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <div className="grid gap-1">
                <p className="text-sm font-medium">
                  You have no notifications.
                </p>
              </div>
            </div>
          </DropdownMenuItem>
        )}
      </>
    );
  }
export default NotificationsDisplay