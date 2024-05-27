import { Button } from "../app/ui/button";
import { CardContent, Card } from "../app/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import Comment from "./Comment";
import { Input } from "@/app/ui/input";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "@/GraphQL/Mutations";
import { useDispatch } from "react-redux";
import { addCommentToPost } from "@/redux/actions";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedPost = ({ post }) => {
  const [createComment, { data, loading, error }] = useMutation(CREATE_COMMENT);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComment({
        variables: {
          createCommentInput: {
            postId: post.id,
            authorId: 1,
            content: comment,
          },
        },
      }).then((response) => {
        console.log("resp", response);
        dispatch(addCommentToPost(response.data.createComment));
        toast.success("Comment added successfully!");
      });
      setComment(""); // Clear the input field after submission
    } catch (err) {
      console.error("Error creating comment:", err);
      toast.error("Error creating comment !");
    }
  }

  return (
    <Card>
      <CardContent>
        <div className="flex items-start gap-4 pt-6">
          <Avatar>
            <AvatarImage alt={`@${post.author.username}`} src="/placeholder-avatar.jpg" />
            <AvatarFallback>{post.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-medium">{post.author.username}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.createdAt).toLocaleTimeString()}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="mt-2">{post.content}</p>
              {post.image && (
                <img
                  alt="Post Image"
                  className="mt-4 aspect-video rounded-lg overflow-hidden"
                  height={400}
                  src={post.image}
                  width={600}
                />
              )}
            </div>
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
              {/* {post.comments &&
                post.comments.map((comment, index) => (
                  <Comment comment={comment} key={index} />
                ))} */}
              {post.comments &&
                post.comments.slice(0, 3).map((comment, index) => (
                  <Comment comment={comment} key={index} />
                ))}
              
            </div>
            <form className="mt-6 flex items-center gap-2" onSubmit={handleSubmit}>
              <Input
                className="flex-1 bg-gray-200 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-50 dark:placeholder:text-gray-400"
                placeholder="Type your comment..."
                type="text"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button type="submit" size="sm" variant="ghost" disabled={loading}>
                {loading ? "Posting..." : "Comment"}
              </Button>
            </form>
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
