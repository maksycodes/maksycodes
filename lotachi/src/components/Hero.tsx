import { hero } from "@/content/site";
import { LinkButton } from "./ui/Button";
import { Container } from "./ui/Container";

export function Hero() {
  return (
    <section aria-label="Introduction" className="border-b border-ink-100 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">{hero.headline}</h1>
        <div className="mt-6 flex flex-col gap-4 text-lg text-ink-600">
          {hero.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={hero.ctaModel.href} variant="accent">
            {hero.ctaModel.label}
          </LinkButton>
          <LinkButton href={hero.ctaProvider.href} variant="outline">
            {hero.ctaProvider.label}
          </LinkButton>
        </div>
        <p className="mt-6 text-sm text-ink-400">{hero.note}</p>
      </Container>
    </section>
  );
}
