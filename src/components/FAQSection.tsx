"use client";

import { useEffect, useRef, useState } from "react";
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
  const sidebarRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [sidebarVis, setSidebarVis] = useState(false);
  const [accordionVis, setAccordionVis] = useState(false);

  useEffect(() => {
    const obs = (ref: React.RefObject<HTMLDivElement | null>, setter: (v: boolean) => void) => {
      const el = ref.current;
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setter(true); o.disconnect(); } },
        { threshold: 0.15 }
      );
      o.observe(el);
      return o;
    };
    obs(sidebarRef, setSidebarVis);
    obs(accordionRef, setAccordionVis);
  }, []);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="px-6 py-24 md:px-20" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-start">
        {/* Left sidebar */}
        <div
          ref={sidebarRef}
          style={{
            opacity: sidebarVis ? 1 : 0,
            transform: sidebarVis ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p
            className="text-[18px] mb-6 leading-relaxed"
            style={{
              fontFamily: "Satoshi, ui-sans-serif, sans-serif",
              color: "#4A4A4A",
            }}
          >
            Couldn&apos;t find your question?{" "}
            <span className="font-medium" style={{ color: "#111111" }}>
              Get in touch with us!
            </span>
          </p>
          <div className="flex gap-3">
            {/* Instagram */}
            <button
              className="flex items-center justify-center rounded-full shrink-0 transition-transform hover:scale-110"
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#4A4A4A",
                color: "#F5F5F5",
              }}
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </button>
            {/* Phone */}
            <button
              className="flex items-center justify-center rounded-full shrink-0 transition-transform hover:scale-110"
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#4A4A4A",
                color: "#F5F5F5",
              }}
              aria-label="Phone"
            >
              <PhoneIcon className="w-5 h-5" />
            </button>
            {/* Mail */}
            <button
              className="flex items-center justify-center rounded-full shrink-0 transition-transform hover:scale-110"
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#4A4A4A",
                color: "#F5F5F5",
              }}
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right accordion */}
        <div
          ref={accordionRef}
          style={{
            opacity: accordionVis ? 1 : 0,
            transform: accordionVis ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          {faqs.map((item, i) => (
            <div
              key={i}
              className="py-5 cursor-pointer transition-colors hover:bg-opacity-50"
              style={{ borderBottom: "1px solid rgba(13,18,11,0.2)" }}
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <p
                  className="text-[18px] pr-4"
                  style={{
                    fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                    color: "#111111",
                  }}
                >
                  {item.q}
                </p>
                <div
                  className="flex items-center justify-center rounded-full shrink-0 select-none transition-transform"
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: "#111111",
                    color: "#F5F5F5",
                    fontSize: 20,
                    lineHeight: 1,
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
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
                    color: "#4A4A4A",
                    animation: "fadeIn 0.3s ease",
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
