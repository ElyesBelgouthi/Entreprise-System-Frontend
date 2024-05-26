import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/login";
import MainLayout from "./pages/MainLayout";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: 1,
        element: <FeedPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
