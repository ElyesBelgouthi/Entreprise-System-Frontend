import { Button } from "../app/ui/button";
import { CardContent, Card } from "../app/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import Comment from "./Comment";
import { Input } from "@/app/ui/input";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "@/GraphQL/Mutations";
import { useDispatch } from "react-redux";
import { addCommentToPost } from "@/redux/actions";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DialogPost from "./DialogPost";

const FeedPost = ({ setRefresh, post }) => {
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
  };

  const renderMedia = (path) => {
    const extension = path.split(".").pop().toLowerCase();
    const isImage = ["jpg", "jpeg", "png", "gif"].includes(extension);
    const isDocument = ["pdf", "doc", "docx"].includes(extension);

    if (isImage) {
      return (
        <div className="w-[580px] h-90">
          <img
            alt="Post Image"
            className="mt-4 object-contain rounded-lg overflow-hidden h-full w-full"
            height={400}
            src={`http://localhost:3000/${path.replace(/\\/g, "/")}`}
          />
        </div>
      );
    } else if (isDocument) {
      return (
        <a
          href={`http://localhost:3000/${post.path.replace(/\\/g, "/")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
        >
          <FileIcon className="mr-2 h-5 w-5" />
          View Document
        </a>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Card className="pointer">
        <CardContent>
          <div className="flex items-start gap-4 pt-6">
            <Avatar>
              <AvatarImage
                alt={`@${post.author.username}`}
                src="/placeholder-avatar.jpg"
              />
              <AvatarFallback>
                {post.author.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">{post.author.username}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.createdAt).toLocaleTimeString()}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="mt-8 w-[100%] text-left">{post.content}</p>
                {post.path && renderMedia(post.path)}
              </div>
              <div className="mt-4 flex items-center gap-4">
                <Button size="sm" variant="ghost">
                  <MessageCircleIcon className="h-5 w-5" />
                  Comment
                </Button>
                <DialogPost post={post} setRefresh={setRefresh} />
              </div>
              <div className="mt-4 space-y-4">
                {/* {post.comments &&
                post.comments.map((comment, index) => (
                  <Comment comment={comment} key={index} />
                ))} */}
                {post.comments &&
                  post.comments
                    .slice(0, 3)
                    .map((comment, index) => (
                      <Comment comment={comment} key={index} />
                    ))}
              </div>
              <form
                className="mt-6 flex items-center gap-2"
                onSubmit={handleSubmit}
              >
                <Input
                  className="flex-1 bg-gray-200 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-50 dark:placeholder:text-gray-400"
                  placeholder="Type your comment..."
                  type="text"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button
                  type="submit"
                  size="sm"
                  variant="ghost"
                  disabled={loading}
                >
                  {loading ? "Posting..." : "Comment"}
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default FeedPost;

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

function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
