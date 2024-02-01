import React from "react";
import BackofficeLayout from "@b/components/layout/BackofficeLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersPage from "@b/pages/users/UsersPage";
import SpotsPage from "@b/pages/spots/SpotsPage";
import ComponentsPage from "@b/pages/components/ComponentsPage";
import BrandsPage from "@b/pages/brands/BrandsPage";
import ModelsPage from "@b/pages/models/ModelsPage";
import CategoriesPage from "@b/pages/categories/CategoriesPage";



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
                path: "/admin/components",
                element: <ComponentsPage />,
            },
            {
                path: "/admin/brands",
                element: <BrandsPage />
            },
            {
                path: "/admin/models",
                element: <ModelsPage />
            },
            {
                path: "/admin/categories",
                element: <CategoriesPage />
            },
            {
                path: "*",
                element: <div>404</div>,
            },
        ]
    },
]);

export const App = () => <RouterProvider router={router} />
