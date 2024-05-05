import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import { Input } from "../app/ui/input";
import { Button } from "../app/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../app/ui/collapsible";

const ChatPage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-16 shrink-0 items-center border-b bg-gray-100 px-6 dark:border-gray-700 dark:bg-gray-900">
        <a className="flex items-center gap-2" href="#">
          <MessageCircleIcon className="h-6 w-6 text-gray-700 dark:text-gray-50" />
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-50">
            Enterprise Chat
          </span>
        </a>
      </header>
      <div className="flex h-full">
        <aside className="hidden w-64 shrink-0 border-r bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-900 lg:block">
          <Collapsible className="space-y-4">
            <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-semibold text-gray-700 dark:text-gray-50 [&[data-state=open]>svg]:rotate-90">
              Rooms
              <ChevronRightIcon className="h-5 w-5 transition-all text-gray-700 dark:text-gray-50" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <nav className="space-y-2">
                <a
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50"
                  href="#"
                >
                  <HashIcon className="h-4 w-4 text-gray-700 dark:text-gray-50" />
                  General
                </a>
                <a
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50"
                  href="#"
                >
                  <HashIcon className="h-4 w-4 text-gray-700 dark:text-gray-50" />
                  Engineering
                </a>
                <a
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50"
                  href="#"
                >
                  <HashIcon className="h-4 w-4 text-gray-700 dark:text-gray-50" />
                  Design
                </a>
                <a
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50"
                  href="#"
                >
                  <HashIcon className="h-4 w-4 text-gray-700 dark:text-gray-50" />
                  Marketing
                </a>
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
          <div className="mt-auto flex items-center gap-2 rounded-md bg-gray-200 p-2 dark:bg-gray-800">
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

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
