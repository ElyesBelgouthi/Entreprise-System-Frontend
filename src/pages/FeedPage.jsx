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
import { Label } from "../app/ui/label";
import { Textarea } from "../app/ui/textarea";
import {
  CardContent,
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "../app/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import CreatePost from "../components/CreatePost";

const FeedPage = () => {
  return (
    <>
      <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <a className="mr-6 hidden lg:flex" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <div className="flex w-full justify-center">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <a
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Posts
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Chat
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Notifications
                </a>
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
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Manage Profile</DropdownMenuItem>
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <BellIcon className="w-4 h-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">
                      Your post has been liked by 10 people.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      5 min ago
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">
                      You have a new comment on your post.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      1 min ago
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">
                      You have a new connection request.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2 hours ago
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-900">
        <div className="container py-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-8">
              <CreatePost />
              <div className="space-y-4">
                <Card>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage
                          alt="@jaredpalmer"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Jared Palmer</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            2h ago
                          </div>
                        </div>
                        <img
                          alt="Post Image"
                          className="mt-4 aspect-video rounded-lg overflow-hidden"
                          height={400}
                          src="/placeholder.svg"
                          width={600}
                        />
                        <div className="mt-4 flex items-center gap-4">
                          <Button size="sm" variant="ghost">
                            <ThumbsUpIcon className="h-5 w-5" />
                            Like
                          </Button>
                          <Button size="sm" variant="ghost">
                            <MessageCircleIcon className="h-5 w-5" />
                            Comment
                          </Button>
                        </div>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage
                                alt="@shadcn"
                                src="/placeholder-avatar.jpg"
                              />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className="font-medium">Shu Ding</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  1h ago
                                </div>
                              </div>
                              <p className="mt-2">
                                Awesome, can't wait to try it out! Keep up the
                                great work.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage
                                alt="@maxleiter"
                                src="/placeholder-avatar.jpg"
                              />
                              <AvatarFallback>ML</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className="font-medium">Max Leiter</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  30m ago
                                </div>
                              </div>
                              <p className="mt-2">
                                This is great, the new features look really
                                promising. Can't wait to see what else you have
                                in store.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage
                          alt="@shuding_"
                          src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>SD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Shu Ding</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            4h ago
                          </div>
                        </div>
                        <p className="mt-2">
                          Just shipped a new version of our design system. Let
                          me know if you have any feedback!
                        </p>
                        <div className="mt-4 flex items-center gap-4">
                          <Button size="sm" variant="ghost">
                            <ThumbsUpIcon className="h-5 w-5" />
                            Like
                          </Button>
                          <Button size="sm" variant="ghost">
                            <MessageCircleIcon className="h-5 w-5" />
                            Comment
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    You have 3 unread notifications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">
                        Your post has been liked by 10 people.
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        5 min ago
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">
                        You have a new comment on your post.
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        1 min ago
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">
                        You have a new connection request.
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Chat</CardTitle>
                  <CardDescription>You have 2 unread messages.</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FeedPage;

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

function ImageIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
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

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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

function ThumbsUpIcon(props) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
