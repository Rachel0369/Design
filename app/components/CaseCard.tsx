"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Case {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  stat: { value: string; label: string };
  image: string | null;
  color: string;
}

export default function CaseCard({ c }: { c: Case }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base: React.CSSProperties = {
    transition: "opacity 0.55s ease, transform 0.55s ease, background 0.2s",
  };
  const hidden: React.CSSProperties = { opacity: 0, transform: "translateY(28px)" };
  const shown: React.CSSProperties = { opacity: 1, transform: "translateY(0)" };

  return (
    <Link href={`/work/${c.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "72px 1fr auto",
          alignItems: "start",
          gap: "2rem",
          padding: "3rem 0",
          borderBottom: "1px solid var(--border)",
          cursor: "pointer",
          ...base,
          ...(visible ? shown : hidden),
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--surface)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "transparent")}
      >
        {/* Index */}
        <span style={{ color: "var(--border)", fontSize: "0.75rem", letterSpacing: "0.1em", paddingTop: "0.25rem" }}>
          {c.index}
        </span>

        {/* Content */}
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--text)" }}
            >
              {c.title}
            </h2>
            <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{c.subtitle}</span>
          </div>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: "600px", marginBottom: "1.25rem", fontSize: "0.95rem" }}>
            {c.description}
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {c.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "99px",
                  fontSize: "0.75rem",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stat + image — slightly delayed for stagger */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "1.5rem",
            minWidth: "160px",
            paddingRight: "2rem",
            ...base,
            transitionDelay: visible ? "0.15s" : "0s",
            ...(visible ? shown : hidden),
          }}
        >
          <div style={{ textAlign: "right" }}>
            <div className="font-display" style={{ fontSize: "2rem", color: c.color }}>{c.stat.value}</div>
            <div style={{ color: "var(--muted)", fontSize: "0.75rem" }}>{c.stat.label}</div>
          </div>
          {c.image && (
            <div style={{ width: "80px", height: "145px", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", flexShrink: 0 }}>
              <Image src={c.image} alt={c.title} width={80} height={145} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
