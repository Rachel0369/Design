"use client";
import Link from "next/link";
import LangToggle from "../../components/LangToggle";
import { useLang } from "../../components/LanguageContext";

const t = {
  en: {
    back: "← Rachel Meng", tag: "Data Research & Product",
    title: "Gpark Community",
    meta: "MetaApp · PM Intern · Jan – Mar 2026 (≈7 weeks)",
    intro: "Gpark is a UGC game creation and social platform — think Roblox, but built for a global audience. I joined as a PM intern focused on the community layer: why wasn't it growing, and what would it take to make it healthier.",
    s1: {
      label: "01 — The Situation",
      p1: "The platform had a clear hierarchy: create games → play games → share in community. But the community layer was barely converting. When I arrived, the data showed:",
      metrics: [{ v: "30%", l: "Community penetration (game players who post)" }, { v: "14–18%", l: "Game-to-community conversion rate" }, { v: "1.5%", l: "Feed click-through rate" }],
      p2: `These numbers existed in scattered dashboards. Nobody had defined what \"healthy\" looked like, or put the metrics together into a single picture.`,
    },
    s2: {
      label: "02 — Building the Metric Framework",
      p1: "Before proposing any solutions, I needed to understand what we were actually measuring. I built a community health indicator system from scratch — pulling from Pandora (the internal analytics platform) and structuring the data into four dimensions:",
      dims: [
        { t: "Supply health", d: "How many creators are active? Is content volume growing or stagnant?" },
        { t: "Consumption quality", d: "Are users actually engaging with posts — CTR, scroll depth, saves?" },
        { t: "Conversion funnel", d: "Where in the game→community journey are users dropping off?" },
        { t: "Content signal", d: "What percentage of posts are low-quality? Is moderation keeping up?" },
      ],
      p2: `The BI dashboard I built off this framework gave the team a shared language for the first time: instead of \"the community feels inactive,\" we could say \"creator-side penetration is 30%, consumer CTR is 1.5%, and the Foryou feed has a 70%+ low-quality post rate.\"`,
    },
    s3: {
      label: "03 — From Data to Product Requirements",
      p1: "With the framework in place, the problems became specific enough to act on. I wrote three PRDs:",
      prds: [
        { title: "Search Overhaul (2.0)", problem: "User search had no fuzzy matching. Searching 'Boys11' wouldn't surface 'Boys111'. Typing errors returned zero results.", solution: "Designed a tiered search system: exact match first, then prefix matching (Elasticsearch n-gram), then spell correction (edit distance = 1). Documented priority, edge cases, and ranking logic for the algorithm team.", note: "Technically: coordinated with the algorithm team on Elasticsearch configuration. Functionally: ensured search quality didn't degrade for short, common queries while improving recall for longer ones." },
        { title: "Feed Quality & Hub Structure", problem: "70%+ of Foryou posts were 'casual talk' with no game relevance. Hub categories had no moderation logic. Good content was buried.", solution: "Redesigned the recommendation scoring formula (relevance × W₁ + quality × W₂ + personalization × W₃). Proposed Hub governance rules, content moderation triggers, and a creator reward mechanism.", note: null },
        { title: "Activity Aggregation Page", problem: "Events were scattered across different posts with no central entry point. Users didn't know what was happening on the platform.", solution: "H5 web page aggregating all events with status (Live / Ended), configurable via backend CMS. Defined front-end fields, back-end data schema, and event tracking spec.", note: null },
      ],
    },
    s4: {
      label: "04 — Honest Boundary",
      p1: "I left before any of these shipped. The internship was 7 weeks total — I spent the first 3–4 weeks onboarding and learning the product, which left about 3 weeks for the actual output. I don't have post-launch data.",
      p2: "What I would have measured, if I'd stayed:",
      items: ["Search: successful query rate (result clicked within 3 results), and zero-result rate week-over-week", "Feed: CTR lift on Foryou, low-quality post ratio post-moderation", "Community penetration: 30% → target 40% within 60 days"],
    },
    s5: {
      label: "05 — What This Work Showed Me",
      p1: `The metric framework was the most valuable thing I built — more than any individual PRD. When a team doesn't have shared definitions for what \"healthy\" means, every product decision becomes a debate about intuition.`,
      p2: "Quantifying the problem first — even imperfectly — changed the quality of every conversation that followed.",
    },
    prdLabels: { problem: "Problem", did: "What I did" },
    prev: "← EatToday", next: "SlowFocus",
  },
  zh: {
    back: "← 蒙青璇", tag: "数据研究与产品",
    title: "Gpark 社区研究",
    meta: "MetaApp · 产品经理实习生 · 2026年1月–3月（约7周）",
    intro: "Gpark 是一个 UGC 游戏创作与社交平台——类似 Roblox，但面向全球用户。我作为产品经理实习生加入，专注于社区层：为什么它没在增长，以及需要什么才能让它变得健康。",
    s1: {
      label: "01 — 现状",
      p1: "平台有清晰的层级结构：创作游戏 → 玩游戏 → 在社区分享。但社区层的转化率极低。我到岗时，数据显示：",
      metrics: [{ v: "30%", l: "社区渗透率（玩游戏的人中发帖的比例）" }, { v: "14–18%", l: "游戏到社区的转化率" }, { v: "1.5%", l: "Feed 点击率（CTR）" }],
      p2: "这些数字散落在各个仪表盘里，没有人定义过\u201c健康\u201d是什么样的，也没有把这些指标整合成一张完整的图。",
    },
    s2: {
      label: "02 — 搭建指标体系",
      p1: "在提出任何解决方案之前，我需要先搞清楚我们在测量什么。我从零开始搭建了一套社区健康度指标体系——从内部分析平台 Pandora 取数，将数据结构化为四个维度：",
      dims: [
        { t: "供给健康度", d: "有多少活跃创作者？内容量在增长还是停滞？" },
        { t: "消费质量", d: "用户真的在和帖子互动吗——CTR、浏览深度、收藏？" },
        { t: "转化漏斗", d: "用户在游戏→社区的路径中，在哪个环节流失？" },
        { t: "内容信号", d: "低质量帖子占比多少？审核机制能跟上吗？" },
      ],
      p2: "基于这套框架搭建的 BI 看板，第一次给团队提供了一种共同语言：不再是\u201c感觉社区不够活跃\u201d，而是\u201c创作侧渗透率 30%，消费侧 CTR 1.5%，Foryou feed 低质量帖占比超 70%\u201d。",
    },
    s3: {
      label: "03 — 从数据到产品需求",
      p1: "有了指标体系，问题变得具体到可以行动。我写了三份需求文档：",
      prds: [
        { title: "搜索功能重构（2.0）", problem: "用户搜索没有模糊匹配。搜索\u201dBoys11\u201d找不到\u201dBoys111\u201d，输入错字直接返回零结果。", solution: "设计了分层搜索方案：精准匹配优先，再引入前缀匹配（Elasticsearch n-gram），再支持拼写纠错（编辑距离 = 1）。向算法团队完整输出优先级、边界情况和排序逻辑。", note: "技术侧：与算法团队对齐 Elasticsearch 配置。功能侧：确保短词查询质量不因模糊扩展而退化，同时提升长词的召回率。" },
        { title: "Feed 质量与 Hub 结构", problem: "Foryou 超过 70% 的帖子是无游戏相关性的\u201d随便聊\u201d。Hub 分类没有管理逻辑，优质内容被埋没。", solution: "重新设计了推荐评分公式（相关性 × W₁ + 质量分 × W₂ + 个性化分 × W₃）。提出 Hub 治理规则、内容审核触发机制和创作者激励方案。", note: null },
        { title: "活动聚合页", problem: "活动分散在各个帖子里，没有统一入口。用户不知道平台上正在发生什么。", solution: "设计了 H5 聚合页，展示所有活动状态（进行中 / 已结束），通过后台 CMS 配置。完整输出前端字段、后端数据结构和埋点方案。", note: null },
      ],
    },
    s4: {
      label: "04 — 诚实的边界",
      p1: "这些需求在我离职前都没有上线。实习总共 7 周——前 3–4 周在熟悉产品和 landing，留给实际产出的时间只有约 3 周。我没有上线后的数据。",
      p2: "如果留下来，我会追踪：",
      items: ["搜索：有效查询率（结果被点击）、零结果率的周环比变化", "Feed：Foryou CTR 提升幅度、低质量帖占比下降", "社区渗透率：从 30% 向 40% 的目标推进（60天周期）"],
    },
    s5: {
      label: "05 — 这段经历让我看到的",
      p1: "指标体系是我做的最有价值的东西——比任何一份需求文档都重要。当一个团队没有共同定义\u201d健康\u201d是什么，每一个产品决策都会变成关于直觉的争论。",
      p2: "先把问题量化——哪怕不完美——会改变之后每一次讨论的质量。",
    },
    prdLabels: { problem: "问题", did: "我做了什么" },
    prev: "← EatToday", next: "SlowFocus 专注日志",
  },
};

export default function GparkCase() {
  const { lang } = useLang();
  const c = t[lang];
  const color = "#3d6b58";

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid var(--border)", padding: "0 2rem", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "var(--bg)", zIndex: 50 }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem" }}>{c.back}</Link>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <span style={{ color: "var(--border)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>02 / 03</span>
          <LangToggle />
        </div>
      </nav>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 2rem 8rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>{c.tag}</p>
        <h1 className="font-display" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", lineHeight: 1.1, color: "var(--text)", marginBottom: "1rem" }}>{c.title}</h1>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>{c.meta}</p>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "3.5rem", maxWidth: "600px" }}>{c.intro}</p>

        <S label={c.s1.label}>
          <p>{c.s1.p1}</p>
          <Metrics items={c.s1.metrics} color={color} />
          <p>{c.s1.p2}</p>
        </S>

        <S label={c.s2.label}>
          <p>{c.s2.p1}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {c.s2.dims.map((d) => (
              <div key={d.t} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "6px", padding: "1rem 1.25rem" }}>
                <div style={{ color: "var(--text)", fontWeight: 500, marginBottom: "0.25rem", fontSize: "0.9rem" }}>{d.t}</div>
                <div style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>{d.d}</div>
              </div>
            ))}
          </div>
          <p>{c.s2.p2}</p>
        </S>

        <S label={c.s3.label}>
          <p>{c.s3.p1}</p>
          {c.s3.prds.map((prd) => (
            <div key={prd.title} style={{ border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ background: "var(--surface)", padding: "0.85rem 1.25rem", borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text)", fontWeight: 500, fontSize: "0.9rem" }}>{prd.title}</span>
              </div>
              <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <span style={{ color: "var(--accent)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.prdLabels.problem} </span>
                  <span style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{prd.problem}</span>
                </div>
                <div>
                  <span style={{ color: "var(--accent)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.prdLabels.did} </span>
                  <span style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{prd.solution}</span>
                </div>
                {prd.note && <p style={{ borderTop: "1px solid var(--border)", paddingTop: "0.75rem", fontSize: "0.8rem", fontStyle: lang === "en" ? "italic" : "normal", lineHeight: 1.6, color: "var(--muted)" }}>{prd.note}</p>}
              </div>
            </div>
          ))}
        </S>

        <S label={c.s4.label}>
          <p style={{ borderLeft: "2px solid var(--border)", paddingLeft: "1rem", fontStyle: lang === "en" ? "italic" : "normal" }}>{c.s4.p1}</p>
          <p>{c.s4.p2}</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {c.s4.items.map((item, i) => (
              <li key={i} style={{ color: "var(--muted)", fontSize: "0.9rem", display: "flex", gap: "0.75rem", lineHeight: 1.7 }}>
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>—</span>{item}
              </li>
            ))}
          </ul>
        </S>

        <S label={c.s5.label}>
          <p>{c.s5.p1}</p>
          <p>{c.s5.p2}</p>
        </S>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", marginTop: "4rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/work/eattody" style={{ textDecoration: "none", color: "var(--muted)", fontSize: "0.85rem" }}>{c.prev}</Link>
          <Link href="/work/slowfocus" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
            <span className="font-display" style={{ fontSize: "1.5rem", color: "var(--text)" }}>{c.next}</span>
            <span style={{ color: "var(--accent)" }}>→</span>
          </Link>
        </div>
      </article>
    </div>
  );
}

function S({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "3.5rem" }}>
      <p style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>{label}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--muted)", fontSize: "0.975rem", lineHeight: 1.8 }}>{children}</div>
    </section>
  );
}

function Metrics({ items, color }: { items: { v: string; l: string }[]; color: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: "1px", background: "var(--border)", borderRadius: "8px", overflow: "hidden", margin: "0.5rem 0" }}>
      {items.map((s) => (
        <div key={s.l} style={{ background: "var(--surface)", padding: "1.25rem 1rem" }}>
          <div className="font-display" style={{ fontSize: "1.75rem", color, marginBottom: "0.2rem" }}>{s.v}</div>
          <div style={{ color: "var(--muted)", fontSize: "0.75rem", lineHeight: 1.4 }}>{s.l}</div>
        </div>
      ))}
    </div>
  );
}
