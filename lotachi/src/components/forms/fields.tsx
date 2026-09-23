import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const inputClasses =
  "w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-ink-900 placeholder:text-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

// Groups a form's fields into a labelled, numbered section so a long form
// reads as a handful of digestible steps rather than one undifferentiated
// wall of choices — see ModelForm.tsx and ProviderForm.tsx.
export function FormSection({
  step,
  title,
  description,
  children,
}: {
  step: number;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 border-t border-ink-100 pt-6 first:border-t-0 first:pt-0">
      <div>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-900 text-[10px] text-paper">
            {step}
          </span>
          {title}
        </p>
        {description && <p className="mt-2 text-sm text-ink-500">{description}</p>}
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}

export function Field({
  label,
  htmlFor,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink-900">
        {label}
        {required && (
          <span aria-hidden="true" className="text-accent">
            {" "}
            *
          </span>
        )}
        {optional && <span className="font-normal text-ink-400"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputClasses} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={inputClasses} rows={props.rows ?? 4} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={inputClasses}>
      {props.children}
    </select>
  );
}

export function CheckboxGroup({
  legend,
  name,
  options,
  values,
  onChange,
}: {
  legend: string;
  name: string;
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
}) {
  function toggle(option: string) {
    if (values.includes(option)) {
      onChange(values.filter((v) => v !== option));
    } else {
      onChange([...values, option]);
    }
  }

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-ink-900">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const id = `${name}-${option.replace(/\s+/g, "-").toLowerCase()}`;
          const checked = values.includes(option);
          return (
            <label
              key={option}
              htmlFor={id}
              className={`inline-flex min-h-[44px] cursor-pointer items-center rounded-full border px-4 py-2 text-sm transition-colors ${
                checked
                  ? "border-ink-900 bg-ink-900 text-paper"
                  : "border-ink-200 text-ink-700 hover:border-ink-400"
              }`}
            >
              <input
                id={id}
                type="checkbox"
                name={name}
                value={option}
                checked={checked}
                onChange={() => toggle(option)}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-ink-900">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const id = `${name}-${option.replace(/\s+/g, "-").toLowerCase()}`;
          const checked = value === option;
          return (
            <label
              key={option}
              htmlFor={id}
              className={`inline-flex min-h-[44px] cursor-pointer items-center rounded-full border px-4 py-2 text-sm transition-colors ${
                checked
                  ? "border-ink-900 bg-ink-900 text-paper"
                  : "border-ink-200 text-ink-700 hover:border-ink-400"
              }`}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={option}
                checked={checked}
                onChange={() => onChange(option)}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Checkbox({
  id,
  checked,
  onChange,
  required,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        required={required}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 rounded border-ink-300 text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      />
      <label htmlFor={id} className="text-sm text-ink-700">
        {children}
      </label>
    </div>
  );
}

// Formspree's honeypot convention: a field named "_gotcha" that's invisible
// to real visitors (off-screen, unfocusable, hidden from assistive tech) but
// still present in the DOM for simple bots to fill in. If Formspree receives
// a non-empty value for it, the submission is silently discarded server-side
// — the field's value must be included in the payload passed to
// submitToFormspree() for this to work, since our forms build a plain JSON
// object rather than relying on native form-encoded submission.
export function Honeypot({
  value,
  onChange,
  id = "_gotcha",
}: {
  value: string;
  onChange: (value: string) => void;
  // Unique per form instance so multiple forms rendered on the same page
  // (e.g. a page form plus the footer's email-capture form) never produce
  // duplicate DOM ids. The field NAME stays "_gotcha" on every instance —
  // that's the part Formspree actually checks.
  id?: string;
}) {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor={id}>Leave this field blank</label>
      <input
        type="text"
        id={id}
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function FormNotice({ tone, children }: { tone: "success" | "error"; children: ReactNode }) {
  return (
    <p
      role="status"
      className={`rounded-lg px-4 py-3 text-sm ${
        tone === "success" ? "bg-paper-muted text-ink-900 border border-ink-200" : "bg-red-50 text-red-800"
      }`}
    >
      {children}
    </p>
  );
}
