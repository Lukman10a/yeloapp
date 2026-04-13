"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";

type LanguageContextType = {
  language: "en" | "ar";
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [language, setLanguage] = useState<"en" | "ar">(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const saved = localStorage.getItem("language");
    return saved === "ar" ? "ar" : "en";
  });

  useEffect(() => {
    // Update document dir and lang on change
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </LanguageContext.Provider>
  );
}
