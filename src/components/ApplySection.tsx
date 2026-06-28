"use client";
import Image from "next/image";

const skillLevels = ["Foundational", "Intermediate", "Advanced", "Professional"] as const;

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
  fontSize: 14,
  color: "#4A4A4A",
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid rgba(13,18,11,0.25)",
  borderRadius: 8,
  padding: "12px 16px",
  background: "transparent",
  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
  fontSize: 16,
  color: "#111111",
  outline: "none",
  marginBottom: 20,
  boxSizing: "border-box",
};

export function ApplySection() {
  return (
    <section style={{ backgroundColor: "#F5F5F5" }}>
      {/* Centered header */}
      <div className="text-center pb-12 px-6 pt-20">
        <h2
          className="mb-4 text-[40px] md:text-[64px] leading-tight"
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontStyle: "italic",
            color: "#111111",
          }}
        >
          Apply for A Seat
        </h2>
        <p
          className="text-[18px] leading-relaxed max-w-xl mx-auto"
          style={{
            fontFamily: "Satoshi, ui-sans-serif, sans-serif",
            color: "#4A4A4A",
          }}
        >
          Participation is limited and intentionally curated. We review every application to ensure
          alignment, commitment, and a focused group environment. Pricing and availability are shared
          privately with approved applicants.
        </p>
      </div>

      {/* 2-column form area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-20 pb-20 items-start">
        {/* Left: image — hidden on mobile */}
        <div className="hidden md:block">
          <Image
            src="/images/rurWZkxRma3VIOLcSkpiVf8YaL0.jpg"
            alt="People shaping dough during the masterclass"
            width={600}
            height={700}
            className="w-full object-cover"
            style={{ height: 500, borderRadius: 10 }}
          />
        </div>

        {/* Right: form */}
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Full name */}
          <label style={labelStyle}>Your full name</label>
          <input
            type="text"
            placeholder=""
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#111111";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(13,18,11,0.25)";
            }}
          />

          {/* Email */}
          <label style={labelStyle}>Your email</label>
          <input
            type="email"
            placeholder=""
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#111111";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(13,18,11,0.25)";
            }}
          />

          {/* Current role */}
          <label style={labelStyle}>Current role or practice</label>
          <input
            type="text"
            placeholder=""
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#111111";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(13,18,11,0.25)";
            }}
          />

          {/* Skill level radio */}
          <label style={{ ...labelStyle, marginBottom: 12 }}>
            How would you describe your current skill level?
          </label>
          <div className="mb-5">
            {skillLevels.map((level) => (
              <label
                key={level}
                className="flex items-center gap-2 mb-3 cursor-pointer"
                style={{
                  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                  fontSize: 16,
                  color: "#111111",
                }}
              >
                <input
                  type="radio"
                  name="skillLevel"
                  value={level}
                  className="accent-[#111111]"
                />
                {level}
              </label>
            ))}
          </div>

          {/* Anything else */}
          <label style={labelStyle}>Anything else we should know?</label>
          <textarea
            style={{ ...inputStyle, height: 128, resize: "vertical", marginBottom: 24 }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#111111";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(13,18,11,0.25)";
            }}
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full"
            style={{
              backgroundColor: "#111111",
              color: "#F5F5F5",
              borderRadius: 6,
              padding: "16px 0",
              fontFamily: "Satoshi, ui-sans-serif, sans-serif",
              fontSize: 18,
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
