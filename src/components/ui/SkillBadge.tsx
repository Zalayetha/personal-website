interface SkillBadgeProps {
  name: string;
  variant: "dark" | "light";
}

export function SkillBadge({ name, variant }: SkillBadgeProps) {
  if (variant === "dark") {
    return (
      <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
        <div className="text-white px-4 py-2 font-manrope text-xs">{name}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 rounded-full border-2 border-[#191919] px-3 py-1 shrink-0">
      <div className="text-[#191919] px-4 py-2 font-manrope text-xs font-semibold">
        {name}
      </div>
    </div>
  );
}
