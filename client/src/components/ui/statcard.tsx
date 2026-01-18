type StatCardProps = {
    title: string;
    value: number | string;
};

const StatCard = ({ title, value }: StatCardProps) => {
    return (
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <p className="mt-2 text-3xl font-heading font-semibold text-slate-900">{value}</p>
        </div>
    );
};

export default StatCard;
