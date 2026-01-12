import { getDashboard } from "../api/dasboard";
import { useEffect, useState } from "react";
import StatCard from "../components/ui/statcard";

const DashboardPage = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getDashboard().then(setData).catch((err) => setError(err.message)).finally(() => setLoading(false))
    }, [])

    if (loading) return <p className="p-6">Loading dashboard...</p>;
    if (error) return <p className="p-6 text-red-500">{error}</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Repositories"
                    value={data.totalRepositories}
                />
                <StatCard
                    title="Analyses"
                    value={data.totalAnalysis}
                />
                <StatCard
                    title="Issues Found"
                    value={data.totalIssues}
                />
                <StatCard
                    title="Avg Health Score"
                    value={data.averageHealthScore}
                />
            </div>
        </div>
    );
};

export default DashboardPage;
