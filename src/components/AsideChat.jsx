import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../app/ui/collapsible";

import { ChevronRightIcon, HashIcon, SettingsIcon } from "../app/ui/icons";

const AsideChat = () => {
  const rooms = ["General", "Engineering", "Design", "Sales"];

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-900 lg:block relative">
      <Collapsible className="space-y-4 mb-5">
        <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-semibold text-gray-700 dark:text-gray-50 [&[data-state=open]>svg]:rotate-90">
          Rooms
          <ChevronRightIcon className="h-5 w-5 transition-all text-gray-700 dark:text-gray-50" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <nav className="space-y-2">
            {rooms.map((room, i) => {
              return (
                <a
                  key={i}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50"
                  href="#"
                >
                  <HashIcon className="h-4 w-4 text-gray-700 dark:text-gray-50" />
                  {room}
                </a>
              );
            })}
          </nav>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="space-y-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-semibold text-gray-700 dark:text-gray-50 [&[data-state=open]>svg]:rotate-90">
          Private Messages
          <ChevronRightIcon className="h-5 w-5 transition-all text-gray-700 dark:text-gray-50" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <nav className="space-y-2">
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50"
              href="#"
            >
              <Avatar className="h-6 w-6">
                <AvatarImage alt="Sofia Davis" src="/avatars/01.png" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div className="flex items-center justify-between flex-1">
                <span>Sofia Davis</span>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Online
                  </span>
                </div>
              </div>
            </a>
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50"
              href="#"
            >
              <Avatar className="h-6 w-6">
                <AvatarImage alt="Liam Nguyen" src="/avatars/02.png" />
                <AvatarFallback>LN</AvatarFallback>
              </Avatar>
              <div className="flex items-center justify-between flex-1">
                <span>Liam Nguyen</span>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Online
                  </span>
                </div>
              </div>
            </a>
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50"
              href="#"
            >
              <Avatar className="h-6 w-6">
                <AvatarImage alt="Olivia Martin" src="/avatars/03.png" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="flex items-center justify-between flex-1">
                <span>Olivia Martin</span>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Online
                  </span>
                </div>
              </div>
            </a>
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50"
              href="#"
            >
              <Avatar className="h-6 w-6">
                <AvatarImage alt="Ethan Flores" src="/avatars/04.png" />
                <AvatarFallback>EF</AvatarFallback>
              </Avatar>
              <div className="flex items-center justify-between flex-1">
                <span>Ethan Flores</span>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Online
                  </span>
                </div>
              </div>
            </a>
          </nav>
        </CollapsibleContent>
      </Collapsible>
      <div className="mt-auto flex items-center gap-2 rounded-md bg-gray-200 p-2 dark:bg-gray-800 absolute bottom-5 w-56">
        <Avatar className="h-8 w-8">
          <AvatarImage alt="Your Name" src="/avatars/01.png" />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="font-medium text-gray-700 dark:text-gray-50">
            Your Name
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
