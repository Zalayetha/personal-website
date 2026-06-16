import { SocialLinks } from "../ui/SocialLinks";
import { socialLinks, hero, about } from "../../data/portfolio";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col justify-evenly lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
            <span className="font-newsreader text-2xl lg:text-5xl font-bold text-gray-950">
              {hero.name}
            </span>
            <span className="font-manrope text-2xl lg:text-5xl font-bold text-gray-500">
              {hero.tagline}
            </span>
            <p className="font-manrope text-base text-gray-600 leading-relaxed max-w-xl text-center lg:text-left">
              {about.text}
            </p>
            <div className="mt-4">
              <SocialLinks
                linkedin={socialLinks.linkedin}
                github={socialLinks.github}
              />
            </div>
          </div>
          <img
            src="./assets/profile_picture.png"
            alt="Profile Picture"
            className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
