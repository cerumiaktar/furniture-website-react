import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Products from "../pages/Products/Products";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products',
                element:<Products></Products>
            },
            {
                path:'/blogs',
                element:<AllBlogs></AllBlogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
]);

export default router;