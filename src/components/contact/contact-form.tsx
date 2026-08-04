"use client";

import * as React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * ContactForm — client-side contact form with inline validation and
 * submitting / success / error states. NOT wired to a backend yet: the submit
 * handler is a stubbed async call. To connect a real endpoint later, replace
 * the body of `submitContact()` with a `fetch("/api/contact", …)` call — the
 * field names already map to a typical payload.
 */

type Fields = "name" | "email" | "company" | "subject" | "message";
type FormState = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<Fields, string>) {
  const errors: Partial<Record<Fields, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (values.message.trim().length < 10)
    errors.message = "Please write at least 10 characters.";
  return errors;
}

/** Stub submit — swap for a real API call later. Resolves after a short delay. */
async function submitContact(_values: Record<Fields, string>): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  // throw new Error("network"); // (future: surface real API errors)
}

export function ContactForm() {
  const [values, setValues] = React.useState<Record<Fields, string>>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<Fields, string>>>({});
  const [state, setState] = React.useState<FormState>("idle");

  const update = (field: Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setState("submitting");
    try {
      await submitContact(values);
      setState("success");
      setValues({ name: "", email: "", company: "", subject: "", message: "" });
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 text-center"
      >
        <CheckCircle2 className="size-8 text-emerald" />
        <h3 className="font-heading text-lg font-semibold">Message sent</h3>
        <p className="max-w-sm text-sm text-muted-foreground text-pretty">
          Thanks for reaching out — we&apos;ll get back to you soon.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => setState("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const submitting = state === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <Input
            id="name"
            name="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoComplete="name"
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
          />
        </Field>
      </div>

      <Field id="company" label="Company" optional error={errors.company}>
        <Input
          id="company"
          name="company"
          value={values.company}
          onChange={update("company")}
          autoComplete="organization"
        />
      </Field>

      <Field id="subject" label="Subject" error={errors.subject}>
        <Input
          id="subject"
          name="subject"
          value={values.subject}
          onChange={update("subject")}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      {state === "error" ? (
        <p role="alert" className="text-sm text-destructive">
          Something went wrong sending your message. Please try again.
        </p>
      ) : null}

      <div>
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="animate-spin" />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
      </div>
    </form>
  );
}

/** Labelled field wrapper with an inline error message. */
function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>
        {label}
        {optional ? (
          <span className="ml-1 text-xs font-normal text-muted-foreground">
            (optional)
          </span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          className={cn("text-xs text-destructive")}
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
