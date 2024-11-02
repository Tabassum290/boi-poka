import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import BookDetails from "./Components/BookDetails";
import ListedBooks from "./Components/ListedBooks";
import Pages from "./Components/Pages";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
     {
      path:'/',
      element:<Home></Home>,
     },
     {
      path:'books/:bookId',
      element:<BookDetails></BookDetails>,
      loader:() => fetch('/booksdata.json')
     },
     {
      path:'listedbooks',
      element:<ListedBooks></ListedBooks>,
      loader:() => fetch('/booksdata.json'),
     },
     {
      path:'pages',
      element:<Pages></Pages>,
      loader:() => fetch('/booksdata.json'),
     },
     {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
     },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
