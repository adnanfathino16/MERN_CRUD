import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "./components/Fragments/UserList";
import AddUser from "./components/Fragments/AddUser.jsx";
import EditUser from "./components/Fragments/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
    errorElement: <div>404 Ngab</div>,
  },
  {
    path: "/add",
    element: <AddUser />,
  },
  {
    path: "/edit/:id",
    element: <EditUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
