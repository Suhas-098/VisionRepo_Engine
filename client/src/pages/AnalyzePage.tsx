import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Sparkles, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { analyzeRepo } from "@/api/analyze";

export default function Analyze() {
    const [repo, setRepo] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleAnalyze = async () => {
        if (!repo.trim()) {
            alert("Please enter a GitHub repository URL");
            return;
        }

        try {
            setLoading(true);

            const result = await analyzeRepo(repo);

            // save last analysis
            localStorage.setItem(
                "last_analysis",
                JSON.stringify(result.data)
            );

            // save analysis history
            const history = JSON.parse(
                localStorage.getItem("analysis_history") || "[]"
            );

            history.unshift({
                id: Date.now(),
                repo: `${result.data.repoMeta.owner}/${result.data.repoMeta.repo}`,
                timestamp: new Date().toISOString(),
                analysis: result.data
            });

            localStorage.setItem(
                "analysis_history",
                JSON.stringify(history.slice(0, 10))
            );

            navigate("/dashboard", {
                state: {
                    analysis: result.data
                }
            });

        } catch (err: any) {
            alert(err.message || "Analysis failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <Card className="w-full max-w-xl shadow-xl shadow-blue-900/5 border border-slate-100 bg-white">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-900 font-heading text-xl">
                        <Github size={20} className="text-primary" />
                        Analyze GitHub Repository
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                    <Input
                        placeholder="https://github.com/username/repo"
                        value={repo}
                        onChange={(e) => setRepo(e.target.value)}
                        className="bg-white border-slate-200 focus:ring-primary/20 transition-all font-mono text-sm"
                    />

                    <Button
                        className="w-full flex items-center justify-center gap-2 font-heading tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.01] transition-all shadow-lg shadow-blue-500/20 rounded-lg h-11"
                        onClick={handleAnalyze}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Analyzing repository...
                            </>
                        ) : (
                            <>
                                <Sparkles size={16} className="fill-blue-200" />
                                Run AI Analysis
                            </>
                        )}
                    </Button>


                    <p className="text-xs text-slate-400 text-center">
                        AI will inspect structure, stack, and code quality
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
