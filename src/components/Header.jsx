import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "../app/ui/navigation-menu";
import { Button } from "../app//ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "../app/ui/dropdown-menu";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import NotificationsDisplay from "./NotificationsDisplay";
import { toggleNotificationIsRead } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import useLogout from "@/hooks/useLogout";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.mainReducer.userData);

  const logout = useLogout();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("notificationState", notificationState);
    dispatch(toggleNotificationIsRead());
    console.log("notificationState", notificationState);
  };

  const notificationState = useSelector(
    (state) => state.mainReducer.notificationIsRead
  );
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <a
        className="mr-6 hidden lg:flex w-72 overflow-visible lg:items-center lg:space-x-2"
        href="#"
      >
        <img src={logo} alt="logo" className="h-10 w-10 " />
        <h1 className="text-[20px] font-bold ">Enterprise System</h1>
      </a>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <NavLink
                to="/"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Feed
              </NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <NavLink
                to="/chat"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Chat
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <Avatar>
                <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
                <AvatarFallback>
                  {user.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{user.username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/profile">View Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={logout}  
            >Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className={`rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800
              ${!notificationState ? "bg-blue-500" : ""}
              `}
              size="icon"
              variant="ghost"
              onClick={handleClick}
            >
              <BellIcon
                className={` w-4 h-4 ${
                  !notificationState ? "text-white" : "text-gray-500"
                }`}
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <NotificationsDisplay />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;

export function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M32 1L41.799 7.399L52.098 11.5L62 18L64 28L58.5 37.802L52.099 46.801L45 52.5L38 57L32 64L25 57L18 52.5L11.5 46.801L5 37.802L0 28L1.5 18L11.5 11.5L22 7.399L32 1Z" />
    <circle cx="32" cy="32" r="10" />
    <circle cx="32" cy="1" r="2" />
    <circle cx="62" cy="28" r="2" />
    <circle cx="1" cy="28" r="2" />
    <circle cx="32" cy="64" r="2" />
    <circle cx="18" cy="52.5" r="2" />
    <circle cx="45" cy="52.5" r="2" />
    <circle cx="11.5" cy="11.5" r="2" />
    <circle cx="52.5" cy="11.5" r="2" />
    <circle cx="25" cy="57" r="2" />
    <circle cx="38" cy="57" r="2" />
  </svg>
);
