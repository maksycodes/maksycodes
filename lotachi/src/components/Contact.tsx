import { contact, siteConfig } from "@/content/site";
import { Section, Eyebrow } from "./ui/Section";

export function Contact() {
  return (
    <Section id={contact.id} ariaLabel="Contact">
      <div className="max-w-2xl">
        <Eyebrow>{contact.eyebrow}</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{contact.heading}</h2>
        <p className="mt-5 text-ink-600">{contact.body}</p>

        <dl className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-12">
          <div>
            <dt className="text-sm text-ink-400">General enquiries</dt>
            <dd className="mt-1">
              <a href={`mailto:${siteConfig.emails.general}`} className="text-lg font-medium text-accent hover:underline">
                {siteConfig.emails.general}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink-400">Provider enquiries</dt>
            <dd className="mt-1">
              <a href={`mailto:${siteConfig.emails.providers}`} className="text-lg font-medium text-accent hover:underline">
                {siteConfig.emails.providers}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
