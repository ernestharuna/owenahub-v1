import { createBrowserRouter } from "react-router-dom";

// layouts import
import GuestLayout from "./components/layouts/GuestLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import UserLayout from "./components/layouts/UserLayout";
import AdminLayout from "./components/layouts/AdminLayout"

// guest page imports
import Home from "./views/guest/home/Home";
import OnBoard from "./views/guest/onboard/OnBoard";
import GuestArticles, { loader as GuestArticlesLoader } from "./views/guest/articles/GuestArticles";
import AllGuestArticles from "./views/guest/articles/AllGuestArticles";

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
import Articles, { loader as ArticlesLoader } from "./views/admin/articles/Articles";
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
                element: <Home />,
            },
            {
                path: 'getstarted',
                element: <OnBoard />
            },
            {
                path: 'articles',
                element: <GuestArticles />,
                loader: GuestArticlesLoader,
                children: [
                    {
                        index: true,
                        element: <AllGuestArticles />,
                        loader: GuestArticlesLoader
                    }
                ]
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
                index: true,
                element: <AdminDashboard />,
            },

            // Articles
            {
                path: 'articles',
                element: <Articles />,
                loader: ArticlesLoader,
                children: [
                    {
                        index: true,
                        element: <AllArticles />,
                        loader: ArticlesLoader,
                    },
                    {
                        path: 'create',
                        element: <CreateArticle />,
                    }
                ]
            },
        ]

    }
])

export default router;