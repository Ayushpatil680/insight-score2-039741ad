import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

interface RoadmapItemProps {
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  index: number;
}

const priorityStyles = {
  high: "border-destructive/50 bg-destructive/10",
  medium: "border-warning/50 bg-warning/10",
  low: "border-primary/50 bg-primary/10",
};

const priorityLabels = {
  high: { text: "High Priority", color: "text-destructive" },
  medium: { text: "Medium Priority", color: "text-warning" },
  low: { text: "Low Priority", color: "text-primary" },
};

export const RoadmapItem = ({ title, description, priority, index }: RoadmapItemProps) => {
  return (
    <div
      className="group relative flex gap-4 opacity-0 animate-fade-in"
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${priorityStyles[priority]} transition-transform group-hover:scale-110`}>
          <span className="font-mono text-sm font-bold text-foreground">{index + 1}</span>
        </div>
        {index < 5 && (
          <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-border to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h4 className="font-semibold text-foreground">{title}</h4>
            <span className={`text-xs font-medium ${priorityLabels[priority].color}`}>
              {priorityLabels[priority].text}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          
          <button className="mt-3 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
            Learn more <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
