"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "zh";
interface LangCtx { lang: Lang; toggle: () => void }

const Ctx = createContext<LangCtx>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Lang | null;
    if (saved === "zh" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.body.className = lang === "zh" ? "zh" : "";
  }, [lang]);

  const toggle = () => {
    const next: Lang = lang === "en" ? "zh" : "en";
    setLang(next);
    localStorage.setItem("portfolio-lang", next);
  };

  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
