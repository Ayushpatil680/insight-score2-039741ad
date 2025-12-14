import { useState } from "react";
import { Github, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  onAnalyze: (url: string) => void;
  isLoading: boolean;
}

export const HeroSection = ({ onAnalyze, isLoading }: HeroSectionProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onAnalyze(url.trim());
    }
  };

  const features = [
    { icon: Zap, text: "Instant Analysis" },
    { icon: Shield, text: "Code Quality Score" },
    { icon: TrendingUp, text: "Personalized Roadmap" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-8">
          <Github className="h-4 w-4" />
          AI-Powered Repository Analysis
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6">
          <span className="text-foreground">Evaluate Your</span>
          <br />
          <span className="text-gradient">GitHub Repository</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          Get a comprehensive score, detailed summary, and personalized roadmap 
          to improve your codebase. Built for developers who want to level up.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl mb-10">
          <div className="flex gap-2 p-2 rounded-2xl bg-card border border-border shadow-lg">
            <div className="flex-1 relative">
              <Github className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="url"
                placeholder="https://github.com/username/repository"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pl-12 h-12 bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              disabled={!url.trim() || isLoading}
              className="h-12 px-6 bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all"
            >
              {isLoading ? (
                "Analyzing..."
              ) : (
                <>
                  Analyze <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon className="h-4 w-4 text-primary" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
