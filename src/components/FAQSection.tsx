"use client";

import { useState } from "react";
import { InstagramIcon, PhoneIcon, MailIcon } from "./icons";

const faqs = [
  {
    q: "Who is this for?",
    a: "This masterclass is designed for serious practitioners — artisan bakers, chefs, food entrepreneurs, and passionate home bakers who want to deepen their technical understanding and craft.",
  },
  {
    q: "How many people attend each edition?",
    a: "Each edition is limited to twelve participants to ensure intimate, focused instruction and direct access to the maestro throughout the experience.",
  },
  {
    q: "Is accommodation included?",
    a: "Yes. Two nights in a private countryside estate are included in the experience. You'll share the space only with fellow participants.",
  },
  {
    q: "What language is the workshop conducted in?",
    a: "The workshop is conducted in English, with Italian integrated throughout the culinary sessions and estate experience.",
  },
  {
    q: "How does the application process work?",
    a: "Submit your application with a brief introduction. We review each one personally and respond within 5 business days with next steps.",
  },
  {
    q: "Can I attend with a partner or team member?",
    a: "Yes, partners and team members are welcome to apply together. Each applicant is reviewed individually to ensure the right group dynamic.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="px-6 py-20 md:px-20" style={{ backgroundColor: "#dfe5d7" }}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-start">
        {/* Left sidebar */}
        <div>
          <p
            className="text-[18px] mb-6 leading-relaxed"
            style={{
              fontFamily: "Satoshi, ui-sans-serif, sans-serif",
              color: "#2c3229",
            }}
          >
            Couldn&apos;t find your question?{" "}
            <span className="font-medium" style={{ color: "#0d120b" }}>
              Get in touch with us!
            </span>
          </p>
          <div className="flex gap-3">
            {/* Instagram */}
            <button
              className="flex items-center justify-center rounded-full shrink-0"
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#2c3229",
                color: "#dfe5d7",
              }}
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </button>
            {/* Phone */}
            <button
              className="flex items-center justify-center rounded-full shrink-0"
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#2c3229",
                color: "#dfe5d7",
              }}
              aria-label="Phone"
            >
              <PhoneIcon className="w-5 h-5" />
            </button>
            {/* Mail */}
            <button
              className="flex items-center justify-center rounded-full shrink-0"
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#2c3229",
                color: "#dfe5d7",
              }}
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right accordion */}
        <div>
          {faqs.map((item, i) => (
            <div
              key={i}
              className="py-5 cursor-pointer"
              style={{ borderBottom: "1px solid rgba(13,18,11,0.2)" }}
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <p
                  className="text-[18px] pr-4"
                  style={{
                    fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                    color: "#0d120b",
                  }}
                >
                  {item.q}
                </p>
                <div
                  className="flex items-center justify-center rounded-full shrink-0 select-none"
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: "#0d120b",
                    color: "#dfe5d7",
                    fontSize: 20,
                    lineHeight: 1,
                  }}
                >
                  {openIndex === i ? "−" : "+"}
                </div>
              </div>
              {openIndex === i && (
                <p
                  className="text-[16px] leading-relaxed pt-3 pb-1"
                  style={{
                    fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                    color: "#2c3229",
                  }}
                >
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
