import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Github, Mail, Lock, User, ArrowLeft } from "lucide-react";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">(
    searchParams.get("mode") === "signup" ? "signup" : "login"
  );

  useEffect(() => {
    const currentMode = searchParams.get("mode") === "signup" ? "signup" : "login";
    setMode(currentMode);
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setMode(value as "login" | "signup");
    navigate(`/auth?mode=${value}`, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="glow-mesh" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="mb-12 flex flex-col items-center">
          <Link to="/" className="flex items-center gap-2 mb-8 group">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white group-hover:-translate-x-1 transition-all" />
            </div>
            <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors">Back to home</span>
          </Link>
          <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            <Sparkles className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-4xl font-bold font-display tracking-tight">Welcome to Lumina</h1>
          <p className="text-white/40 mt-3 font-light">Join the future of AI creativity</p>
        </div>

        <Card className="glass-card shadow-2xl border-white/10 overflow-hidden">
          <CardHeader className="pb-4">
            <Tabs value={mode} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/5 p-1 rounded-xl">
                <TabsTrigger value="login" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black transition-all duration-300">Login</TabsTrigger>
                <TabsTrigger value="signup" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black transition-all duration-300">Sign Up</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, x: mode === "login" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: mode === "login" ? 20 : -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-12 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="h-12 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#020203] px-4 text-white/30 font-medium tracking-widest">Or continue with</span>
                  </div>
                </div>

                {mode === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/60 font-medium ml-1">Full Name</Label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 group-focus-within:text-primary transition-colors" />
                      <Input id="name" placeholder="John Doe" className="h-12 pl-12 bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl" />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/60 font-medium ml-1">Email Address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 group-focus-within:text-primary transition-colors" />
                    <Input id="email" type="email" placeholder="name@example.com" className="h-12 pl-12 bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between ml-1">
                    <Label htmlFor="password" className="text-white/60 font-medium">Password</Label>
                    {mode === "login" && (
                      <a href="#" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 group-focus-within:text-primary transition-colors" />
                    <Input id="password" type="password" placeholder="••••••••" className="h-12 pl-12 bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-6 pt-4 pb-8">
                <Button className="w-full bg-white text-black hover:bg-white/90 font-bold h-12 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  {mode === "login" ? "Sign In" : "Create Account"}
                </Button>
                <p className="text-xs text-center text-white/30 leading-relaxed px-4">
                  By continuing, you agree to our{" "}
                  <a href="#" className="text-white/60 hover:text-white underline underline-offset-4 decoration-white/20">Terms of Service</a> and{" "}
                  <a href="#" className="text-white/60 hover:text-white underline underline-offset-4 decoration-white/20">Privacy Policy</a>.
                </p>
              </CardFooter>
            </motion.div>
          </AnimatePresence>
        </Card>
      </motion.div>
    </div>
  );
}
