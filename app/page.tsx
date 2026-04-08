"use client";
import Link from "next/link";
import CaseCard from "./components/CaseCard";
import LangToggle from "./components/LangToggle";
import { useLang } from "./components/LanguageContext";

const content = {
  en: {
    label: "Selected Work",
    headline: ["I find the gap between what data shows", "and what people ", "actually", " feel."],
    sub: "User research and product thinking — with a background in finance, field research, and building small things that work.",
    nav: { work: "Work", about: "About" },
    footer: "Rachel Meng · 2026",
    cases: [
      {
        slug: "eattody",
        index: "01",
        title: "EatToday",
        subtitle: "Cafeteria mini-program · Product Design & Research",
        description:
          "A campus tool that reframed the problem from \u201cshow the menu\u201d to \u201chelp people decide if lunch is worth the walk.\u201d One lightweight feature doubled DAU.",
        tags: ["User Research", "Product Design", "Data"],
        stat: { value: "+50%", label: "DAU in gray-test week" },
        image: "/eattody-menu.png",
        color: "#8a6010",
      },
      {
        slug: "gpark",
        index: "02",
        title: "Gpark Community",
        subtitle: "MetaApp internship · Data Research & PRD",
        description:
          "Built a community health metric framework from scratch, then translated the data into product requirements — search overhaul, feed quality, and Hub restructure.",
        tags: ["Metric Design", "Data Analysis", "PRD"],
        stat: { value: "30%", label: "community penetration baseline" },
        image: null,
        color: "#3d6b58",
      },
      {
        slug: "slowfocus",
        index: "03",
        title: "SlowFocus",
        subtitle: "Self-initiated · User Research & Product",
        description:
          "A focus timer that captures what numbers can\u2019t: emotions, micro-thoughts, and the texture of a work session. Started with 2 interviews. Still building.",
        tags: ["User Interviews", "Insight Synthesis", "Figma"],
        stat: { value: "In progress", label: "targeting App Store" },
        image: "/slowfocus-timer.png",
        color: "#4f4f9c",
      },
    ],
  },
  zh: {
    label: "精选作品",
    headline: ["我研究数据呈现的东西", "和人", "真实", "感受之间的缺口。"],
    sub: "用户研究与产品思维——背景是金融、田野调研，和把小东西做到真正好用。",
    nav: { work: "作品", about: "关于" },
    footer: "蒙青璇 · 2026",
    cases: [
      {
        slug: "eattody",
        index: "01",
        title: "EatToday 校园食堂小程序",
        subtitle: "产品设计与研究",
        description:
          "一个把问题从\u201c看菜单\u201d重新定义为\u201c决定值不值得去\u201d的校园工具。一个轻量功能让 DAU 翻倍。",
        tags: ["用户研究", "产品设计", "数据"],
        stat: { value: "+50%", label: "灰测首周 DAU 提升" },
        image: "/eattody-menu.png",
        color: "#8a6010",
      },
      {
        slug: "gpark",
        index: "02",
        title: "Gpark 社区研究",
        subtitle: "MetaApp 实习 · 数据研究与需求文档",
        description:
          "从零搭建社区健康度指标体系，再把数据洞察转化为产品需求——搜索重构、feed 质量治理、Hub 结构优化。",
        tags: ["指标设计", "数据分析", "PRD 写作"],
        stat: { value: "30%", label: "社区渗透率基准值" },
        image: null,
        color: "#3d6b58",
      },
      {
        slug: "slowfocus",
        index: "03",
        title: "SlowFocus 专注日志",
        subtitle: "自主项目 · 用户研究与产品设计",
        description:
          "一款专注计时器，记录数字记录不到的东西：情绪、微小念头，和一段工作的真实质感。从 2 次访谈开始，仍在推进中。",
        tags: ["用户访谈", "洞察提炼", "Figma 原型"],
        stat: { value: "进行中", label: "目标 App Store 上线" },
        image: "/slowfocus-timer.png",
        color: "#4f4f9c",
      },
    ],
  },
};

export default function Home() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid var(--border)", padding: "0 2rem", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "var(--bg)", zIndex: 50 }}>
        <span style={{ color: "var(--text)", fontWeight: 500, letterSpacing: "0.02em" }}>Rachel Meng</span>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {[{ label: c.nav.work, href: "/" }, { label: c.nav.about, href: "/about" }].map((item) => (
            <Link key={item.href} href={item.href} style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {item.label}
            </Link>
          ))}
          <LangToggle />
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "clamp(5rem, 12vw, 10rem) 2rem clamp(4rem, 8vw, 7rem)", maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "2rem" }}>
          {c.label}
        </p>
        <h1 className="font-display" style={{ fontSize: "clamp(2.6rem, 6vw, 5.2rem)", lineHeight: 1.1, color: "var(--text)", maxWidth: "900px", marginBottom: "2rem" }}>
          {lang === "en" ? (
            <>
              I find the gap between what data shows<br />
              and what people <em>actually</em> feel.
            </>
          ) : (
            <>
              我研究数据呈现的东西<br />
              和人<em style={{ fontStyle: "normal", color: "var(--accent)" }}>真实</em>感受之间的缺口。
            </>
          )}
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "560px", lineHeight: 1.8 }}>
          {c.sub}
        </p>
      </section>

      {/* Case list */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem 8rem", display: "flex", flexDirection: "column", borderTop: "1px solid var(--border)" }}>
        {c.cases.map((cs) => (
          <CaseCard key={cs.slug} c={cs} />
        ))}
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem", textAlign: "center", color: "var(--muted)", fontSize: "0.8rem" }}>
        {c.footer}
      </footer>
    </div>
  );
}
