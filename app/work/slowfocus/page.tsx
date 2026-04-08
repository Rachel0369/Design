"use client";
import Link from "next/link";
import Image from "next/image";
import LangToggle from "../../components/LangToggle";
import { useLang } from "../../components/LanguageContext";

const t = {
  en: {
    back: "← Rachel Meng", tag: "User Research · Self-initiated · In Progress",
    title: "SlowFocus",
    intro: "A focus timer that captures what numbers can't: the emotions, micro-thoughts, and texture of a work session. This is where I first tried to do user research properly — 2 interviews, real framework, honest limitations.",
    s1: {
      label: "01 — The Question",
      p1: "I use focus timers. Everyone I know uses them. And almost everyone has the same complaint: the number doesn't mean anything.",
      p2: `\"I focused for 45 minutes\" is technically true and experientially empty. It says nothing about whether you were in flow or fighting anxiety the whole time, whether you had three breakthroughs or went in circles.`,
      callout: "Existing focus apps measure duration. I wanted to understand what duration fails to capture — and whether a product could close that gap.",
    },
    s2: {
      label: "02 — Research (2 Users, Honestly)",
      p1: "I ran 2 user interviews. Both were people I knew — convenience sampling, not rigorous. Being straightforward about what that means:",
      limits: [
        { neg: true, text: "The sample is too small to generalize. Two people's experiences can tell you what's possible, not what's typical." },
        { neg: true, text: "People are less honest with people they know. Some of what I heard may have been shaped by wanting to be helpful." },
        { neg: false, text: "That said — the interviews produced specific, actionable insights I wouldn't have reached by intuition alone." },
      ],
      p2: "I structured the interviews around three questions:",
      questions: [
        { q: "Tell me about a time you were studying and a thought came up that you wanted to record.", why: "To find the moment where micro-thoughts get suppressed or lost." },
        { q: "How do you know, after a session, whether you actually learned something?", why: "To surface the gap between time logged and subjective quality." },
        { q: "What happens when you switch apps mid-session?", why: "To understand how context-switching actually breaks (or doesn't break) focus." },
      ],
    },
    s3: {
      label: "03 — What I Found",
      p1: "Three insights that shaped the product direction:",
      insights: [
        { title: "The number creates a meaning gap", body: `Users don't trust their timer data. \"I focused for an hour\" can mean ten different things depending on mental state, difficulty, and interruptions. The number flattens all of that.` },
        { title: "Micro-thoughts are suppressed, not recorded", body: "When a thought surfaces during focus, users either ignore it (and lose it) or break flow to write it down elsewhere. There's no low-friction middle path. The cost of capture feels too high in the moment." },
        { title: "Users want to feel seen by their own effort", body: `\"I want a good focus tool to give me a sense of control and meaning.\" This wasn't about productivity tracking — it was about self-validation. Seeing your effort reflected back is motivating in itself.` },
      ],
    },
    s4: {
      label: "04 — Product Direction",
      p1: "The core mechanic: during a session, users can long-press to record a thought — a fragment, a feeling, a question. At the end, SlowFocus generates a summary of the session that includes those thoughts, an emotion tag, and a difficulty rating.",
      p2: "The result isn't a productivity log. It's more like a session journal — something you can look back at to see not just that you worked, but what it felt like and what you were thinking.",
    },
    s5: {
      label: "05 — Prototype",
      screens: [
        { src: "/slowfocus-task.png", caption: "Session entry — where to start today?" },
        { src: "/slowfocus-timer.png", caption: "Timer — long-press to capture a thought" },
        { src: "/slowfocus-accomplish.png", caption: "Session end — emotion + thought review" },
        { src: "/slowfocus-recordings.png", caption: "History — emotion distribution over time" },
      ],
    },
    s6: {
      label: "06 — Where It Is Now",
      p1: "Prototype complete. Not shipped.",
      p2: "The next step is rebuilding the research foundation — 2 interviews isn't enough to validate the core assumptions. Before development, I want to run 6–8 structured interviews with people I don't know, with a screener that selects for the target user: high self-expectation, habitual journaler, uses focus tools regularly.",
      p3: "The goal is App Store launch. This case study will grow with the project.",
      timelineLabel: "Timeline",
      timeline: [
        { status: "done", label: "User interviews (2) + insight synthesis" },
        { status: "done", label: "Figma prototype — 4 core screens" },
        { status: "next", label: "Expanded research (6–8 interviews, screened)" },
        { status: "future", label: "Development + App Store submission" },
        { status: "future", label: "Xiaohongshu launch & community building" },
      ],
    },
    prev: "← Gpark Community", next: "About",
  },
  zh: {
    back: "← 蒙青璇", tag: "用户研究 · 自主项目 · 进行中",
    title: "SlowFocus 专注日志",
    intro: "一款记录数字记录不到的东西的专注计时器：情绪、微小念头，和一段工作的真实质感。这是我第一次尝试认真做用户研究——2次访谈，有框架，有真实的局限。",
    s1: {
      label: "01 — 问题从哪里来",
      p1: "我用专注计时器，我认识的人都在用。几乎所有人都有同一个抱怨：那个数字没有意义。",
      p2: "\u201c我专注了45分钟\u201d技术上是对的，但体验上是空的。它什么都没说——你是进入了心流状态，还是整段时间都在对抗焦虑？你有三个突破，还是在原地打转？",
      callout: "现有专注软件测量的是时长。我想搞清楚时长无法捕捉的是什么——以及一个产品能不能填上这个缺口。",
    },
    s2: {
      label: "02 — 研究（2人，如实说）",
      p1: "我做了2个用户访谈，访谈对象都是我认识的人——是便利抽样，不严格。我如实说这意味着什么：",
      limits: [
        { neg: true, text: "样本量太小，无法做普遍性推断。2个人的经历能告诉你什么是可能的，不能告诉你什么是典型的。" },
        { neg: true, text: "熟人访谈会影响真实性。我听到的一些内容可能受到\u201c想帮忙\u201d心理的影响。" },
        { neg: false, text: "即便如此——这两次访谈产生了具体、可行动的洞察，是靠直觉不能得出的。" },
      ],
      p2: "我围绕三个核心问题设计了访谈：",
      questions: [
        { q: "最近一次你在学习时脑子里冒出一个想记下来的念头，是什么情况？", why: "找到微小念头被压制或流失的那个时刻。" },
        { q: "一段专注结束后，你怎么判断自己有没有真的学进去？", why: "挖出\u201d计时时长\u201d和\u201d主观质量感受\u201d之间的缺口。" },
        { q: "中途切换到其他 App 的时候发生了什么？", why: "理解切换 App 究竟如何打断（或不打断）专注。" },
      ],
    },
    s3: {
      label: "03 — 我发现了什么",
      p1: "三个影响产品方向的洞察：",
      insights: [
        { title: "数字制造了意义断裂", body: "用户不信任计时数据。\u201d我专注了一小时\u201d可以对应十种完全不同的状态，取决于心情、任务难度和外部干扰。数字把这一切都抹平了。" },
        { title: "微小念头被压制，不是被记录", body: "专注时冒出一个念头，用户要么忽视它（然后失去它），要么打断心流切换到别的地方记。没有低摩擦的中间路径——当下记录的\u201d成本感\u201d太高了。" },
        { title: "用户想被自己的努力看见", body: "\u201d我希望一款好的专注软件给我带来掌控感和意义感。\u201d这不是关于效率追踪，而是关于自我认可。把努力过程反馈给用户本身就是一种驱动力。" },
      ],
    },
    s4: {
      label: "04 — 产品方向",
      p1: "核心交互机制：专注过程中，用户可以长按记录一个念头——一个片段、一种感受、一个问题。结束时，SlowFocus 生成一份会话小结，包含这些念头、情绪标签和难度评级。",
      p2: "结果不是一份效率日志，更像是一份会话日记——让你回看时看到的不只是\u201d我工作了多久\u201d，而是\u201d那段时间是什么感觉，我在想什么\u201d。",
    },
    s5: {
      label: "05 — 产品原型",
      screens: [
        { src: "/slowfocus-task.png", caption: "开始页——今天从哪里开始？" },
        { src: "/slowfocus-timer.png", caption: "计时页——长按记录念头" },
        { src: "/slowfocus-accomplish.png", caption: "结束页——情绪回顾与念头汇总" },
        { src: "/slowfocus-recordings.png", caption: "历史页——情绪分布时间线" },
      ],
    },
    s6: {
      label: "06 — 现在在哪里",
      p1: "原型完成，尚未上线。",
      p2: "下一步是重建研究基础——2个人不足以验证核心假设。在开发之前，我想对不认识的人进行6–8次结构化访谈，用筛选问卷锁定目标用户：对自己要求高、有写日记习惯、经常使用专注工具。",
      p3: "目标是 App Store 上线。这个案例会随着项目推进持续更新。",
      timelineLabel: "进度",
      timeline: [
        { status: "done", label: "用户访谈（2人）+ 洞察提炼" },
        { status: "done", label: "Figma 原型——4个核心页面" },
        { status: "next", label: "扩大研究规模（6–8人，带筛选问卷）" },
        { status: "future", label: "开发 + 提交 App Store" },
        { status: "future", label: "小红书上线与社区运营" },
      ],
    },
    prev: "← Gpark 社区研究", next: "关于",
  },
};

export default function SlowFocusCase() {
  const { lang } = useLang();
  const c = t[lang];
  const color = "#4f4f9c";

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid var(--border)", padding: "0 2rem", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "var(--bg)", zIndex: 50 }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem" }}>{c.back}</Link>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <span style={{ color: "var(--border)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>03 / 03</span>
          <LangToggle />
        </div>
      </nav>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 2rem 8rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>{c.tag}</p>
        <h1 className="font-display" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", lineHeight: 1.1, color: "var(--text)", marginBottom: "1.5rem" }}>{c.title}</h1>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "3.5rem", maxWidth: "600px" }}>{c.intro}</p>

        <S label={c.s1.label}>
          <p>{c.s1.p1}</p>
          <p>{c.s1.p2}</p>
          <Callout>{c.s1.callout}</Callout>
        </S>

        <S label={c.s2.label}>
          <p>{c.s2.p1}</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {c.s2.limits.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.75rem", color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                <span style={{ color: item.neg ? "var(--border)" : "var(--accent)", flexShrink: 0 }}>—</span>{item.text}
              </li>
            ))}
          </ul>
          <p>{c.s2.p2}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {c.s2.questions.map((q) => (
              <div key={q.q} style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "1rem 1.25rem", background: "var(--surface)" }}>
                <p style={{ color: "var(--text)", fontSize: "0.875rem", marginBottom: "0.4rem", fontStyle: lang === "en" ? "italic" : "normal" }}>{lang === "en" ? `"${q.q}"` : q.q}</p>
                <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{lang === "en" ? `Why: ${q.why}` : `目的：${q.why}`}</p>
              </div>
            ))}
          </div>
        </S>

        <S label={c.s3.label}>
          <p>{c.s3.p1}</p>
          {c.s3.insights.map((ins) => (
            <div key={ins.title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "6px", padding: "1.25rem" }}>
              <p style={{ color: "var(--text)", fontWeight: 500, fontSize: "0.9rem", marginBottom: "0.4rem" }}>{ins.title}</p>
              <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{ins.body}</p>
            </div>
          ))}
        </S>

        <S label={c.s4.label}>
          <p>{c.s4.p1}</p>
          <p>{c.s4.p2}</p>
        </S>

        <S label={c.s5.label}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
            {c.s5.screens.map((screen) => (
              <div key={screen.src}>
                <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)" }}>
                  <Image src={screen.src} alt={screen.caption} width={400} height={700} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <p style={{ color: "var(--muted)", fontSize: "0.78rem", marginTop: "0.5rem", lineHeight: 1.5 }}>{screen.caption}</p>
              </div>
            ))}
          </div>
        </S>

        <S label={c.s6.label}>
          <p>{c.s6.p1}</p>
          <p>{c.s6.p2}</p>
          <p>{c.s6.p3}</p>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "1.25rem 1.5rem" }}>
            <p style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{c.s6.timelineLabel}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {c.s6.timeline.map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.status === "done" ? "var(--accent)" : item.status === "next" ? color : "var(--border)", flexShrink: 0 }} />
                  <span style={{ color: item.status === "future" ? "var(--muted)" : "var(--text)", fontSize: "0.875rem", opacity: item.status === "future" ? 0.6 : 1 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </S>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", marginTop: "4rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/work/gpark" style={{ textDecoration: "none", color: "var(--muted)", fontSize: "0.85rem" }}>{c.prev}</Link>
          <Link href="/about" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", padding: "1rem 1.25rem", borderRadius: "4px", color: "var(--text)", fontStyle: "italic", lineHeight: 1.7 }}>{children}</p>
  );
}
