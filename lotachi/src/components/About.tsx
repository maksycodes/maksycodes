import { about } from "@/content/site";
import { Section, Eyebrow } from "./ui/Section";

export function About() {
  return (
    <Section id={about.id} ariaLabel="About Lotachi" className="border-b border-ink-100">
      <div className="max-w-2xl">
        <Eyebrow>{about.eyebrow}</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{about.heading}</h2>
        <div className="mt-5 flex flex-col gap-4 text-ink-600">
          {about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
