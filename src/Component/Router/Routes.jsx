import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import 'react-toastify/dist/ReactToastify.css';
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import PrivateRoutes from "./PrivateRoutes";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";

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
            element: <AllToys />,
            loader: () => fetch('http://localhost:5000/totalToys')
        },
        {
            path: '/addToys',
            element: <PrivateRoutes><AddToys /></PrivateRoutes>,
        },
        {
            path: '/myToys',
            element: <PrivateRoutes><MyToys/></PrivateRoutes>,
            // loader: () => fetch('http://localhost:5000/allToys')
        },
        {
            path: '/updateToys/:id',
            element: <PrivateRoutes><UpdateToys /></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        },
        {
            path: '/toyDetails/:id',
            element: <PrivateRoutes><ToysDetails /></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        },
    ]
  },
]);

export default router;
