interface SkillBadgeProps {
  name: string;
  variant: "dark" | "light";
}

export function SkillBadge({ name, variant }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-md font-manrope text-sm transition-colors duration-200 ${
        variant === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-700 border border-gray-200"
      }`}
    >
      {name}
    </span>
  );
}
