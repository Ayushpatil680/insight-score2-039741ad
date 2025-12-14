import { LucideIcon } from "lucide-react";

interface DimensionCardProps {
  icon: LucideIcon;
  title: string;
  score: number;
  description: string;
  delay?: number;
}

const getScoreColor = (score: number) => {
  if (score >= 80) return "bg-success/20 text-success border-success/30";
  if (score >= 60) return "bg-primary/20 text-primary border-primary/30";
  if (score >= 40) return "bg-warning/20 text-warning border-warning/30";
  return "bg-destructive/20 text-destructive border-destructive/30";
};

export const DimensionCard = ({
  icon: Icon,
  title,
  score,
  description,
  delay = 0,
}: DimensionCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>
        
        <div
          className={`flex h-10 min-w-[3rem] items-center justify-center rounded-lg border px-2 font-mono text-sm font-bold ${getScoreColor(score)}`}
        >
          {score}
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
};
