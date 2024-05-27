import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";

const Comment = ({ comment }) => {
  return (
    <div className="flex items-start gap-4">
      <Avatar>
        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
        <AvatarFallback>{comment.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="font-medium">{comment.author.username}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(comment.createdAt).toLocaleTimeString()}
          </div>
        </div>
        <p className="mt-2">{comment.content}</p>
      </div>
    </div>
  );
};

export default Comment;
