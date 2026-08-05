"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/content";

type FormState = {
  name: string;
  email: string;
  company: string;
  description: string;
  consent: boolean;
  fileName: string;
  honey: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  description: "",
  consent: false,
  fileName: "",
  honey: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nameOk = form.name.trim().length > 0;
  const emailOk = EMAIL_RE.test(form.email.trim());
  const descOk = form.description.trim().length > 0;
  const consentOk = form.consent;
  const hasErrors = touched && !(nameOk && emailOk && descOk && consentOk);

  const field = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setSubmitError(false);
    if (form.honey) return;
    if (!(nameOk && emailOk && descOk && consentOk)) return;

    setSubmitting(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Company: form.company || "n/a",
          Message: form.description,
          _subject: `New enquiry from ${form.name} via roryfitzgerald.com`,
          "Submitted at": new Date().toLocaleString(),
        }),
      });
      if (!res.ok) throw new Error("bad response");
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-rf-pink/15">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8315A" strokeWidth="2.5">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-extrabold text-white">Enquiry sent</h3>
        <p className="mb-6 text-sm text-white/60">Thanks — I&apos;ll be in touch shortly.</p>
        <button
          onClick={() => {
            setForm(EMPTY_FORM);
            setTouched(false);
            setSubmitError(false);
            setSubmitted(false);
          }}
          className="rounded-xl border border-white/[0.14] px-6 py-3 font-bold text-white transition-all duration-base ease-apple hover:scale-[1.02] hover:bg-white/5"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const inputClass = (ok: boolean) =>
    `w-full rounded-xl border bg-white/[0.05] px-4 py-3.5 text-sm text-white outline-none transition-all duration-base ease-apple focus:bg-white/[0.08] focus:ring-2 ${
      touched && !ok
        ? "border-rf-pink/60 focus:border-rf-pink focus:ring-rf-pink/25"
        : "border-white/[0.10] focus:border-white/25 focus:ring-white/[0.08]"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-sm"
    >
      <input
        type="text"
        name="_honey"
        value={form.honey}
        onChange={field("honey")}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/60">Name *</label>
        <input
          value={form.name}
          onChange={field("name")}
          className={inputClass(nameOk)}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/60">Email *</label>
        <input
          value={form.email}
          onChange={field("email")}
          className={inputClass(emailOk)}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/60">
          Company / Organisation
        </label>
        <input
          value={form.company}
          onChange={field("company")}
          className={inputClass(true)}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/60">
          Project description *
        </label>
        <textarea
          value={form.description}
          onChange={field("description")}
          rows={4}
          className={`resize-y ${inputClass(descOk)}`}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/60">
          Brief or reference file (optional)
        </label>
        <input
          type="file"
          onChange={(e) => setForm((f) => ({ ...f, fileName: e.target.files?.[0]?.name ?? "" }))}
          className="w-full rounded-xl border border-dashed border-white/[0.14] bg-white/[0.02] px-4 py-3 text-[13px] text-white/60 transition-colors duration-base ease-apple file:mr-3 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:border-white/25"
        />
      </div>
      <label className="flex cursor-pointer items-start gap-2.5">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
          className="mt-0.5"
        />
        <span className="text-[13px] leading-normal text-white/60">
          I consent to my details being processed to respond to this enquiry. *
        </span>
      </label>
      {hasErrors && (
        <p className="text-[13px] text-rf-pink">
          Please fill in all required fields and accept the consent checkbox.
        </p>
      )}
      {submitError && (
        <p className="text-[13px] text-rf-pink">
          Something went wrong sending your enquiry. Please try again or email {CONTACT.email} directly.
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className={`mt-2 rounded-xl py-4 text-[15px] font-bold text-white transition-all duration-base ease-apple ${
          submitting ? "cursor-default bg-rf-pink/60" : "bg-rf-pink hover:scale-[1.01] hover:bg-rf-pink-deep active:scale-[0.99]"
        }`}
      >
        {submitting ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
