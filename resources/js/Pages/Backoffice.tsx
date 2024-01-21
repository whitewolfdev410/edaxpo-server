import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import UsersPage from "@/Components/UsersPage";
import BackofficeLayout from "@/Layouts/BackofficeLayout";
import React from "react";

export default function Backoffice({ auth }: PageProps) {
    return (
        <BackofficeLayout>
            <div>
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10">
                    <UsersPage/>
                </div>
            </div>
        </BackofficeLayout>
    );
}
