import { createBrowserRouter } from "react-router-dom";

import GuestLayout from "./components/layouts/GuestLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import UserLayout from "./components/layouts/UserLayout";

import Home from "./views/Home";
import Login from "./views/users/auth/Login";
import Register from "./views/users/auth/Register";
import Dashboard, { loader as dashboardLoader } from "./views/users/Dashboard";
import Slices from "./views/users/Slices";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },

    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },

    {
        path: '/user',
        element: <UserLayout />,
        loader: dashboardLoader,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'slices',
                element: <Slices />
            }

        ]
    }
])

export default router;