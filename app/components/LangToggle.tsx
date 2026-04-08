"use client";
import { useLang } from "./LanguageContext";

export default function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      style={{
        background: "none",
        border: "1px solid var(--border)",
        color: "var(--muted)",
        fontSize: "0.78rem",
        letterSpacing: "0.06em",
        padding: "0.25rem 0.65rem",
        borderRadius: "99px",
        cursor: "pointer",
        transition: "color 0.15s, border-color 0.15s",
        fontFamily: lang === "zh"
          ? '-apple-system, "PingFang SC", sans-serif'
          : "inherit",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--muted)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
      }}
    >
      {lang === "en" ? "中文" : "EN"}
    </button>
  );
}
