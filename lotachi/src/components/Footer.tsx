import { footer, siteConfig } from "@/content/site";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-paper">
      <Container className="flex flex-col gap-8 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-ink-300">{siteConfig.domain}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {footer.links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-ink-200 hover:text-paper">
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-ink-700 py-6 text-sm text-ink-300 sm:flex-row sm:justify-between">
        <p>{footer.copyright}</p>
        <p>{footer.status}</p>
      </Container>
    </footer>
  );
}
