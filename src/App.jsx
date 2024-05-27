import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

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

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL error ${message}`);
    });
  }
});

const link = from([
  new HttpLink({
    uri: "http://localhost:3000/graphql",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {

  const events = useSse('http://localhost:3000/events/subscribe');


  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
