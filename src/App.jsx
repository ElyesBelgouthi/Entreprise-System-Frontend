import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/login";
import AdminSpace from "./pages/admin/admin-space";
import EmployeesMangagement from "./pages/admin/employees-management";
import Dashboard from "./pages/admin/dashboard";
import Settings from "./pages/admin/settings";
import RoomsAdmin from "./pages/admin/rooms-admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
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
