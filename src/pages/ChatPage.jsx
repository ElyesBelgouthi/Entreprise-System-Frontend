import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import { Input } from "../app/ui/input";
import { Button } from "../app/ui/button";
import { MessageCircleIcon, PaperclipIcon, SendIcon } from "../app/ui/icons";

import AsideChat from "@/components/AsideChat";
import Header from "@/components/Header";

const ChatPage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <div className="flex h-full">
        <AsideChat />
        <main className="flex flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage alt="Sofia Davis" src="/avatars/01.png" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <div className="rounded-lg bg-gray-200 p-3 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-50">
                    <p>
                      Hey everyone, just wanted to check in and see how the
                      project is going.
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Sofia Davis • 10:23 AM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="flex flex-col gap-1">
                  <div className="rounded-lg bg-blue-400 p-3 text-sm text-white">
                    <p>
                      Everything is going well! We're on track to deliver the
                      MVP by the end of the week.
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    You • 10:25 AM
                  </p>
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage alt="Liam Nguyen" src="/avatars/02.png" />
                  <AvatarFallback>LN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage alt="Olivia Martin" src="/avatars/03.png" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <div className="rounded-lg bg-gray-200 p-3 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-50">
                    <p>
                      That's great to hear! I'll be sure to have the design
                      assets ready by then.
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Olivia Martin • 10:27 AM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="flex flex-col gap-1">
                  <div className="rounded-lg bg-blue-400 p-3 text-sm text-white">
                    <p>
                      Awesome, thanks Olivia. Let me know if you need anything
                      else from the team.
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    You • 10:29 AM
                  </p>
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage alt="Ethan Flores" src="/avatars/04.png" />
                  <AvatarFallback>EF</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <div className="border-t bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-900">
            <form className="flex items-center gap-2">
              <Input
                className="flex-1 bg-gray-200 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-50 dark:placeholder:text-gray-400"
                placeholder="Type your message..."
                type="text"
              />
              <div className="flex items-center gap-2">
                <Button
                  className="bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  variant="secondary"
                >
                  <PaperclipIcon className="h-5 w-5" />
                </Button>
                <Button
                  className="bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  variant="secondary"
                >
                  <SendIcon className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatPage;
