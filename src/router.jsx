import { createBrowserRouter } from "react-router-dom";

// layouts import
import GuestLayout from "./components/layouts/GuestLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import UserLayout from "./components/layouts/UserLayout";
import AdminLayout from "./components/layouts/AdminLayout"

// guest page imports
import Home from "./views/guest/home/Home";
import OnBoard from "./views/guest/onboard/OnBoard"

// auth imports
import Login from "./views/users/auth/Login";
import Register from "./views/users/auth/Register";

// user page imports
import Dashboard, { loader as dashboardLoader } from "./views/users/dashboard/Dashboard";
import Slices from "./views/users/slices/Slices";

// admin page imports
import AdminDashboard from "./views/admin/dashboard/adminDashboard";
import AdminLogin from "./views/admin/auth/AdminLogin";
import AdminRegister from "./views/admin/auth/AdminRegister";
import Articles from "./views/admin/articles/Articles";
import CreateArticle from "./views/admin/articles/CreateArticle";
import AllArticles from "./views/admin/articles/AllArticles";


const router = createBrowserRouter([
    // Guest Layout
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'getstarted',
                element: <OnBoard />
            }
        ]
    },

    // Auth Layout
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
            },
            {
                path: 'admin/login',
                element: <AdminLogin />
            },
            {
                path: 'admin/register',
                element: <AdminRegister />
            }
        ]
    },

    // User Layout
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
    },

    // Admin layout
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            // Dashboard
            {
                path: 'dashboard',
                element: <AdminDashboard />
            },

            // Articles
            {
                path: 'articles',
                element: <Articles />,
                children: [
                    { index: true, element: <AllArticles /> },
                    {
                        path: 'create',
                        element: <CreateArticle />
                    }
                ]
            },
        ]

    }
])

export default router;