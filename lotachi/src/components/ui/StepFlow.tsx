type Step = { number: string; title: string; body: string };

export function StepFlow({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-8 sm:grid-cols-3">
      {steps.map((step) => (
        <li key={step.number} className="flex flex-col gap-3">
          <span aria-hidden="true" className="text-sm font-medium text-accent">
            {step.number}
          </span>
          <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
          <p className="text-ink-600">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
