import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import UsersPage from "@/Components/UsersPage";

export default function Backoffice({ auth }: PageProps) {
    const description = 'This is a description.';

    return (
        <div className="h-screen bg-stone-50">
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10">
                        <UsersPage />
                    </div>
                </div>
            </div>
        </div>
    );
}
