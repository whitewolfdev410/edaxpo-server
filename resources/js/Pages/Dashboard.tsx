import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Button, Steps} from "antd";

export default function Dashboard({ auth }: PageProps) {
    const description = 'This is a description.';
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                        <div className="p-4 text-center mb-4">
                            <Button type="primary">Primary</Button>
                            <Button>Default</Button>
                        </div>
                        <Steps
                            current={1}
                            items={[
                                {
                                    title: 'Finished',
                                    description,
                                },
                                {
                                    title: 'In Progress',
                                    description,
                                    subTitle: 'Left 00:00:08',
                                },
                                {
                                    title: 'Waiting',
                                    description,
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
