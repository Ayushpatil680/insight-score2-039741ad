import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { LoadingAnalysis } from "@/components/LoadingAnalysis";
import { AnalysisResults } from "@/components/AnalysisResults";
import { Github, Code2 } from "lucide-react";

// Mock data for demonstration
const mockAnalysisData = {
  overallScore: 73,
  summary:
    "This repository demonstrates solid foundational practices with clean code structure and consistent commit history. However, there's significant room for improvement in documentation and test coverage. The project shows good use of modern patterns but could benefit from better error handling and performance optimizations. Overall, it's a well-maintained codebase with clear growth potential.",
  dimensions: {
    codeQuality: 78,
    projectStructure: 82,
    documentation: 45,
    testCoverage: 35,
    commitHistory: 88,
    bestPractices: 72,
  },
  roadmap: [
    {
      title: "Add Comprehensive README",
      description:
        "Include project overview, installation instructions, usage examples, and contribution guidelines to improve project accessibility.",
      priority: "high" as const,
    },
    {
      title: "Implement Unit Tests",
      description:
        "Add unit tests for core functionality using a testing framework. Aim for at least 60% code coverage.",
      priority: "high" as const,
    },
    {
      title: "Add Code Comments",
      description:
        "Document complex functions and business logic with inline comments and JSDoc annotations.",
      priority: "medium" as const,
    },
    {
      title: "Set Up CI/CD Pipeline",
      description:
        "Configure GitHub Actions for automated testing, linting, and deployment workflows.",
      priority: "medium" as const,
    },
    {
      title: "Optimize Performance",
      description:
        "Review and optimize bundle size, implement lazy loading, and add caching strategies where applicable.",
      priority: "low" as const,
    },
  ],
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState<typeof mockAnalysisData | null>(null);
  const [analyzedUrl, setAnalyzedUrl] = useState("");

  const handleAnalyze = async (url: string) => {
    setIsLoading(true);
    setAnalyzedUrl(url);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    setAnalysisData(mockAnalysisData);
    setIsLoading(false);
  };

  const handleReset = () => {
    setAnalysisData(null);
    setAnalyzedUrl("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <button onClick={handleReset} className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              GitGrade
            </span>
          </button>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!analysisData && !isLoading && (
          <HeroSection onAnalyze={handleAnalyze} isLoading={isLoading} />
        )}
        
        {isLoading && <LoadingAnalysis />}
        
        {analysisData && !isLoading && (
          <AnalysisResults data={analysisData} repoUrl={analyzedUrl} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Built for the GitGrade Hackathon • AI + Code Analysis + Developer Profiling
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
