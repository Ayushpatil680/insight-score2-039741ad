import { ScoreCircle } from "./ScoreCircle";
import { DimensionCard } from "./DimensionCard";
import { RoadmapItem } from "./RoadmapItem";
import {
  Code2,
  FolderTree,
  FileText,
  TestTube,
  GitBranch,
  Sparkles,
  TrendingUp,
  Target,
} from "lucide-react";

interface AnalysisData {
  overallScore: number;
  summary: string;
  dimensions: {
    codeQuality: number;
    projectStructure: number;
    documentation: number;
    testCoverage: number;
    commitHistory: number;
    bestPractices: number;
  };
  roadmap: Array<{
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
  }>;
}

interface AnalysisResultsProps {
  data: AnalysisData;
  repoUrl: string;
}

export const AnalysisResults = ({ data, repoUrl }: AnalysisResultsProps) => {
  const dimensions = [
    {
      icon: Code2,
      title: "Code Quality",
      score: data.dimensions.codeQuality,
      description: "Readability, complexity, and adherence to coding standards",
    },
    {
      icon: FolderTree,
      title: "Project Structure",
      score: data.dimensions.projectStructure,
      description: "Organization of files, folders, and module separation",
    },
    {
      icon: FileText,
      title: "Documentation",
      score: data.dimensions.documentation,
      description: "README quality, code comments, and API documentation",
    },
    {
      icon: TestTube,
      title: "Test Coverage",
      score: data.dimensions.testCoverage,
      description: "Unit tests, integration tests, and test quality",
    },
    {
      icon: GitBranch,
      title: "Git Practices",
      score: data.dimensions.commitHistory,
      description: "Commit consistency, branching, and PR practices",
    },
    {
      icon: Sparkles,
      title: "Best Practices",
      score: data.dimensions.bestPractices,
      description: "Modern patterns, security, and performance optimizations",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header with Score */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Target className="h-4 w-4" />
          Analysis Complete
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Repository Analysis</h2>
        <p className="text-muted-foreground font-mono text-sm">{repoUrl}</p>
      </div>

      {/* Score and Summary */}
      <div className="grid gap-8 lg:grid-cols-[auto,1fr] items-center">
        <div className="flex justify-center">
          <ScoreCircle score={data.overallScore} size={200} label="Overall Score" />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Summary</h3>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-muted-foreground leading-relaxed">{data.summary}</p>
          </div>
        </div>
      </div>

      {/* Dimensions Grid */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Evaluation Dimensions
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dimensions.map((dim, index) => (
            <DimensionCard key={dim.title} {...dim} delay={index * 100} />
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Target className="h-5 w-5 text-accent" />
          Personalized Roadmap
        </h3>
        <div className="max-w-2xl">
          {data.roadmap.map((item, index) => (
            <RoadmapItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
