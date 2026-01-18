import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full
      bg-[#F8FAFC]/95
      backdrop-blur-md
      border-b border-[#94A3B8]
      ">



            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
                {/* Logo + Name */}
                <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                    <Logo className="h-9 w-9 text-primary" />
                    <span className="text-xl font-heading font-bold tracking-tight text-foreground">
                        VisionRepo
                        <span className="text-primary">.Engine</span>
                    </span>
                </Link>

                {/* Desktop Nav Actions */}
                <div className="flex items-center gap-6">
                    <Link to="/analyze">
                        <Button className="font-heading font-semibold tracking-wide bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md hover:scale-[1.01] transition-all border-0 ring-0 rounded-lg">
                            Analyze Repo
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
