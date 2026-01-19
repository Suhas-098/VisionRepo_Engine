import { useLocation, useNavigate } from "react-router-dom";
import StatCard from "../components/ui/statcard";

const DashboardPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Load analysis from navigation state OR localStorage
    const analysis =
        location.state?.analysis ||
        JSON.parse(localStorage.getItem("last_analysis") || "null");

    if (!analysis) {
        navigate("/", { replace: true });
        return null;
    }

    const { repoMeta, ai } = analysis;

    const handleReset = () => {
        const confirmed = window.confirm(
            "This will clear the current analysis and history. Are you sure?"
        );

        if (!confirmed) return;

        localStorage.removeItem("last_analysis");
        localStorage.removeItem("analysis_history");


        navigate("/", { replace: true });
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
                <div>
                    <h1 className="text-3xl font-heading font-bold tracking-tight">
                        Repository Overview
                    </h1>
                    <p className="text-slate-500 mt-2">
                        AI-generated insights for your codebase
                    </p>
                </div>

                <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-lg text-sm font-medium border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 transition-all shadow-sm"
                >
                    Reset Analysis
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatCard title="Total Files" value={repoMeta.totalFiles} />
                <StatCard title="Analyzed Files" value={repoMeta.analyzedFiles} />
                <StatCard title="Tech Stack Size" value={ai.techStack.length} />
                <StatCard
                    title="Confidence Score"
                    value={`${Math.round(ai.confidenceScore * 100)}%`}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white rounded-2xl p-8 border shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Repository Summary</h2>
                        <p className="text-slate-600 mb-6">{ai.summary}</p>
                    </section>

                    <section className="bg-white rounded-2xl p-8 border shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Request / Data Flow</h2>
                        <ol className="list-decimal list-inside space-y-2 text-slate-600">
                            {ai.flow.map((step: string, i: number) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <section className="bg-white rounded-2xl p-6 border shadow-sm">
                        <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {ai.techStack.map((tech: string) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-slate-50 border rounded-lg text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
