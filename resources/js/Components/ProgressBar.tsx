export const ProgressBar = ({ progress }: { progress: number }) => {
    return (
        <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                <div
                    style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                ></div>
            </div>
        </div>
    );
}
