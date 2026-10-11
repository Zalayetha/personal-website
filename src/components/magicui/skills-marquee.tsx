import type { Skill } from "../../data/portfolio";
import { cn } from "../../lib/utils";

export interface SkillsMarqueeProps {
  items: Skill[];
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: number;
  className?: string;
  variant?: "dark" | "light";
}

export function SkillsMarquee({
  items,
  reverse = false,
  pauseOnHover = true,
  duration = 24,
  className,
  variant = "dark",
}: SkillsMarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden select-none w-full",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
      style={{
        ["--marquee-duration" as string]: `${duration}s`,
      }}
    >
      {[0, 1, 2, 3].map((trackIdx) => (
        <div
          key={trackIdx}
          className={cn(
            "flex shrink-0 items-center justify-around gap-3 px-1.5",
            reverse ? "marquee-track-reverse" : "marquee-track",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          aria-hidden={trackIdx > 0 ? "true" : undefined}
        >
          {items.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className={cn(
                "flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-manrope text-sm font-semibold transition-transform duration-200 hover:scale-105 whitespace-nowrap",
                variant === "dark"
                  ? "bg-gray-950 text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-800 shadow-2xs"
              )}
            >
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  variant === "dark" ? "bg-emerald-400 animate-pulse" : "bg-gray-400"
                )}
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SkillsMarquee;
