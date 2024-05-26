import { Button } from "../app//ui/button";

import { CardContent, Card } from "../app/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";

import Comment from "./Comment";

const FeedPost = ({ post }) => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start gap-4 pt-6">
          <Avatar>
            <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
            <AvatarFallback>{post.avatar}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-medium">{post.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {post.time}
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
              {post.comments &&
                post.comments.map((comment, index) => (
                  <Comment comment={comment} key={index} />
                ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedPost;

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
