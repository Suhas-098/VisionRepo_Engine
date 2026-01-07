import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export default function Navbar() {
    return (
        // <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        //     <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
        <nav className="bg-gradient-to-r from-indigo-600 via-purple-400 to-purple-600 text-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
                {/* Logo + Name */}
                <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                    <img
                        src={logo}
                        alt="Vision Repo Engine Logo"
                        className="h-16 w-16 object-contain"
                    />
                    <span className="text-xl font-heading font-bold tracking-tight">
                        Vision Repo <span className="text-primary">Engine</span>
                    </span>
                </Link>

                {/* Desktop Nav Actions */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link to="/features" className="hover:text-primary transition-colors">Features</Link>
                        <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                    </div>

                    <Link to="/analyze">
                        <Button className="font-heading font-semibold tracking-wide bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all border-0 ring-0">
                            Analyze Repo
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
