import { Section } from "../layout/Section";
import { SectionDivider } from "../ui/Divider";
import { about } from "../../data/portfolio";

export function About() {
  return (
    <Section id="about">
      <h2 className="font-newsreader text-3xl font-bold">About</h2>
      <SectionDivider className="my-4" />
      <div className="font-manrope text-md font-medium">{about.text}</div>
    </Section>
  );
}
