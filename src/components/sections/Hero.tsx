import { useRef } from "react";
import { useTyped } from "../../hooks/useTyped";
import { SocialLinks } from "../ui/SocialLinks";
import { socialLinks, hero } from "../../data/portfolio";

export function Hero() {
  const nameRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);

  useTyped(nameRef, { strings: [hero.name] });
  useTyped(taglineRef, { strings: [hero.tagline], startDelay: 1000 });

  return (
    <section
      id="home"
      className="flex lg:flex-row flex-col lg:gap-24 sm:gap-8 lg:p-32 items-center pt-32"
    >
      <img
        src="./assets/profile_picture.png"
        alt="Profile Picture"
        className="lg:w-62.5 lg:h-83 w-60 h-80 object-cover rounded-4xl border-4 border-gray-300 lg:items-start items-center transition delay-50 hover:-translate-y-1 duration-300 ease-in-out hover:scale-110"
      />

      <div className="space-y-4 my-6 px-4">
        <div className="flex flex-row lg:min-h-12 lg:justify-start justify-center min-h-4">
          <span
            ref={nameRef}
            className="font-newsreader lg:text-3xl text-xl lg:text-start text-center"
          />
        </div>

        <div className="flex flex-row lg:min-h-14 lg:justify-start justify-center min-h-12">
          <span
            ref={taglineRef}
            className="font-newsreader lg:text-3xl lg:text-start text-xl text-center"
          />
        </div>

        <SocialLinks linkedin={socialLinks.linkedin} github={socialLinks.github} />
      </div>
    </section>
  );
}
