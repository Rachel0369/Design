"use client";
import Link from "next/link";
import Image from "next/image";
import LangToggle from "../../components/LangToggle";
import { useLang } from "../../components/LanguageContext";

const t = {
  en: {
    back: "← Rachel Meng",
    tag: "Product Design & Research",
    title: "EatToday",
    intro: "A cafeteria mini-program for a graduate school campus. Built solo from user observation to MVP. 593 users, 77% daily active retention.",
    stats: [{ v: "593", l: "Total users" }, { v: "77%", l: "Daily active retention" }, { v: "+50%", l: "DAU lift (gray test)" }],
    s1: {
      label: "01 — Problem",
      p1: "The school cafeteria posted its daily menu on a physical board at the entrance. Students couldn't see it remotely, so they'd ask in group chats: \u201cWhat\u2019s for lunch today?\u201d",
      p2: "The obvious solution is a digital menu. But I noticed something: the actual question people were asking wasn't \u201cwhat\u2019s on the menu\u201d — it was \u201cis it worth going?\u201d",
      callout: "The problem wasn't information access. It was decision support under time pressure.",
      p3: "A static digital menu solves half the problem. It tells you what exists, but gives you no signal about quality. Students still had to ask around or just guess.",
    },
    s2: {
      label: "02 — Research",
      p1: "I talked to students informally about their cafeteria habits — not structured interviews, just observation and casual conversations. Three patterns came up consistently:",
      items: [
        `People made decisions based on social proof, not just personal preference. \"If no one eats it, maybe it's not good.\"`,
        "The lunch window is short (~25 min). A wrong choice costs real time and calories.",
        "The group chat pings were a workaround for the absence of any collective taste signal.",
      ],
      p2: "The insight: the core value wasn't a menu viewer. It was a lightweight collective decision layer on top of the menu.",
    },
    s3: {
      label: "03 — Key Product Decision",
      p1: "I built EatToday as a menu tool first — daily dishes, categorized by type, accessible from anywhere. That solved the information problem.",
      p2: "Then I added a thumbs up / thumbs down on each dish. Simple, anonymous, no friction.",
      callout: "The implementation cost was low — no privacy concerns, no complex backend logic. But the behavioral effect was significant.",
      p3: "In gray testing, DAU went from ~40 to ~60 in the first week. The feedback I kept hearing: “I check what other people liked.” Even the cafeteria staff started using the like counts to adjust which dishes they prepared more of.",
      p4: "This validated a principle I've returned to since: high-ROI features amplify core needs, they don't add to them.",
    },
    s4: {
      label: "04 — Product",
      caption: "Left: menu view with thumbs-up counts per dish. Right: user profile with login streak and interaction count.",
    },
    s5: {
      label: "05 — Outcomes & Reflection",
      p1: "593 registered users on a campus of roughly 2,000 students. 77% daily active retention among returning users — high for a utility tool with no push notifications.",
      p2: "The 77% retention came from habit formation: students checked EatToday the same way they checked the weather. The product became part of a daily routine, not a one-off lookup.",
      reflection: "What I'd do differently: I didn't run a structured research phase before building. The insight about decision-making vs. information-access came from observation, not deliberate research design. I got lucky that my intuition was right — but I can't always count on that.",
    },
    next: "Next case",
    nextTitle: "Gpark Community",
  },
  zh: {
    back: "← 蒙青璇",
    tag: "产品设计与研究",
    title: "EatToday",
    intro: "一个为研究生院校园设计的食堂小程序。从用户观察到 MVP 全程独立完成。593 名用户，活跃日留存 77%。",
    stats: [{ v: "593", l: "累计用户数" }, { v: "77%", l: "活跃日留存率" }, { v: "+50%", l: "灰测首周 DAU 提升" }],
    s1: {
      label: "01 — 问题",
      p1: "学校食堂的每日菜单只贴在食堂门口的公告板上。同学们无法远程查看，只能在群聊里问：\u201d今天食堂吃什么？\u201d",
      p2: "显而易见的解法是做一个数字菜单。但我注意到一件事：大家真正问的问题不是\u201d今天有什么菜\u201d，而是\u201d值不值得专门跑一趟去吃\u201d。",
      callout: "问题的核心不是信息获取，而是在时间压力下的就餐决策支持。",
      p3: "一个静态的数字菜单只解决了一半问题。它告诉你有什么，但不给你任何质量信号。同学们还是得四处打听或者碰运气。",
    },
    s2: {
      label: "02 — 研究",
      p1: "我和同学们非正式地聊了聊他们的食堂习惯——不是结构化访谈，而是观察和随机对话。有三个模式反复出现：",
      items: [
        "大家的决策依赖社交证明，而不只是个人偏好。\u201d如果没人吃，可能不好吃。\u201d",
        "午餐时间窗口很短（约 25 分钟），选错了是真实的时间和热量损失。",
        "群里发消息问，本质上是在填补一个集体口味信号缺失的空白。",
      ],
      p2: "洞察：核心价值不是一个菜单查看器，而是在菜单上叠加一层轻量的集体决策信号。",
    },
    s3: {
      label: "03 — 关键产品决策",
      p1: "我先把 EatToday 做成一个菜单工具——按类别展示每日菜品，可以随时查看。这解决了信息获取问题。",
      p2: "然后我给每道菜加了一个大拇指点赞/踩的功能。简单、匿名、零摩擦。",
      callout: "实现成本很低——不涉及隐私采集，没有复杂的后端逻辑。但行为效果显著。",
      p3: "在灰度测试中，DAU 在第一周从约 40 人提升到 60 人。我反复听到的反馈是：\u201d我会去看看大家点赞了什么。\u201d甚至食堂的工作人员也开始用点赞数来决定多备哪道菜。",
      p4: "这验证了一个我之后一直在用的判断：高 ROI 的功能是对核心需求的精准放大，而不是在需求旁边再加一个功能。",
    },
    s4: {
      label: "04 — 产品截图",
      caption: "左：菜单页，显示每道菜的点赞数。右：个人页，展示登录天数和互动次数。",
    },
    s5: {
      label: "05 — 结果与反思",
      p1: "在约 2000 人的校园里，EatToday 注册用户 593 人。回访用户的活跃日留存达到 77%——对一个没有推送通知的工具类产品来说，这个数字相当高。",
      p2: "77% 的留存来自习惯养成：同学们查 EatToday 就像查天气一样，它成为了每天的固定动作，而不是偶尔查一次的工具。",
      reflection: "如果重来，我会先做结构化研究再动手开发。关于\u201d决策支持\u201d而非\u201d信息获取\u201d的洞察来自于观察，不是刻意的研究设计。这次我的直觉刚好对了——但这不是可以依赖的方法。",
    },
    next: "下一个案例",
    nextTitle: "Gpark 社区研究",
  },
};

export default function EatTodayCase() {
  const { lang } = useLang();
  const c = t[lang];
  const accent = "#8a6010";

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid var(--border)", padding: "0 2rem", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "var(--bg)", zIndex: 50 }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem" }}>{c.back}</Link>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <span style={{ color: "var(--border)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>01 / 04</span>
          <LangToggle />
        </div>
      </nav>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 2rem 8rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>{c.tag}</p>
        <h1 className="font-display" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", lineHeight: 1.1, color: "var(--text)", marginBottom: "1.5rem" }}>{c.title}</h1>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "3.5rem", maxWidth: "600px" }}>{c.intro}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)", marginBottom: "4rem", borderRadius: "8px", overflow: "hidden" }}>
          {c.stats.map((s) => (
            <div key={s.l} style={{ background: "var(--surface)", padding: "1.5rem 1.25rem" }}>
              <div className="font-display" style={{ fontSize: "2rem", color: accent, marginBottom: "0.25rem" }}>{s.v}</div>
              <div style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{s.l}</div>
            </div>
          ))}
        </div>

        <S label={c.s1.label}>
          <p>{c.s1.p1}</p>
          <p>{c.s1.p2}</p>
          <Callout>{c.s1.callout}</Callout>
          <p>{c.s1.p3}</p>
        </S>

        <S label={c.s2.label}>
          <p>{c.s2.p1}</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {c.s2.items.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>—</span>{item}
              </li>
            ))}
          </ul>
          <p>{c.s2.p2}</p>
        </S>

        <S label={c.s3.label}>
          <p>{c.s3.p1}</p>
          <p>{c.s3.p2}</p>
          <Callout>{c.s3.callout}</Callout>
          <p>{c.s3.p3}</p>
          <p style={{ color: "var(--text)", fontStyle: lang === "en" ? "italic" : "normal" }}>{c.s3.p4}</p>
        </S>

        <S label={c.s4.label}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {["/eattody-menu.png", "/eattody-profile.png"].map((src, i) => (
              <div key={i} style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)" }}>
                <Image src={src} alt="EatToday screen" width={400} height={700} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            ))}
          </div>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{c.s4.caption}</p>
        </S>

        <S label={c.s5.label}>
          <p>{c.s5.p1}</p>
          <p>{c.s5.p2}</p>
          <p style={{ color: "var(--muted)", borderLeft: "2px solid var(--border)", paddingLeft: "1rem", fontStyle: lang === "en" ? "italic" : "normal" }}>{c.s5.reflection}</p>
        </S>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", marginTop: "4rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{c.next}</span>
          <Link href="/work/gpark" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
            <span className="font-display" style={{ fontSize: "1.5rem", color: "var(--text)" }}>{c.nextTitle}</span>
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
