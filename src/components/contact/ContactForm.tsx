"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check, Close } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DUMMY_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-olive/15 bg-white/80 px-4 py-3 text-sm text-olive placeholder:text-olive/40 outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [bot, setBot] = useState("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? DUMMY_ACCESS_KEY;
  const isDemo = accessKey === DUMMY_ACCESS_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      if (isDemo) {
        await new Promise((resolve) => setTimeout(resolve, 900));
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        return;
      }

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: subject || `Portfolio inquiry from ${name}`,
          message,
          botcheck: bot,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error("Failed to send");
      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <div className="rounded-2xl border border-olive/10 bg-white/70 p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-start gap-4 py-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-ivory">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-olive">
                Message sent — thank you!
              </h3>
              <p className="text-sm leading-relaxed text-olive/65">
                {isDemo
                  ? "This is a demo submission (the web3forms endpoint is not connected yet). When you add your NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, real submissions will flow straight to your inbox."
                  : "I'll get back to you within 24–48 hours."}
              </p>
              <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
                Send another message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-olive"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-olive"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-olive"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Technical SEO audit for my site"
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-olive"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className={cn(inputClasses, "resize-none")}
                />
              </div>

              <input
                type="text"
                name="botcheck"
                value={bot}
                onChange={(e) => setBot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send message"}
                </Button>
                {status === "error" ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-sm text-red-600"
                  >
                    <Close className="h-4 w-4" />
                    Something went wrong. Please try again or email me directly
                    at rizwanmehdi341@gmail.com.
                  </motion.p>
                ) : null}
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}