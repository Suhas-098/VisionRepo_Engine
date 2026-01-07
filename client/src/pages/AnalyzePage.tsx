import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Sparkles } from "lucide-react";
// import { useNavigate } from "react-router-dom";

export default function Analyze() {
    const [repo, setRepo] = useState("");
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    const handleAnalyze = () => {
        if (!repo) return;
        setLoading(true);

        // mock AI delay
        setTimeout(() => {
            // navigate("/LandingPage");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
            <Card className="w-full max-w-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Github size={20} />
                        Analyze GitHub Repository
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <Input
                        placeholder="https://github.com/username/repo"
                        value={repo}
                        onChange={(e) => setRepo(e.target.value)}
                    />

                    <Button
                        className="w-full flex items-center gap-2 font-heading tracking-wide"
                        onClick={handleAnalyze}
                        disabled={loading}
                    >
                        {loading ? (
                            "Analyzing..."
                        ) : (
                            <>
                                <Sparkles size={16} />
                                Run AI Analysis
                            </>
                        )}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                        AI will inspect structure, stack, and code quality
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
