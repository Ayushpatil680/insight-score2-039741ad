import { GitBranch, Code2, FileSearch, Sparkles } from "lucide-react";

const steps = [
  { icon: GitBranch, text: "Fetching repository data..." },
  { icon: Code2, text: "Analyzing code quality..." },
  { icon: FileSearch, text: "Evaluating structure..." },
  { icon: Sparkles, text: "Generating insights..." },
];

export const LoadingAnalysis = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Animated Logo */}
      <div className="relative mb-8">
        <div className="h-20 w-20 rounded-2xl bg-gradient-primary animate-pulse-slow glow" />
        <div className="absolute inset-0 flex items-center justify-center">
          <GitBranch className="h-10 w-10 text-primary-foreground" />
        </div>
      </div>

      {/* Loading Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-3 opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 400}ms` }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
              <step.icon className="h-4 w-4 text-primary" />
            </div>
            <span className="text-muted-foreground">{step.text}</span>
          </div>
        ))}
      </div>

      {/* Shimmer bar */}
      <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-1/2 bg-gradient-primary animate-shimmer" />
      </div>
    </div>
  );
};
