import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../app/ui/collapsible";

import { ChevronRightIcon, HashIcon, SettingsIcon } from "../app/ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { appendMessagesToMessagesList, setSelectedConversation } from "@/redux/actions";
import MainService from "@/services/main.service";
import DisplayRoomsList from "./DisplayRoomsList";

const genAvatar = (username) => {
  return username.charAt(0) + username.charAt(1);
};

const AsideChat = () => {

  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.mainReducer.usersList);
  const currentUserId = useSelector((state) => state.mainReducer.userData.id);
  const userDetail = useSelector((state) => state.mainReducer.userData);

  const onlineUsers = useSelector((state) => state.mainReducer.onlineUsers);

  const fetchConversations = (selectedUser) => {
    dispatch(setSelectedConversation({
      ...selectedUser,
      type: "private",
    }));

    MainService.getMessages(currentUserId, selectedUser.id, false)
      .then((response) => {
        console.log("useful resp", response);
        dispatch(appendMessagesToMessagesList(response));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  


  return (
    <aside className="hidden w-72 shrink-0 border-r bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-900 lg:block relative">
      <Collapsible className="space-y-4 mb-5">
        <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-semibold text-gray-700 dark:text-gray-50 [&[data-state=open]>svg]:rotate-90">
          Rooms
          <ChevronRightIcon className="h-5 w-5 transition-all text-gray-700 dark:text-gray-50" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <DisplayRoomsList />
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="space-y-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-semibold text-gray-700 dark:text-gray-50 [&[data-state=open]>svg]:rotate-90">
          Private Messages
          <ChevronRightIcon className="h-5 w-5 transition-all text-gray-700 dark:text-gray-50" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <nav className="space-y-1 overflow-y-auto custom-scrollbar "
                style={{ maxHeight: "calc(100vh - 300px)" 
                
                }}
          >

            {usersList.map((user, i) => {
              //compare the current user id with the user id
              if (currentUserId !== user.id) {
                return (
                  <a
                    key={i}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50
                      hover:cursor-pointer
                    "
                    // href="#"
                    onClick={() => { fetchConversations(user)
                    }}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        alt={user.username}
                        src={user.avatar}
                      />
                      <AvatarFallback
                        className="bg-blue-500
                        text-white font-bold p-2

                        "
                      >
                        {genAvatar(user.username.toUpperCase())}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center justify-between flex-1">
                      <span>{user.username}</span>
                      <div className="flex items-center gap-2">
                        {
                          onlineUsers?.includes(user.id.toString()) ? (
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                          )
                        }
                      </div>
                    </div>
                  </a>
                );

              }
            }
         

            )}
          </nav>
        </CollapsibleContent>
      </Collapsible>
      <div className="mt-auto flex items-center gap-2 rounded-md bg-gray-200 p-2 dark:bg-gray-800 absolute bottom-5 w-56">
        <Avatar className="h-8 w-8">
          <AvatarImage alt="Your Name" src="/avatars/01.png" />
          <AvatarFallback
            className="bg-blue-500 text-white font-bold p-2"
          >
            {genAvatar(userDetail.username.toUpperCase())}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="font-medium text-gray-700 dark:text-gray-50">
            {userDetail.username}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span>Online</span>
          </div>
        </div>
        <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>
    </aside>
  );
};

export default AsideChat;
