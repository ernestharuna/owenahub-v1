import { createBrowserRouter } from "react-router-dom";

import GuestLayout from "./components/layouts/GuestLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import UserLayout from "./components/layouts/UserLayout";

import Home from "./views/Home";
import Login from "./views/users/auth/Login";
import Register from "./views/users/auth/Register";
import Dashboard from "./views/users/Dashboard";

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
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            }
        ]
    }
])

export default router;