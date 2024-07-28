import { createBrowserRouter } from "react-router-dom";

import MasterLayout from "@/layout/MasterLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import GuestRoute from "@/components/auth/GuestRoute";

import Example from "@/pages/Example";

import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";

import NotFound from "@/pages/NotFound";

// Example Pages
import Forms from "../pages/examples/Forms";
import UIElements from "../pages/examples/UIElements";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: (
            <GuestRoute>
                <Login />
            </GuestRoute>
        ),
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <MasterLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "blank",
                element: <Example />,
            },
            {
                path: "forms",
                element: <Forms />,
            },
            {
                path: "ui-elements",
                element: <UIElements />,
            },
        ],
    },
    {
        path: "/*",
        element: <NotFound />,
    },
]);

export default router;
