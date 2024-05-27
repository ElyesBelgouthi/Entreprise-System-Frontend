import {
  CardContent,
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "../app/ui/card";
import { useQuery, gql } from "@apollo/client";

import CreatePost from "../components/CreatePost";
import FeedPost from "@/components/FeedPost";
import { LOAD_POSTS } from "@/GraphQL/Queries";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostsList, setUsersList } from "@/redux/actions";
import FullScreenLoader from "@/components/FullScreenLoader";
import MainService from "@/services/main.service";

const FeedPage = () => {
  const { error, loading, data } = useQuery(LOAD_POSTS);
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.mainReducer.postsList);
  const users = useSelector((state) => state.mainReducer.usersList);

  const fetchData = async () => {
    await MainService.getUsers()
      .then((response) => {
        console.log(response.data);
        dispatch(setUsersList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(error);
    console.log(data);

    users?.length === 0 && fetchData();

    if (data) dispatch(setPostsList(data.posts));
  }, [data, refresh]);

  return (
    <>
      <main className="flex-1 bg-gray-100 dark:bg-gray-900">
        <div className="container py-8 px-36">
          <div className="grid gap-8">
            <div className="space-y-8">
              <CreatePost />
              <div className="space-y-4">
                {loading && <FullScreenLoader />}
                {error && <p>Error loading posts</p>}
                {posts &&
                  posts.map((post, index) => {
                    return (
                      <FeedPost
                        setRefresh={setRefresh}
                        post={post}
                        key={index}
                      />
                    );
                  })}
              </div>
            </div>
            {/* <div className="space-y-8">
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
            </div> */}
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
