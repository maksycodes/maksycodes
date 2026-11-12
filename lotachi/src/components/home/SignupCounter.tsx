"use client";

import { useEffect, useState } from "react";
import { whereWeAre } from "@/content/home";

export function SignupCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/signup-count")
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data) => {
        if (!cancelled && typeof data.count === "number") setCount(data.count);
      })
      .catch(() => {
        // Count couldn't load — the counter stays hidden rather than showing an error or zero.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <p className="text-sm font-medium text-accent">
      {whereWeAre.signupCountTemplate.replace("{count}", count.toLocaleString("en-GB"))}
    </p>
  );
}
