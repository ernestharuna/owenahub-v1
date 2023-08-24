import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./views/ErrorPage";

// layouts import
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import MentorLayout from "./layouts/MentorLayout"

// guest page imports
import Home from "./views/guest/home/Home";
import OnBoard from "./views/guest/onboard/OnBoard";
import GuestArticles, { loader as GuestArticlesLoader } from "./views/guest/articles/GuestArticles";
import AllGuestArticles from "./views/guest/articles/AllGuestArticles";
import ShowGuestArticle, { loader as ShowGuestArticleLoader } from "./views/guest/articles/ShowGuestArticle";
import WaitList from "./views/guest/waitList/WaitList";

// user page imports
import Login from "./views/users/auth/Login";
import Register from "./views/users/auth/Register";
import Dashboard, { loader as dashboardLoader } from "./views/users/dashboard/Dashboard";
import Slices from "./views/users/slices/Slices";
import UserSessions, { loader as UserSessionsLoader } from "./views/users/sessions/UserSessions";
import AllUserSessions from "./views/users/sessions/AllUserSessions";
import CreateSession, { loader as CreateSessionLoader } from "./views/users/sessions/CreateSession";
import UserMentors, { loader as UserMentorsLoader } from "./views/users/mentors/UserMentors";
import AllUserMentors from "./views/users/mentors/AllUserMentors";
import ShowUserMentor, { loader as ShowUserMentorLoader } from "./views/users/mentors/ShowUserMentor";
import ShowUserSession, { loader as ShowUserSessionLoader } from "./views/users/sessions/ShowUserSession";

// admin page imports
import AdminDashboard from "./views/admin/dashboard/adminDashboard";
import AdminLogin from "./views/admin/auth/AdminLogin";
import AdminRegister from "./views/admin/auth/AdminRegister";
import Articles, { loader as ArticlesLoader } from "./views/admin/articles/Articles";
import CreateArticle from "./views/admin/articles/CreateArticle";
import AllArticles from "./views/admin/articles/AllArticles";
import ShowArticle, { loader as ShowArticleLoader } from "./views/admin/articles/ShowArticle";

// Mentor page imports
import MentorLogin from "./views/mentors/auth/MentorLogin";
import MentorRegister from "./views/mentors/auth/MentorRegister";
import MentorDashboard from "./views/mentors/dashboard/MentorDashboard";
import MentorSessions from "./views/mentors/sessions/MentorSessions";
import AllMentorSessions from "./views/mentors/sessions/AllMentorSessions";
import ShowMentorSessions from "./views/mentors/sessions/ShowMentorSessions";
import CreateGroupSession from "./views/mentors/sessions/CreateGroupSession";
import ShowGroupSession, { loader as ShowGroupSessionLoader } from "./views/mentors/sessions/ShowGroupSession";
import MentorArticles from "./views/mentors/articles/MentorArticles";


const router = createBrowserRouter([
    // Guest Layout
    {
        path: "/",
        element: <GuestLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "getstarted",
                element: <OnBoard />
            },
            {
                path: "waitlist",
                element: <WaitList />
            },
            {
                path: "articles",
                element: <GuestArticles />,
                loader: GuestArticlesLoader,
                children: [
                    {
                        index: true,
                        element: <AllGuestArticles />,
                        loader: GuestArticlesLoader
                    },
                    {
                        path: ":articleId",
                        element: <ShowGuestArticle />,
                        loader: ShowGuestArticleLoader,
                    }
                ]
            },
        ]
    },

    // User Layout
    {
        path: "/user",
        element: <UserLayout />,
        loader: dashboardLoader,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "slices",
                element: <Slices />
            },
            {
                path: "sessions",
                element: <UserSessions />,
                loader: UserSessionsLoader,
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <AllUserSessions />,
                        loader: UserSessionsLoader,
                    },
                    {
                        path: ":sessionId",
                        element: <ShowUserSession />,
                        loader: ShowUserSessionLoader
                    }
                ]
            },
            {
                path: "mentors",
                element: <UserMentors />,
                loader: UserMentorsLoader,
                errorElement: <ErrorPage />,

                children: [
                    {
                        index: true,
                        element: <AllUserMentors />,
                        loader: UserMentorsLoader,
                    },
                    {
                        path: "show/:mentorId/:mentorName",
                        element: <ShowUserMentor />,
                        loader: ShowUserMentorLoader,
                    },
                    {
                        path: "show/:mentorId/:mentorName/create",
                        element: <CreateSession />,
                        loader: CreateSessionLoader,
                    },
                ]
            },
        ]
    },

    // Mentor Layout 
    {
        path: "/mentor",
        element: <MentorLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "dashboard",
                index: true,
                element: <MentorDashboard />,
                errorElement: <ErrorPage />,
            },
            {
                path: "articles",
                element: <MentorArticles />
            },
            {
                path: "sessions",
                element: <MentorSessions />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <AllMentorSessions />,
                        loader: UserSessionsLoader,
                    },
                    {
                        path: ":sessionId",
                        element: <ShowMentorSessions />,
                        loader: ShowUserSessionLoader,
                    },
                    {
                        path: "group-sessions/:groupSessionId",
                        element: <ShowGroupSession />,
                        loader: ShowGroupSessionLoader,
                    },
                    {
                        path: "group-sessions/create",
                        element: <CreateGroupSession />
                    },
                ]
            }
        ]
    },

    // Admin layout
    {
        path: "/admin",
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            // Dashboard
            {
                path: "dashboard",
                index: true,
                element: <AdminDashboard />,
            },

            // Articles
            {
                path: "articles",
                element: <Articles />,
                loader: ArticlesLoader,
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <AllArticles />,
                        loader: ArticlesLoader,
                    },
                    {
                        path: "create",
                        element: <CreateArticle />,
                    },
                    {
                        path: ":articleId",
                        element: <ShowArticle />,
                        loader: ShowArticleLoader,
                    }
                ]
            },
        ]
    },

    // Auth Layout
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "admin/login",
                element: <AdminLogin />
            },
            {
                path: "admin/register",
                element: <AdminRegister />
            },
            {
                path: "mentor/login",
                element: <MentorLogin />
            },
            {
                path: "mentor/register",
                element: <MentorRegister />
            }
        ]
    },
])

export default router