"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type EmailCopyButtonProps = {
  email: string;
  children?: ReactNode;
  className?: string;
};

type CopyStatus = "idle" | "copied" | "failed";

function copyWithFallback(value: string) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

export default function EmailCopyButton({
  email,
  children,
  className = "",
}: EmailCopyButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function handleCopy() {
    let copied = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        copied = true;
      } else {
        copied = copyWithFallback(email);
      }
    } catch {
      copied = copyWithFallback(email);
    }

    setStatus(copied ? "copied" : "failed");
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), 2400);
  }

  return (
    <>
      <button
        className={`email-copy ${className}`.trim()}
        type="button"
        onClick={handleCopy}
        title={`Copy ${email}`}
        aria-label={`Copy email address ${email}`}
      >
        <span>{children ?? email}</span>
        <span className="email-copy-icon" aria-hidden="true">⧉</span>
      </button>
      {status !== "idle" ? (
        <span
          className={`email-copy-feedback${status === "failed" ? " is-error" : ""}`}
          role="status"
          aria-live="polite"
        >
          {status === "copied" ? "Email copied to clipboard" : "Could not copy email"}
        </span>
      ) : null}
    </>
  );
}
