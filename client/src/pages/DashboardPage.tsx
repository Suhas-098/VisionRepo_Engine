import { useLocation } from "react-router-dom";
import StatCard from "../components/ui/statcard";

console.log("DashboardPage rendered");


const DashboardPage = () => {
    const location = useLocation();


    const analysis =
        location.state?.analysis ||
        JSON.parse(localStorage.getItem("last_analysis") || "null");


    if (!analysis) {
        return (
            <div className="flex min-h-[50vh] flex-col items-center justify-center p-6 text-center text-slate-400">
                <p className="text-lg">No analysis found.</p>
                <p className="text-sm">Please analyze a repository to view the dashboard.</p>
            </div>
        );
    }



    const { repoMeta, ai } = analysis;

    return (

        <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
                <div>
                    <h1 className="text-3xl md:text-3xl font-heading font-bold tracking-tight text-slate-900">
                        Repository Overview
                    </h1>
                    <p className="text-slate-500 mt-2">
                        AI-generated insights for your codebase
                    </p>
                </div>

                <button
                    onClick={() => {
                        const confirmed = window.confirm(
                            "This will clear the current analysis and history. Are you sure?"
                        );

                        if (!confirmed) return;

                        localStorage.removeItem("last_analysis");
                        localStorage.removeItem("analysis_history");
                        window.location.reload();
                    }}
                    className="px-5 py-2.5 rounded-lg text-sm font-medium border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm"
                >
                    Reset Analysis
                </button>
            </div>


            {/* Stats Grid */}
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
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Repository Summary */}
                    <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-heading font-semibold mb-4 text-slate-900">Repository Summary</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">{ai.summary}</p>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-100">
                                <span className="block text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Repo Type</span>
                                <span className="font-medium text-slate-700">{ai.repoType}</span>
                            </div>
                            <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-100">
                                <span className="block text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Entry Point</span>
                                <span className="font-medium font-mono text-blue-600 text-xs break-all">{ai.entryPoint}</span>
                            </div>
                            <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-100">
                                <span className="block text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Stateless</span>
                                <span className="font-medium text-slate-700">{ai.stateless ? "Yes" : "No"}</span>
                            </div>
                            <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-100">
                                <span className="block text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Persistence</span>
                                <span className="font-medium text-slate-700">{ai.persistence}</span>
                            </div>
                        </div>
                    </section>


                    {/* System Components */}
                    <section>
                        <h2 className="text-xl font-heading font-semibold mb-4 text-slate-900 px-1">System Components</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ai.components.map((c: any, i: number) => (
                                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors shadow-sm group">
                                    <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{c.name}</h3>
                                    <p className="text-xs font-mono text-blue-500 mb-2 bg-blue-50 inline-block px-2 py-0.5 rounded-full">{c.type}</p>
                                    <p className="text-slate-500 text-sm leading-snug">{c.responsibility}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Request / Data Flow */}
                    <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-heading font-semibold mb-4 text-slate-900">Request / Data Flow</h2>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600 marker:text-blue-500 marker:font-bold">
                            {ai.flow.map((step: string, i: number) => (
                                <li key={i} className="pl-2 relative">
                                    <span className="ml-2">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-8">

                    {/* Tech Stack */}
                    <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                        <h2 className="text-lg font-heading font-semibold mb-4 text-slate-900">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {ai.techStack.map((tech: string) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>


                    {/* Folder Responsibilities */}
                    <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                        <h2 className="text-lg font-heading font-semibold mb-4 text-slate-900">Folder Structure</h2>
                        <div className="space-y-4">
                            {Object.entries(ai.folders).map(([folder, desc]) => (
                                <div key={folder} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                                    <p className="font-mono text-sm font-medium text-blue-600 mb-1">{folder}</p>
                                    <p className="text-slate-500 text-xs leading-relaxed">{desc as string}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Onboarding */}
                    <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                        <h2 className="text-lg font-heading font-semibold mb-4 text-slate-900">Onboarding</h2>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 marker:text-blue-500">
                            {ai.onboardingSteps.map((step: string, i: number) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                    </section>

                    {/* Missing Context */}
                    {ai.missingContext && ai.missingContext.length > 0 && (
                        <section className="bg-red-50 rounded-2xl p-6 border border-red-100 shadow-sm">
                            <h2 className="text-lg font-heading font-semibold mb-4 text-red-900">Missing Context</h2>
                            <ul className="list-disc list-inside space-y-2 text-sm text-red-700">
                                {ai.missingContext.map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>

        </div>

    );
};

export default DashboardPage;
