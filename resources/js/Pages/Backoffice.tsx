import { PageProps } from '@/types';
import React from "react";
import UsersPage from "../../backoffice/pages/users/UsersPage";
import BackofficeLayout from "@/Layouts/BackofficeLayout";

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
