"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { company } from "@/lib/content";

type FormState = "idle" | "submitting" | "success" | "error";

const interestOptions = [
  { value: "scaffolding", label: "Scaffolding" },
  { value: "structural", label: "Structural / shoring" },
  { value: "modular", label: "Modular buildings" },
  { value: "mixed", label: "Mixed package" },
];

export function QuoteForm() {
  const [state, setState] = useState<FormState>("idle");
  const [interest, setInterest] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ref, setRef] = useState<string>("");

  const [consent, setConsent] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      company: String(data.get("company") ?? "").trim(),
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      location: String(data.get("location") ?? "").trim(),
      interest,
      start: String(data.get("start") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      consent,
    };

    const nextErrors: Record<string, string> = {};
    if (payload.company.length < 2) nextErrors.company = "Company name is required.";
    if (payload.name.length < 2) nextErrors.name = "Contact name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      nextErrors.email = "Enter a valid work email.";
    }
    if (payload.phone.length < 6) nextErrors.phone = "Telephone is required.";
    if (!payload.interest) nextErrors.interest = "Select a system family.";
    if (!payload.consent) nextErrors.consent = "Consent is required to send the brief.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setState("error");
      return;
    }

    setState("submitting");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const json = (await response.json()) as { reference: string };
      setRef(json.reference);
      setState("success");
      toast.success("Quotation brief received.");
      form.reset();
      setInterest("");
      setConsent(false);
    } catch {
      setState("error");
      toast.error("The desk could not be reached. Use WhatsApp or email.");
    }
  }

  if (state === "success") {
    return (
      <Alert className="rounded-sm border-safety/40 bg-plate">
        <AlertTitle className="font-display text-2xl tracking-[0.08em] uppercase">
          Brief logged {ref}
        </AlertTitle>
        <AlertDescription className="mt-2 text-base text-muted-foreground">
          A project engineer will reply within one working day. For live sites, use the WhatsApp
          desk — same number as the yard gate.
        </AlertDescription>
        <Button
          type="button"
          variant="outline"
          className="mt-4 min-h-11 rounded-sm"
          onClick={() => setState("idle")}
        >
          Send another brief
        </Button>
      </Alert>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="steel-panel p-5 sm:p-8">
      <FieldSet>
        <FieldLegend className="font-display text-3xl tracking-[0.08em] uppercase">
          Project brief
        </FieldLegend>
        <FieldDescription>
          Mock desk — no backend required. The reference is generated locally for this demo.
        </FieldDescription>
        <FieldGroup className="mt-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field data-invalid={errors.company ? true : undefined}>
              <FieldLabel htmlFor="company">Company</FieldLabel>
              <Input
                id="company"
                name="company"
                autoComplete="organization"
                className="min-h-11 rounded-sm"
                aria-invalid={Boolean(errors.company)}
              />
              <FieldError>{errors.company}</FieldError>
            </Field>
            <Field data-invalid={errors.name ? true : undefined}>
              <FieldLabel htmlFor="name">Contact name</FieldLabel>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                className="min-h-11 rounded-sm"
                aria-invalid={Boolean(errors.name)}
              />
              <FieldError>{errors.name}</FieldError>
            </Field>
            <Field data-invalid={errors.email ? true : undefined}>
              <FieldLabel htmlFor="email">Work email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="min-h-11 rounded-sm"
                aria-invalid={Boolean(errors.email)}
              />
              <FieldError>{errors.email}</FieldError>
            </Field>
            <Field data-invalid={errors.phone ? true : undefined}>
              <FieldLabel htmlFor="phone">Telephone</FieldLabel>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="min-h-11 rounded-sm"
                aria-invalid={Boolean(errors.phone)}
              />
              <FieldError>{errors.phone}</FieldError>
            </Field>
            <Field>
              <FieldLabel htmlFor="location">Site / district</FieldLabel>
              <Input
                id="location"
                name="location"
                placeholder="e.g. Setúbal, Sines, Lisboa"
                className="min-h-11 rounded-sm"
              />
            </Field>
            <Field data-invalid={errors.interest ? true : undefined}>
              <FieldLabel htmlFor="interest">System family</FieldLabel>
              <Select value={interest} onValueChange={setInterest}>
                <SelectTrigger
                  id="interest"
                  className="min-h-11 w-full rounded-sm"
                  aria-invalid={Boolean(errors.interest)}
                >
                  <SelectValue placeholder="Select a family" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {interestOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FieldError>{errors.interest}</FieldError>
            </Field>
            <Field>
              <FieldLabel htmlFor="start">Target start</FieldLabel>
              <Input id="start" name="start" type="date" className="min-h-11 rounded-sm" />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="message">Loads, heights, programme</FieldLabel>
            <Textarea
              id="message"
              name="message"
              rows={6}
              className="min-h-32 rounded-sm"
              placeholder="Bay centres, height, wind exposure, hire or sale, drawings attached later."
            />
          </Field>
          <Field
            data-invalid={errors.consent ? true : undefined}
            orientation="horizontal"
            className="min-h-11 items-start"
          >
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(value) => setConsent(value === true)}
              className="mt-0.5 size-5"
              aria-invalid={Boolean(errors.consent)}
            />
            <FieldLabel htmlFor="consent" className="cursor-pointer font-normal">
              I agree that ESTEIO may use this brief to prepare a quotation. Demo only — not stored
              on a server.
            </FieldLabel>
          </Field>
          <FieldError>{errors.consent}</FieldError>
          {state === "error" && Object.keys(errors).length === 0 ? (
            <Alert variant="destructive" className="rounded-sm">
              <AlertTitle>Desk unreachable</AlertTitle>
              <AlertDescription>
                Try WhatsApp or email {company.email}.
              </AlertDescription>
            </Alert>
          ) : null}
          <Button
            type="submit"
            disabled={state === "submitting"}
            className="min-h-12 w-full rounded-sm font-display text-base tracking-[0.16em] uppercase sm:w-auto"
          >
            {state === "submitting" ? (
              <>
                <Loader2Icon data-icon="inline-start" className="animate-spin" />
                Sending brief
              </>
            ) : (
              "Submit quotation brief"
            )}
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
