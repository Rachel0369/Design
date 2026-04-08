"use client";
import Link from "next/link";
import LangToggle from "../components/LangToggle";
import { useLang } from "../components/LanguageContext";

const t = {
  en: {
    back: "← Rachel Meng",
    title: "About",
    intro1: "I\u2019m Rachel Meng \u2014 a researcher and product thinker with a background in finance and a consistent interest in one question:",
    introEm: "what\u2019s the gap between what systems measure and what people actually experience?",
    intro2: "I find that question everywhere \u2014 in a campus food app that needed a decision layer, not just a menu; in a gaming platform where community metrics looked fine on the surface and weren\u2019t; in a focus timer where the number meant almost nothing to the person staring at it.",
    blocks: {
      currently: {
        label: "Currently",
        degree: "MSc in Finance (in progress) \u00b7 Xiamen National Accounting Institute \u00b7 2025\u20132028",
        note: "Exploring leave of absence to pursue a fully-funded master\u2019s in service design, HCI, or mixed-methods research in Europe.",
      },
      education: {
        label: "Education",
        degree: "BSc Finance \u00b7 Shandong University \u00b7 2021\u20132025 \u00b7 GPA 98th percentile",
        major: "Major: Behavioral Finance, Causal Inference & Experimental Design, Game Theory, Statistical Analysis",
      },
      research: {
        label: "Research",
        r1title: "Cross-cultural ESG Field Study \u00b7 2025",
        r1: "Participated in a policy research project examining Zijin Mining\u2019s ESG governance in Serbia. My role was synthesis: working with interview material from Chinese and Serbian managers, distilling key patterns, and co-writing a structured policy report submitted to China\u2019s Ministry of Finance.",
        r2title: "IWAF Green Transformation Study \u00b7 2025",
        r2: "Applied the Impact-Weighted Accounts Framework to evaluate a manufacturing company\u2019s environmental and social value creation beyond financial statements.",
      },
      competition: {
        label: "Competition",
        title: "Huawei Cup Mathematical Modeling \u00b7 National 3rd Prize",
        desc: "Computational modeling of Jiangnan garden aesthetics \u2014 path optimization using ant colony algorithms, aesthetic quantification across 10 classical gardens. 83-page technical paper.",
      },
      skills: {
        label: "Skills",
        items: [
          { cat: "Research", items: "User interviews \u00b7 Insight synthesis \u00b7 Survey design \u00b7 Qualitative analysis" },
          { cat: "Data", items: "Python (Pandas, NumPy) \u00b7 SQL \u00b7 Tableau \u00b7 Event tracking" },
          { cat: "Product", items: "PRD writing \u00b7 Figma \u00b7 XMind \u00b7 Agile workflow" },
          { cat: "Language", items: "Mandarin (native) \u00b7 English (CET-6 551, full professional)" },
        ],
      },
      contact: {
        label: "Contact",
        email: "Email:",
        location: "Based in Xiamen, China \u00b7 Open to research opportunities and collaborations in Europe and Australia.",
      },
    },
  },
  zh: {
    back: "← 蒙青璇",
    title: "关于我",
    intro1: "我是蒙青璇——一个有金融背景的研究者和产品思考者，始终在追一个问题：",
    introEm: "系统衡量的东西，和人真实感受到的东西，之间的缺口在哪里？",
    intro2: "这个问题我到处都能找到——在一个需要的不是菜单而是决策支持的校园食堂 App 里；在一个社区指标表面健康、实则不然的游戏平台里；在一个专注计时器里，那个数字对盯着它的人来说几乎什么都说明不了。",
    blocks: {
      currently: {
        label: "当前状态",
        degree: "金融硕士（在读）· 厦门国家会计学院 · 2025–2028",
        note: "正在考虑休学，申请欧洲全额奖学金项目，方向为服务设计、HCI 或混合方法研究。",
      },
      education: {
        label: "教育背景",
        degree: "金融学学士 · 山东大学 · 2021–2025 · GPA 前 2%",
        major: "主修方向：行为金融、因果推断与实验设计、博弈论、统计分析",
      },
      research: {
        label: "研究经历",
        r1title: "跨文化 ESG 田野调研 · 2025",
        r1: "参与一项关于紫金矿业在塞尔维亚 ESG 治理的政策研究项目。我的工作是综合提炼：梳理中塞管理层的访谈材料，归纳关键模式，并共同撰写了提交至财政部的结构化政策报告。",
        r2title: "IWAF 绿色转型研究 · 2025",
        r2: "运用影响力加权会计框架，评估一家制造企业在财务报表之外的环境与社会价值创造。",
      },
      competition: {
        label: "竞赛",
        title: "华为杯数学建模竞赛 · 全国三等奖",
        desc: "对江南古典园林美学进行计算建模——使用蚁群算法优化游览路径，对 10 座古典园林进行美学量化分析。技术论文共 83 页。",
      },
      skills: {
        label: "技能",
        items: [
          { cat: "研究", items: "用户访谈 · 洞察提炼 · 问卷设计 · 定性分析" },
          { cat: "数据", items: "Python（Pandas、NumPy）· SQL · Tableau · 埋点/事件追踪" },
          { cat: "产品", items: "PRD 撰写 · Figma · XMind · 敏捷工作流" },
          { cat: "语言", items: "普通话（母语）· 英语（CET-6 551，完全专业水平）" },
        ],
      },
      contact: {
        label: "联系方式",
        email: "邮箱：",
        location: "现居厦门 · 欢迎欧洲及澳洲的研究机会与合作。",
      },
    },
  },
};

export default function About() {
  const { lang } = useLang();
  const c = t[lang];
  const b = c.blocks;

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid var(--border)", padding: "0 2rem", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "var(--bg)", zIndex: 50 }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem" }}>{c.back}</Link>
        <LangToggle />
      </nav>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 2rem 8rem" }}>

        <h1 className="font-display" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", lineHeight: 1.1, color: "var(--text)", marginBottom: "2rem" }}>
          {c.title}
        </h1>

        <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.85, marginBottom: "1.25rem", maxWidth: "620px" }}>
          {c.intro1} <em style={{ color: "var(--text)" }}>{c.introEm}</em>
        </p>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "4rem", maxWidth: "620px" }}>
          {c.intro2}
        </p>

        <Divider />

        <Block label={b.currently.label}>
          <p>{b.currently.degree}</p>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>{b.currently.note}</p>
        </Block>

        <Block label={b.education.label}>
          <p>{b.education.degree}</p>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{b.education.major}</p>
        </Block>

        <Block label={b.research.label}>
          <p style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>{b.research.r1title}</strong>
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{b.research.r1}</p>
          <p style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>{b.research.r2title}</strong>
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{b.research.r2}</p>
        </Block>

        <Block label={b.competition.label}>
          <p>
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>{b.competition.title}</strong>
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginTop: "0.25rem" }}>{b.competition.desc}</p>
        </Block>

        <Block label={b.skills.label}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 2rem" }}>
            {b.skills.items.map((s) => (
              <div key={s.cat}>
                <p style={{ color: "var(--accent)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{s.cat}</p>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.items}</p>
              </div>
            ))}
          </div>
        </Block>

        <Divider />

        <Block label={b.contact.label}>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            {b.contact.email}{" "}
            <a href="mailto:2440992848@qq.com" style={{ color: "var(--text)", textDecoration: "underline", textDecorationColor: "var(--border)" }}>
              2440992848@qq.com
            </a>
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "0.5rem" }}>{b.contact.location}</p>
        </Block>

      </article>
    </div>
  );
}

function Divider() {
  return <div style={{ borderTop: "1px solid var(--border)", margin: "3rem 0" }} />;
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <p style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{label}</p>
      <div style={{ color: "var(--text)", fontSize: "0.95rem", lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  );
}
