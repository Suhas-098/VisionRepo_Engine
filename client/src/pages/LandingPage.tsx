import { Github, Sparkles, BarChart3, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-700">

            {/* Background Gradients */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] opacity-60 mix-blend-multiply animate-pulse" />
                <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-50" />
                <div className="absolute bottom-0 left-[-100px] w-[600px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-40" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-32 px-6">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8 animate-fade-in-up">
                        <Sparkles size={14} className="fill-indigo-600" />
                        <span>Now with AI-Powered Repo Analysis</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.15] mb-8 text-slate-900 drop-shadow-sm">
                        Unlock the Potential of Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600"> GitHub Codebase</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                        Vision Repo Engine gives you instant, AI-driven insights into your repository's architecture,
                        tech stack, and code quality. Build better software, faster.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="h-12 px-8 text-base font-heading font-semibold tracking-wide bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-all rounded-full shadow-lg shadow-indigo-500/25 ring-0 border-0">
                            Get Started Free
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="h-12 px-8 text-base font-heading font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 border-slate-200 rounded-full transition-all">
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                        </Button>
                    </div>

                    {/* Abstract UI element */}
                    <div className="mt-20 relative mx-auto max-w-4xl p-2 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl ring-1 ring-slate-900/5">
                        <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-100 aspect-video flex items-center justify-center relative group">
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                            <div className="relative z-10 text-center space-y-4 p-8">
                                <Code2 className="mx-auto h-16 w-16 text-indigo-200" />
                                <p className="text-slate-400 font-medium">Interactive App Demo Preview</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features layout */}
            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                            Everything you need to <span className="text-purple-600">understand code</span>
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Stop guessing. Let our AI engine analyze your project structure and dependencies in seconds.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Github className="h-8 w-8 text-white" />}
                            title="Seamless Integration"
                            desc="Simply paste your GitHub repository URL or upload your files directly. No complex setup required."
                            color="bg-indigo-500"
                        />
                        <FeatureCard
                            icon={<Sparkles className="h-8 w-8 text-white" />}
                            title="AI-Powered Analysis"
                            desc="Our advanced LLMs scan your codebase to understand patterns, best practices, and potential tech debt."
                            color="bg-purple-500"
                        />
                        <FeatureCard
                            icon={<BarChart3 className="h-8 w-8 text-white" />}
                            title="Actionable Insights"
                            desc="Get a comprehensive report on your stack, architecture, and suggestions for improvement."
                            color="bg-blue-500"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({
    icon,
    title,
    desc,
    color,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    color: string;
}) {
    return (
        <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
            <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
