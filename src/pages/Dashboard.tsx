import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Plus, 
  History, 
  CreditCard, 
  Settings, 
  LogOut, 
  Sparkles, 
  Image as ImageIcon,
  Download,
  RotateCcw,
  Search,
  ChevronDown,
  LayoutDashboard,
  LucideIcon,
  Menu
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function SidebarItem({ icon: Icon, label, active = false, onClick }: SidebarItemProps) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
}

type DashboardTab = "dashboard" | "history" | "pricing" | "settings";

const historyImages = [
  { src: "https://picsum.photos/seed/hist1/800/800", prompt: "Cyberpunk city in neon rain", date: "2 hours ago" },
  { src: "https://picsum.photos/seed/hist2/800/800", prompt: "Astronaut floating in deep space", date: "5 hours ago" },
  { src: "https://picsum.photos/seed/hist3/800/800", prompt: "Magical forest with glowing mushrooms", date: "1 day ago" },
  { src: "https://picsum.photos/seed/hist4/800/800", prompt: "Vintage steampunk robot cafe", date: "2 days ago" },
];

const pricingPlans = [
  { name: "Starter", price: "$0", credits: "5 / day", features: ["Standard Quality", "Community Support"] },
  { name: "Pro", price: "$19", credits: "Unlimited", features: ["4K Resolution", "Priority Queue", "Commercial Rights"], active: true },
  { name: "Ultimate", price: "$49", credits: "Unlimited", features: ["Custom Models", "API Access", "Early Access"] },
];

const styles = [
  "Photorealistic",
  "Digital Art",
  "Anime",
  "Cyberpunk",
  "Oil Painting",
  "Sketch",
  "3D Render",
  "Minimalist"
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("dashboard");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  // Settings state
  const [userName, setUserName] = useState("Farhan Afridi");
  const [userBio, setUserBio] = useState("Digital artist & dreamer. Creating the future one pixel at a time.");

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    
    // Simulate generation
    setTimeout(() => {
      const newImages = [
        `https://picsum.photos/seed/${Math.random()}/800/800`,
        ...generatedImages
      ];
      setGeneratedImages(newImages);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-[#020203] text-white">
      <div className="glow-mesh" />

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 h-full border-r border-white/5 bg-black/40 backdrop-blur-xl p-6 relative z-30">
        <div className="flex items-center gap-3 mb-10 pl-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-lg shadow-primary/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-white">Lumina</span>
        </div>

        <nav className="flex-grow space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === "dashboard"} onClick={() => setActiveTab("dashboard")} />
          <SidebarItem icon={History} label="History" active={activeTab === "history"} onClick={() => setActiveTab("history")} />
          <SidebarItem icon={CreditCard} label="Pricing" active={activeTab === "pricing"} onClick={() => setActiveTab("pricing")} />
          <SidebarItem icon={Settings} label="Settings" active={activeTab === "settings"} onClick={() => setActiveTab("settings")} />
        </nav>

        <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
              <img src="https://picsum.photos/seed/user/100/100" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Farhan Afridi</span>
              <span className="text-xs text-white/40">farhan.a@gmail.com</span>
            </div>
          </div>
          <Link to="/">
            <SidebarItem icon={LogOut} label="Log out" />
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-full relative z-20 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-white/5 bg-black/20 flex items-center justify-between px-4 lg:px-8 backdrop-blur-md">
          <div className="flex items-center gap-3 lg:gap-4">
             <div className="lg:hidden">
               <Sheet>
                 <SheetTrigger render={<Button variant="ghost" size="icon" className="text-white hover:bg-white/5" />}>
                   <Menu className="w-5 h-5" />
                 </SheetTrigger>
                 <SheetContent side="left" className="bg-black/95 border-white/10 text-white w-72 p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-display font-bold text-xl tracking-tight text-white">Lumina</span>
                    </div>
                    <nav className="flex-grow space-y-2">
                      <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === "dashboard"} onClick={() => setActiveTab("dashboard")} />
                      <SidebarItem icon={History} label="History" active={activeTab === "history"} onClick={() => setActiveTab("history")} />
                      <SidebarItem icon={CreditCard} label="Pricing" active={activeTab === "pricing"} onClick={() => setActiveTab("pricing")} />
                      <SidebarItem icon={Settings} label="Settings" active={activeTab === "settings"} onClick={() => setActiveTab("settings")} />
                    </nav>
                    <div className="mt-auto pt-6 border-t border-white/5">
                      <Link to="/">
                        <SidebarItem icon={LogOut} label="Log out" />
                      </Link>
                    </div>
                 </SheetContent>
               </Sheet>
             </div>
             <LayoutDashboard className="hidden sm:block w-4 h-4 text-white/40" />
             <span className="hidden sm:block text-sm text-white/40">/</span>
             <span className="text-sm text-white font-medium tracking-wide capitalize">{activeTab === 'dashboard' ? 'Generate New Art' : activeTab}</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary px-3 py-1 font-bold">
              50 Credits Left
            </Badge>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/5">
              <Search className="w-5 h-5 text-white/40" />
            </Button>
          </div>
        </header>

        {/* Dynamic Content Switching */}
        <ScrollArea className="flex-grow p-4 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {activeTab === "dashboard" && (
              <div className="space-y-8">
                <AnimatePresence>
                  {isGenerating && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-3xl p-12 text-center"
                    >
                      <div className="relative w-24 h-24 mx-auto mb-6">
                          <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                          <motion.div 
                            className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary animate-pulse" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Imagining your masterpiece...</h2>
                      <p className="text-white/40 font-light">Our neural networks are weaving your words into art.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {generatedImages.length === 0 && !isGenerating ? (
                  <div className="py-20 text-center space-y-4">
                      <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mx-auto text-white/20">
                        <ImageIcon className="w-10 h-10" />
                      </div>
                      <h2 className="text-xl font-medium text-white/60 tracking-tight">Your creative space is empty</h2>
                      <p className="text-white/40 font-light max-w-sm mx-auto">Enter a prompt below to generate your first AI-powered artwork.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {generatedImages.map((src, i) => (
                        <motion.div
                          key={src}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="group relative aspect-square rounded-3xl overflow-hidden glass-card"
                        >
                          <img 
                            src={src} 
                            alt={`Generated ${i}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                            <div className="flex items-center gap-2">
                              <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-xl flex-grow font-bold">
                                <Download className="w-4 h-4 mr-2" /> Download
                              </Button>
                              <Button size="icon" variant="outline" className="rounded-xl border-white/10 bg-white/5 backdrop-blur-md">
                                <RotateCcw className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "history" && (
              <div className="space-y-8">
                <div className="flex items-end justify-between">
                   <div>
                      <h2 className="text-3xl font-bold mb-2">Past Creations</h2>
                      <p className="text-white/40">Review and download your previous AI generations.</p>
                   </div>
                   <Button variant="outline" className="border-white/10 text-white/60 hover:text-white">Clear History</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {historyImages.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative rounded-2xl overflow-hidden glass-card aspect-square border border-white/5"
                    >
                      <img src={item.src} alt={item.prompt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs font-bold text-white mb-1 line-clamp-2">{item.prompt}</p>
                        <p className="text-[10px] text-white/50">{item.date}</p>
                        <div className="mt-3 flex gap-2">
                          <Button size="xs" variant="outline" className="flex-grow border-white/10 bg-white/5 text-[10px]">Retry</Button>
                          <Button size="icon-xs" variant="outline" className="shrink-0 border-white/10 bg-white/5"><Download className="w-3 h-3" /></Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "pricing" && (
              <div className="max-w-5xl mx-auto space-y-12 py-6">
                <div className="text-center space-y-4">
                  <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">Flexible Billing</Badge>
                  <h2 className="text-4xl font-bold">Unleash Your Full Creative Potential</h2>
                  <p className="text-white/40 max-w-xl mx-auto leading-relaxed">Choose a plan that scales with your imagination. Upgrade anytime to get more credits and features.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pricingPlans.map((plan, i) => (
                    <Card key={i} className={`p-8 glass-card border border-white/5 flex flex-col ${plan.active ? 'ring-2 ring-primary/40 bg-white/[0.04]' : ''}`}>
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-white/50 uppercase tracking-widest mb-1">{plan.name}</h3>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-white/20 text-sm">/month</span>
                        </div>
                      </div>
                      <div className="space-y-4 mb-8 flex-grow">
                         <div className="flex items-center gap-3">
                           <Sparkles className="w-4 h-4 text-primary" />
                           <span className="text-sm font-bold">{plan.credits} Credits</span>
                         </div>
                         {plan.features.map((f, j) => (
                           <div key={j} className="flex items-center gap-3 text-white/40">
                             <Plus className="w-4 h-4" />
                             <span className="text-sm">{f}</span>
                           </div>
                         ))}
                      </div>
                      <Button className={`w-full font-bold rounded-xl h-11 ${plan.active ? 'bg-primary hover:bg-primary/90' : 'bg-white/5 hover:bg-white/10 border border-white/5'}`}>
                        {plan.active ? "Current Plan" : "Upgrade Plan"}
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="max-w-3xl mx-auto space-y-10 py-6">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Account Settings</h2>
                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-8">
                     <div className="flex items-center gap-6 pb-8 border-b border-white/5">
                        <div className="relative group cursor-pointer">
                           <img src="https://picsum.photos/seed/user/200/200" className="w-24 h-24 rounded-full object-cover group-hover:opacity-50 transition-all border-4 border-primary/20" alt="Profile" />
                           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                              <Plus className="w-8 h-8" />
                           </div>
                        </div>
                        <div className="space-y-1">
                           <h3 className="text-xl font-bold">Profile Picture</h3>
                           <p className="text-sm text-white/40">PNG, JPG up to 5MB. Recommended scale 1:1.</p>
                           <div className="pt-2 flex gap-2">
                              <Button size="sm" variant="outline" className="border-white/10 bg-white/5">Change</Button>
                              <Button size="sm" variant="ghost" className="text-destructive hover:bg-destructive/10">Remove</Button>
                           </div>
                        </div>
                     </div>
                     
                     <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Full Name</label>
                              <Input value={userName} onChange={(e) => setUserName(e.target.value)} className="bg-white/5 border-white/10 rounded-xl" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Email Address</label>
                              <Input value="farhan.a@gmail.com" disabled className="bg-white/[0.02] border-white/5 rounded-xl opacity-60" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Bio</label>
                           <textarea 
                             value={userBio} 
                             onChange={(e) => setUserBio(e.target.value)}
                             className="w-full min-h-[100px] bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all"
                           />
                        </div>
                        <div className="pt-4 flex justify-end">
                           <Button className="bg-primary hover:bg-primary/90 px-8 font-bold rounded-xl shadow-lg shadow-primary/20">Save Changes</Button>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="space-y-6">
                   <h2 className="text-2xl font-bold text-destructive/80">Danger Zone</h2>
                   <div className="bg-destructive/5 border border-destructive/10 rounded-3xl p-8 flex items-center justify-between">
                      <div>
                         <h3 className="font-bold text-destructive">Delete Account</h3>
                         <p className="text-sm text-destructive/60">Permanently delete your profile and all generated art. This action cannot be undone.</p>
                      </div>
                      <Button variant="destructive" className="rounded-xl px-6 font-bold shadow-lg shadow-destructive/20">Delete Forever</Button>
                   </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Bottom Input Area - Only show on Dashboard tab */}
        {activeTab === "dashboard" && (
          <div className="p-4 lg:p-8 bg-black/40 border-t border-white/5 backdrop-blur-2xl">
            <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <div className="relative group">
                <Input 
                  placeholder="Describe exactly what you see in your mind..."
                  className="h-20 md:h-24 pl-6 pr-32 md:pr-44 bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 text-base md:text-lg rounded-[2rem] transition-all"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
                <div className="absolute right-3 top-3 bottom-3 flex gap-2">
                    <div className="hidden md:block">
                      <Select defaultValue="Photorealistic">
                        <SelectTrigger className="w-40 h-full bg-white/5 border-white/10 rounded-2xl focus:ring-0 text-white/70">
                          <SelectValue placeholder="Style" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/95 border-white/10 text-white">
                          {styles.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      onClick={handleGenerate}
                      disabled={isGenerating || !prompt.trim()}
                      className="h-full px-5 md:px-8 rounded-2xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 border-none font-bold shadow-lg shadow-primary/20 disabled:opacity-50"
                    >
                      <span className="hidden sm:inline">{isGenerating ? "Processing..." : "Generate"}</span>
                      <Sparkles className="sm:ml-2 w-5 h-5" />
                    </Button>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs text-white/30 uppercase tracking-widest font-bold">
                <span>V4.0 Models</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>Ultra HD Resolution</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>DALL-E 3 Support</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>GPU Acceleration On</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
