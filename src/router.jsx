import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import GuestLayout from "./components/layouts/GuestLayout";

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
    }
])

export default router;