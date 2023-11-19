
import {  createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Orders from "../components/Orders/Orders";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";

 const router = createBrowserRouter([
    {
        path: "/",
        element:  <Home />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/orders",
        element: <Orders />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }

]);

export default router;





