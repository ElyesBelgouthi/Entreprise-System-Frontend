import { Button } from "../app//ui/button";

import {
  CardContent,
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "../app/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";
import FeedPost from "@/components/FeedPost";

const DUMMY_POSTS = [
  {
    avatar: "OM",
    name: "Omar Maalej",
    time: "4h ago",
    content:
      "Just shipped a new version of our design system. Let me know if you have any feedback!",
    comments: [
      {
        avatar: "SD",
        name: "Shu Ding",
        content: "Awesome, can't wait to try it out! Keep up the great work.",
        time: "1h ago",
      },
      {
        avatar: "SD",
        name: "Shu Ding",
        content: "Awesome, can't wait to try it out! Keep up the great work.",
        time: "1h ago",
      },
    ],
  },

  {
    avatar: "OM",
    name: "Omar Maalej",
    time: "4h ago",
    content:
      "Just shipped a new version of our design system. Let me know if you have any feedback!",
    comments: [
      {
        avatar: "SD",
        name: "Shu Ding",
        content: "Awesome, can't wait to try it out! Keep up the great work.",
        time: "1h ago",
      },
      {
        avatar: "SD",
        name: "Shu Ding",
        content: "Awesome, can't wait to try it out! Keep up the great work.",
        time: "1h ago",
      },
    ],
  },
];

const FeedPage = () => {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-100 dark:bg-gray-900">
        <div className="container py-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-8">
              <CreatePost />
              <div className="space-y-4">
                {DUMMY_POSTS.map((post, index) => {
                  return <FeedPost post={post} key={index} />;
                })}
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
