interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return <div className={`h-1 rounded-full bg-gray-200 ${className}`} />;
}

interface SectionDividerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SectionDivider({
  size = "md",
  className = "",
}: SectionDividerProps) {
  const heightClasses = {
    sm: "h-0.5",
    md: "h-1",
    lg: "h-2",
  };

  return (
    <div
      className={`${heightClasses[size]} ${className} rounded-full bg-gray-200`}
    />
  );
}
