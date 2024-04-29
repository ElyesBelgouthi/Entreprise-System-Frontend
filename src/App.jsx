import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
