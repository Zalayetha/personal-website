import { type LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function NavItem({ href, icon: Icon, label }: NavItemProps) {
  return (
    <a href={href}>
      <div className="items-center font-newsreader border-2 p-2 rounded-lg flex flex-row lg:text-lg text-sm gap-1 border-gray-300 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
        <Icon className="w-5 h-5 shrink-0" />
        <span className="hidden lg:inline text-sm font-medium">{label}</span>
      </div>
    </a>
  );
}
