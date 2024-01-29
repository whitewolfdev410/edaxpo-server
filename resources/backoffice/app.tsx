import React from "react";
import BackofficeLayout from "@b/components/layout/BackofficeLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "@b/pages/users/UsersPage";
import SpotsPage from "@b/pages/spots/SpotsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BackofficeLayout />,
        errorElement: <div>404</div>,
        children: [
            {
                path: "/admin/dashboard",
                element: <div>Dashboard</div>,
            },
            {
                path: "/admin/users",
                element: <UsersPage />,
            },
            {
                path: "/admin/spots",
                element: <SpotsPage />,
            },
            {
                path: "/admin/spot-reports",
                element: <UsersPage />,
            },
            {
                path: "*",
                element: <div>404</div>,
            }
        ]
    },
]);

export const App = () => <RouterProvider router={router} />
