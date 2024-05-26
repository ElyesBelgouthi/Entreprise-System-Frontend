import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import { Input } from "../app/ui/input";
import { Button } from "../app/ui/button";
import { MessageCircleIcon, PaperclipIcon, SendIcon } from "../app/ui/icons";

import AsideChat from "@/components/AsideChat";
import OtherMessage from "@/components/OtherMessage";
import MyMessage from "@/components/MyMessage";

const ChatPage = () => {
  return (
    <div className="flex h-full">
      <AsideChat />
      <main className="flex flex-1 flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid gap-4">
            <OtherMessage
              name="Mohsen Bouzidi"
              message="sdjqfkljsdklmfjqsdklmfjqsdklm fqsdnklfjklqsdmf jqdmfjk^qsdm"
              time="12:35 PM"
            />
            <MyMessage
              message="sdjqfkljsdklmfjqsdklmfjqsdklm fqsdnklfjklqsdmf jqdmfjk^qsdm"
              time="12:35 PM"
            />
            <OtherMessage
              name="Samer Mansouri"
              message="Wooooooooooooooooooy"
              time="14:35 PM"
            />
            <MyMessage message="Aaychou Aaychou" time="12:35 PM" />
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
  );
};

export default ChatPage;
