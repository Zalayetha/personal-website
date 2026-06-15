import { SectionDivider } from "../ui/Divider";
import { contact } from "../../data/portfolio";

export function Contact() {
  return (
    <>
      <SectionDivider className="my-4 mx-32" />
      <section id="contact" className="flex flex-col items-center">
        <h2 className="font-newsreader font-semibold text-3xl my-4">
          {contact.cta}
        </h2>
        <p className="font-manrope font-medium text-lg text-gray-500 text-center px-4">
          {contact.tagline}
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="rounded-full px-8 py-4 bg-[#191919] border border-gray-300 text-white my-8 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#191919] hover:border-[#191919]"
        >
          Get in touch
        </a>
      </section>
      <SectionDivider className="my-4 mx-32" />
    </>
  );
}
