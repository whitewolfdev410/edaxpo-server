import { MotoIcon } from "@/Components/Icons/MotoIcon";
import { TabsProps } from "antd";

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: <span className="text-gray-800"><MotoIcon /></span>,
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: <span className="text-gray-800"><MotoIcon /></span>,
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: <span className="text-gray-800"><MotoIcon /></span>,
        children: 'Content of Tab Pane 3',
    },
];
/*
export default function Form() {
    return (
        <div className="max-w-[1100px] mx-auto mt-4">
            <div className="bg-white rounded shadow-2xl p-4">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
        </div>
    );
}
*/
