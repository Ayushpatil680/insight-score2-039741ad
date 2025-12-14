import { useEffect, useState } from "react";

interface ScoreCircleProps {
  score: number;
  size?: number;
  label?: string;
}

const getScoreColor = (score: number) => {
  if (score >= 80) return "hsl(var(--success))";
  if (score >= 60) return "hsl(var(--primary))";
  if (score >= 40) return "hsl(var(--warning))";
  return "hsl(var(--destructive))";
};

const getGrade = (score: number) => {
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
};

export const ScoreCircle = ({ score, size = 180, label }: ScoreCircleProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;
  const color = getScoreColor(score);
  const grade = getGrade(score);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const stepValue = score / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += stepValue;
      if (current >= score) {
        setAnimatedScore(score);
        clearInterval(interval);
      } else {
        setAnimatedScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [score]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
          />
          {/* Score circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 1.5s ease-out",
              filter: `drop-shadow(0 0 8px ${color})`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-4xl font-bold font-mono"
            style={{ color }}
          >
            {grade}
          </span>
          <span className="text-2xl font-semibold text-foreground">
            {animatedScore}
          </span>
        </div>
      </div>
      {label && (
        <span className="text-sm text-muted-foreground font-medium">{label}</span>
      )}
    </div>
  );
};
