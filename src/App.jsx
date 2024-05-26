import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/login";
import AdminSpace from "./pages/admin/admin-space";
import EmployeesMangagement from "./pages/admin/employees-management";
import Dashboard from "./pages/admin/dashboard";
import Settings from "./pages/admin/settings";
import RoomsAdmin from "./pages/admin/rooms-admin";
import RoomEdit from "./pages/admin/room-edit";
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
  {
    path: "/admin",
    element: <AdminSpace />,
    children: [
      {
        index: 1,
        element: <Dashboard/>
      },
      {
        path: "employees",
        element: <EmployeesMangagement/>
      },
      {
        path: "rooms",
        element: <RoomsAdmin/>
      },
      {
        path: "rooms/:id",
        element: <RoomEdit/>
      },
      {
        path: "settings",
        element: <Settings/>
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
