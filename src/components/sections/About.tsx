import { Section } from "../layout/Section";
import { about } from "../../data/portfolio";

export function About() {
  return (
    <Section id="about">
      <div className="max-w">
        <h2 className="font-newsreader text-3xl font-bold text-gray-950">
          About
        </h2>
        <p className="font-manrope text-base text-gray-500 mt-3">
          A bit about me.
        </p>
      </div>
      <p className="font-manrope text-base text-gray-600 mt-8 leading-relaxed max-w">
        {about.text}
      </p>
    </Section>
  );
}
