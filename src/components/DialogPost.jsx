import React, { useState } from "react";
import { Button } from "../app/ui/button";
import { CardContent, Card } from "../app/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "../app/ui/avatar";
import { Input } from "@/app/ui/input";
import Comment from "./Comment";
import {
  DialogHeader,
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "../app/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../app/ui/dropdown-menu";
import {
  HeartIcon,
  MessageCircleIcon,
  SendIcon,
  BookmarkIcon,
  MoveHorizontalIcon,
  FileWarningIcon,
  StarIcon,
} from "lucide-react";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT, DELETE_POST } from "@/GraphQL/Mutations";
import { useDispatch, useSelector } from "react-redux";
import { addCommentToPost } from "@/redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery, gql } from "@apollo/client";

const DialogPost = ({ setRefresh, post }) => {
  const [comment, setComment] = useState("");
  const [createComment, { loading }] = useMutation(CREATE_COMMENT);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.mainReducer.userData);

  const [deletePost] = useMutation(DELETE_POST);

  const onDelete = async () => {
    try {
      await deletePost({
        variables: { id: parseInt(post.id) }, // Ensure id is an integer
      });
      window.location.reload();
    } catch (err) {
      console.error("Error deleting post:", err);
      toast.error("Error deleting post!");
    }
  };

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">See Details</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[800px] p-0">
        <div
          className={`grid ${
            post.path &&
            ["jpg", "jpeg", "png", "gif"].includes(
              post.path.split(".").pop().toLowerCase()
            )
              ? "grid-cols-2"
              : "grid-cols-1"
          } gap-0`}
        >
          {post.path &&
            ["jpg", "jpeg", "png", "gif"].includes(
              post.path.split(".").pop().toLowerCase()
            ) && (
              <div className="bg-gray-300">
                <img
                  alt="Post Image"
                  className="aspect-video object-contain w-full h-full"
                  height={600}
                  src={`http://localhost:3000/${post.path.replace(/\\/g, "/")}`}
                  width={800}
                />
              </div>
            )}

          <div className="flex flex-col">
            <div className="border-b border-gray-200 dark:border-gray-800 p-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    alt={`@${post.author.username}`}
                    src="/placeholder-user.jpg"
                  />
                  <AvatarFallback>
                    {post.author.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">{post.author.username}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.createdAt).toLocaleTimeString()}
                  </div>
                </div>

                {user.id == post.author.id && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-gray-300 mr-10 text-gray-700 hover:bg-gray-50"
                      >
                        <DeleteIcon />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6">
                      <DialogHeader className="text-center">
                        <DialogTitle>Confirm Deletion</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete this post?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="flex justify-end gap-4 mt-4">
                        <DialogTrigger asChild>
                          <Button
                            variant="destructive"
                            onClick={onDelete}
                            className="bg-red-500 text-white hover:bg-red-600"
                          >
                            Yes, Delete
                          </Button>
                        </DialogTrigger>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Cancel
                          </Button>
                        </DialogTrigger>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-4">
                {post.path &&
                  ["pdf", "doc", "docx"].includes(
                    post.path.split(".").pop().toLowerCase()
                  ) && (
                    <a
                      href={`http://localhost:3000/${post.path.replace(
                        /\\/g,
                        "/"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                    >
                      <FileIcon className="mr-2 h-5 w-5" />
                      View Document
                    </a>
                  )}
                <p>{post.content}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <MessageCircleIcon className="w-4 h-4" />
                    {post.comments && <span>{post.comments.length}</span>}
                  </div>
                </div>
                <div className="mt-4 space-y-4 max-h-[300px] overflow-y-auto">
                  {post.comments &&
                    post.comments.map((comment, index) => (
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPost;

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

function DeleteIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6l-1.5 14.5a2 2 0 0 1-2 1.5H8.5a2 2 0 0 1-2-1.5L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}
