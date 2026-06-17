import { Sprout } from "lucide-react";
import { hero } from "../../data/portfolio";

export function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: hero.resume, label: "Download CV" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-100/80 backdrop-blur-sm">
      <nav className="flex flex-row justify-between px-8 py-5 items-center max-w-5xl mx-auto">
        <a href="#home" className="flex items-center gap-2 group">
          <Sprout className="w-6 h-6 transition-colors duration-300 group-hover:text-green-600" />
          <span className="font-newsreader text-lg font-semibold tracking-tight">
            zaghy.zalayetha
          </span>
        </a>
        <div className="flex items-center gap-8">
          {navItems.map((item) =>
            item.label === "Download CV" ? (
              <div className="px-4 py-1 rounded-full bg-white border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50 hover:text-gray-400">
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-manrope font-semibold"
                  target="_blank"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gray-950 transition-all duration-300 hover:w-full" />
                </a>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="relative font-manrope text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-gray-950 py-1"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gray-950 transition-all duration-300 hover:w-full" />
              </a>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
