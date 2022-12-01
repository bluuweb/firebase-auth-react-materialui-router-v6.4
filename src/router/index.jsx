import { createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import RootLayout from "../layout/RootLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <SignIn />,
            },
            {
                path: "/register",
                element: <SignUp />,
            },
            {
                path: "/dashboard",
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                    // {
                    //     path: "/dashboard/products",
                    //     element: <Products />,
                    // },
                ],
            },
        ],
    },
]);
