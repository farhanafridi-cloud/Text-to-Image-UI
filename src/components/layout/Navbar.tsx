import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Lumina AI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Features</Link>
          <Link to="/#pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Pricing</Link>
          <Link to="/#showcase" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Showcase</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/auth">
            <Button variant="ghost" className="text-sm font-medium">Log in</Button>
          </Link>
          <Link to="/auth?mode=signup">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-none shadow-lg shadow-purple-500/20">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
