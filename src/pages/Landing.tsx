import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Zap, 
  Download, 
  ArrowRight, 
  CheckCircle2,
  Palette,
  Wind,
  MousePointer2,
  Cpu,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Lightning Fast",
    description: "Generate high-resolution images in seconds with our optimized AI clusters."
  },
  {
    icon: <Palette className="w-6 h-6 text-purple-400" />,
    title: "Multiple Styles",
    description: "From photorealistic to anime, digital art to oil painting. Your imagination is the limit."
  },
  {
    icon: <Wind className="w-6 h-6 text-blue-400" />,
    title: "Prompt Engineering",
    description: "Our AI helps refine your prompts to get exactly the result you're looking for."
  },
  {
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    title: "Advanced Models",
    description: "Powered by the latest Flux and Stable Diffusion architectures for unmatched quality."
  },
  {
    icon: <MousePointer2 className="w-6 h-6 text-pink-400" />,
    title: "Intuitive UI",
    description: "A clean, minimal interface that stays out of your way while you create."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    title: "Commercial Rights",
    description: "Everything you generate is yours. Use it for personal or commercial projects."
  }
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring the possibilities.",
    features: ["5 generations per day", "Standard resolution", "Community support", "Public gallery"],
    cta: "Start for free",
    popular: false
  },
  {
    name: "Pro",
    price: "$19",
    description: "For creators who need more power.",
    features: ["Unlimited generations", "4K resolution", "Priority queue", "Private mode", "Commercial license"],
    cta: "Get Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$49",
    description: "Custom solutions for teams.",
    features: ["Custom AI models", "API access", "Dedicated support", "Team collaboration", "SSO & Security"],
    cta: "Contact Sales",
    popular: false
  }
];

const demoImages = [
  "https://picsum.photos/seed/ai-art-1/800/800",
  "https://picsum.photos/seed/ai-art-2/800/800",
  "https://picsum.photos/seed/ai-art-3/800/800",
  "https://picsum.photos/seed/ai-art-4/800/800",
  "https://picsum.photos/seed/ai-art-5/800/800",
  "https://picsum.photos/seed/ai-art-6/800/800",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Landing() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative">
      <div className="glow-mesh" />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-8 py-2 px-6 rounded-full bg-white/5 border-white/10 text-purple-400 font-medium tracking-wide animate-pulse">
              ✨ Experience the New Standard of AI Art
            </Badge>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.9] text-white">
              <span className="inline-block">Create</span>{" "}
              <span className="inline-block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">Impossible</span>{" "}
              <span className="inline-block">Visuals</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Lumina AI is the world's most advanced text-to-image platform, 
              designed for creators who refuse to compromise on quality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/auth?mode=signup">
                <Button size="lg" className="h-16 px-10 text-xl bg-white text-black hover:bg-white/90 rounded-full font-bold group transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  Start Creating
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/#showcase">
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-white/10 bg-white/5 hover:bg-white/10 rounded-full font-medium backdrop-blur-md">
                  View Gallery
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      {/* Showcase Grid */}
      <section id="showcase" className="py-32 relative z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Curated Masterpieces</h2>
              <p className="text-xl text-white/60 font-light">Explore what's possible when human creativity meets artificial intelligence.</p>
            </div>
            <Button variant="link" className="text-purple-400 text-lg group">
              Explore all <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {demoImages.map((src, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden glass-card"
              >
                <img 
                  src={src} 
                  alt={`AI Masterpiece ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Badge className="mb-4 bg-white/10 backdrop-blur-md border-white/10">Realistic Art</Badge>
                    <p className="text-lg text-white font-medium mb-6 line-clamp-2 italic">"A cinematic shot of a cyberpunk samurai standing in the rain, neon reflections..."</p>
                    <div className="flex items-center gap-3">
                      <Button className="rounded-full bg-white text-black hover:bg-white/90 px-6">
                        Remix
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full border-white/20 bg-white/10 backdrop-blur-md">
                        <Download className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features - Bento Grid Style */}
      <section id="features" className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Built for the Next Generation</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">Professional grade features, simplified for everyone.</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="p-6 sm:p-10 glass-card glass-card-hover h-full group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white"> {feature.title}</h3>
                  <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Creative Freedom for All</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">Scale your creativity with our flexible plans.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <Badge className="bg-primary text-white border-none px-6 py-1.5 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                <Card className={`p-6 sm:p-10 h-full flex flex-col glass-card ${plan.popular ? 'ring-2 ring-primary/50 bg-white/[0.05]' : ''}`}>
                  <div className="mb-8 sm:mb-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white uppercase tracking-tight">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
                      <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/30 text-base sm:text-lg">/mo</span>
                    </div>
                    <p className="text-sm sm:text-base text-white/70 font-light">{plan.description}</p>
                  </div>
                  <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-12 flex-grow">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-white/90 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full h-14 text-lg font-bold rounded-2xl transition-all duration-300 ${plan.popular ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}>
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center glass-card border-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/10 -z-10" />
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight text-white">Ready to start creating?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">Join over 100,000 creators who are already using Lumina AI to bring their ideas to life.</p>
            <Link to="/auth?mode=signup">
              <Button size="lg" className="h-16 px-12 text-xl bg-white text-black hover:bg-white/90 rounded-full font-bold shadow-2xl">
                Join Lumina Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="font-display font-bold text-2xl tracking-tight text-white">Lumina AI</span>
              </div>
              <p className="text-white/70 max-w-xs font-light leading-relaxed">
                Empowering the next generation of visual storytellers with cutting-edge artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white">Product</h4>
              <ul className="space-y-4 text-white/60 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Showcase</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-4 text-white/60 font-light">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <p className="text-sm text-white/40 font-light">© 2024 Lumina AI. Crafted with passion for creators.</p>
            <div className="flex items-center gap-8 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
