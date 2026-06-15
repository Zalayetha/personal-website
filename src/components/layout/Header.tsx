import { Sprout, House, GraduationCap, FolderKanban, UserPen } from "lucide-react";
import { NavItem } from "../ui/NavItem";

export function Header() {
  return (
    <header className="border-b-2 border-gray-300 sticky top-0 z-50 w-full bg-gray-100">
      <nav className="flex flex-row justify-between px-8 py-4 items-center">
        <div className="flex flex-row items-center border-2 border-gray-300 rounded-full p-2">
          <Sprout className="w-6 h-6 shrink-0" />
        </div>
        <div className="flex flex-row lg:gap-6 gap-2">
          <NavItem href="#home" icon={House} label="Home" />
          <NavItem href="#academic" icon={GraduationCap} label="Academic" />
          <NavItem href="#projects" icon={FolderKanban} label="Projects" />
          <NavItem href="#contact" icon={UserPen} label="Contact" />
        </div>
      </nav>
    </header>
  );
}
