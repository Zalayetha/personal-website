import { Section } from "../../layout/Section";
import { contact } from "../../../data/portfolio";

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w text-center my-8">
        <div className="font-newsreader text-3xl font-bold text-gray-950">
          {contact.cta}
        </div>
        <p className="font-manrope text-base text-gray-500 mt-3">
          {contact.tagline}
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-gray-900 text-white font-manrope text-sm font-medium transition-colors duration-300 hover:bg-gray-700"
        >
          Get in Touch
        </a>
      </div>
    </Section>
  );
}
