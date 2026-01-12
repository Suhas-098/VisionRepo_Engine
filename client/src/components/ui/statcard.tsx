type StatCardProps = {
    title: string;
    value: number | string;
};

const StatCard = ({ title, value }: StatCardProps) => {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="mt-2 text-3xl font-semibold">{value}</p>
        </div>
    );
};

export default StatCard;
