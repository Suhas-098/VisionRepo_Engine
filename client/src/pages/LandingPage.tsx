import { Github, Sparkles, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const hasAnalysis = !!localStorage.getItem("last_analysis");

    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">

            {/* Background Soft Gradients - Subtle Blue/Slate */}
            <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[10%] w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[5%] w-[800px] h-[800px] bg-sky-200/20 rounded-full blur-[120px]" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 md:pt-40 md:pb-32">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-foreground/70 text-sm font-medium mb-10 animate-fade-in-up">
                        <Sparkles size={14} className="fill-blue-400 text-blue-500" />
                        <span>Now with AI-Powered Repo Analysis</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-[1.1] mb-8 text-slate-900">
                        Unlock the Potential of Your <br className="hidden md:block" />
                        <span className="text-primary">GitHub Codebase</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed mb-12">
                        Vision Repo Engine gives you instant, AI-driven insights into your repository's architecture,
                        tech stack, and code quality. Build better software, faster.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button onClick={() => navigate("/analyze")} className="h-12 px-8 text-base font-heading font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-xl shadow-lg shadow-blue-500/10 ring-0 border-0 hover:scale-105">
                            Get Started Free
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button onClick={() => navigate("/dashboard")} variant="outline" className="h-12 px-8 text-base font-heading font-medium text-slate-600 hover:text-primary hover:bg-white hover:border-primary/30 border-slate-200 bg-white/50 backdrop-blur-sm rounded-xl transition-all">
                            <Github className="mr-2 h-4 w-4" />
                            View Dashboard
                        </Button>
                    </div>

                    {/* Abstract UI element - refined for soft blue palette */}
                    {!hasAnalysis && (
                        <div className="mt-24 relative mx-auto max-w-4xl p-2 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 shadow-2xl shadow-blue-900/5 ring-1 ring-slate-200/50">
                            <div className="rounded-2xl overflow-hidden bg-slate-50/50 border border-slate-100 aspect-video flex items-center justify-center relative group">
                                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-40"></div>
                                <div className="relative z-10 text-center space-y-4 p-8">
                                    <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-slate-100">
                                        <Code2 className="h-10 w-10 text-primary/80" />
                                    </div>
                                    <p className="text-slate-500 font-medium max-w-md mx-auto">
                                        Paste a GitHub repository to see AI-powered architecture analysis
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 bg-white border-y border-slate-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                            Everything you need to understand your code
                        </h2>
                        <p className="text-slate-500 text-lg">
                            Stop guessing. Start knowing. VisionRepo Engine gives you the clarity you need to scale your codebase.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Instant Analysis",
                                desc: "Get deep insights into your repository's architecture in seconds, not hours.",
                                icon: <Sparkles className="h-6 w-6 text-white" />,
                                color: "bg-blue-500"
                            },
                            {
                                title: "Tech Stack Detection",
                                desc: "Automatically identify languages, frameworks, and libraries used in your project.",
                                icon: <Code2 className="h-6 w-6 text-white" />,
                                color: "bg-indigo-500"
                            },
                            {
                                title: "Quality Metrics",
                                desc: "Understand code complexity, maintainability, and potential technical debt.",
                                icon: <Github className="h-6 w-6 text-white" />,
                                color: "bg-sky-500"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all group">
                                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">Simple Workflow</div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-16">
                        From URL to Insights in 3 Steps
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent z-[-1]" />

                        {[
                            { step: "01", title: "Paste URL", desc: "Enter any public GitHub repository URL." },
                            { step: "02", title: "AI Scanning", desc: "Our engine analyzes structure and dependencies." },
                            { step: "03", title: "View Results", desc: "Get a comprehensive dashboard of insights." }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10">
                                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-sm mb-6">
                                    <span className="text-3xl font-heading font-bold text-blue-500">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-slate-200 bg-slate-50 text-center">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-80">
                    <div className="h-6 w-6 bg-blue-600 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-xs">V</span>
                    </div>
                    <span className="font-heading font-bold text-slate-700">VisionRepo Engine</span>
                </div>
                <p className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} VisionRepo Engine. Built for developers.
                </p>
            </footer>
        </div>
    );
}
