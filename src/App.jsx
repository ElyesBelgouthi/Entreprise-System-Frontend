import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { useSelector } from "react-redux";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/login";
import AdminSpace from "./pages/admin/admin-space";
import EmployeesMangagement from "./pages/admin/employees-management";
import Dashboard from "./pages/admin/dashboard";
import RoomsAdmin from "./pages/admin/rooms-admin";
import RoomEdit from "./pages/admin/room-edit";
import MainLayout from "./pages/MainLayout";
import useSse from "./hooks/useSse";
import client from "./GraphQL/apollo";
import AdminGuard from "./guards/AdminGuard";
import UserGuard from "./guards/UserGuard";
import AdminAndUserGuard from "./guards/AdminAndUserGuard";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <AdminAndUserGuard>
        <MainLayout />
      </AdminAndUserGuard>
    ),
    children: [
      {
        index: 1,
        path: "/",
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
    element: (
      <AdminGuard>
        <AdminSpace />
      </AdminGuard>
    ),
    children: [
      {
        index: 1,
        element: <Dashboard />,
      },
      {
        path: "employees",
        element: <EmployeesMangagement />,
      },
      {
        path: "rooms",
        element: <RoomsAdmin />,
      },
      {
        path: "rooms/:id",
        element: <RoomEdit />,
      },
    ],
  },
]);

function App() {
  const userId = useSelector((state) => state.mainReducer?.userData?.id);
  const role = useSelector((state) => state.mainReducer?.userData?.role);

  const events = useSse('http://localhost:3000/events/subscribe', userId, role);

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
