import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/blogs',
            element: <Blogs />
        },
        {
            path: '/allToys',
            element: <AllToys />
        },
        {
            path: '/toyDetails/:id',
            element: <ToysDetails />,
            loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        },
    ]
  },
]);

export default router;
