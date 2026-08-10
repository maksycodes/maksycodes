import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const inputClasses =
  "w-full rounded-lg border border-ink-200 bg-paper px-4 py-2.5 text-ink-900 placeholder:text-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

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
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${
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

export function FormNotice({ tone, children }: { tone: "success" | "error"; children: ReactNode }) {
  return (
    <p
      role="status"
      className={`rounded-lg px-4 py-3 text-sm ${
        tone === "success" ? "bg-accent-light text-accent-dark" : "bg-red-50 text-red-800"
      }`}
    >
      {children}
    </p>
  );
}
