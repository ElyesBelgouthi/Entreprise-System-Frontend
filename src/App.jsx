import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfilePage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
