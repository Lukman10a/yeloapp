"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "./homeData";
import { useLanguage } from "@/app/providers";

type HomeNavbarProps = {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  isDark: boolean;
  onToggleTheme: () => void;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export default function HomeNavbar({
  scrolled,
  mobileMenuOpen,
  isDark,
  onToggleTheme,
  onToggleMenu,
  onCloseMenu,
}: HomeNavbarProps) {
  const { language, toggleLanguage } = useLanguage();
  const toArabic = () => {
    if (language !== "ar") toggleLanguage();
  };
  const toEnglish = () => {
    if (language !== "en") toggleLanguage();
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-brand-charcoal/90 backdrop-blur-xl py-4 shadow-md border-b border-gray-200/50 dark:border-gray-800"
            : "bg-transparent py-4 sm:py-5 md:py-8"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 relative z-50 transition-transform active:scale-95 duration-200"
          >
            <span
              className={`text-2xl md:text-3xl font-black transition-colors ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
            >
              Yelo<span className="text-brand-yelo">.</span>
            </span>
            <span
              className={`text-lg md:text-xl font-bold tracking-widest mt-1 hidden sm:block transition-colors ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
            >
              | يلو
            </span>
          </Link>

          <div className="hidden lg:flex gap-8 absolute inset-s-1/2 -translate-x-1/2 rtl:translate-x-1/2">
            {NAV_LINKS.map((item) => (
              <Link
                key={item}
                href={
                  item === "Fleet"
                    ? "/fleet"
                    : item === "Monthly Subscription"
                      ? "/monthly-subscription"
                      : item === "Offers"
                        ? "/offers"
                        : item === "Locations"
                          ? "/locations"
                          : "/"
                }
                className="relative group cursor-pointer"
              >
                <span
                  className={`font-medium transition-colors hover:text-brand-yelo ${scrolled ? "text-gray-700 dark:text-gray-300" : "text-white"}`}
                >
                  {language === "ar"
                    ? {
                        Fleet: "الأسطول",
                        "Monthly Subscription": "اشتراك شهري",
                        Offers: "العروض",
                        Locations: "الفروع",
                      }[item] || item
                    : item}
                </span>
                <span className="absolute -bottom-2 inset-s-0 w-0 h-0.5 bg-brand-yelo transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={onToggleTheme}
              className={`relative overflow-hidden h-11 w-11 rounded-2xl border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] grid place-items-center ${
                scrolled
                  ? "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm hover:shadow-md"
                  : "border-white/20 bg-white/5 text-white hover:bg-white/20 backdrop-blur-md"
              }`}
              aria-label="Toggle Theme"
            >
              <span suppressHydrationWarning className="relative h-5 w-5">
                <Sun
                  size={18}
                  className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-75 scale-60 opacity-0"}`}
                />
                <Moon
                  size={18}
                  className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isDark ? "rotate-75 scale-60 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                />
              </span>
            </button>

            <div
              className={`hidden md:grid grid-cols-2 items-center p-1 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] backdrop-blur-md relative w-23 ${scrolled ? "bg-gray-100/70 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300" : "bg-white/10 border-white/20 text-white"}`}
            >
              <span
                className={`absolute top-1 bottom-1 inset-s-1 w-10.5 rounded-full bg-brand-yelo shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${language === "ar" ? "translate-x-10.5" : "translate-x-0"}`}
              />
              <button
                onClick={toEnglish}
                className={`relative z-10 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-colors duration-300 ${language === "en" ? "text-black" : "text-inherit hover:text-brand-yelo"}`}
              >
                EN
              </button>
              <button
                onClick={toArabic}
                className={`relative z-10 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-colors duration-300 ${language === "ar" ? "text-black" : "text-inherit hover:text-brand-yelo"}`}
              >
                AR
              </button>
            </div>

            <button
              className={`hidden md:flex border px-6 py-2.5 rounded-full font-bold transition-all items-center gap-2 transform hover:scale-105 active:scale-95 ${scrolled ? "bg-gray-900 dark:bg-brand-yelo dark:text-black text-white hover:bg-black dark:hover:bg-yellow-400 border-transparent shadow-xl" : "border-white/30 bg-white/10 text-white hover:bg-white hover:text-black backdrop-blur-md"}`}
            >
              {language === "ar" ? "تسجيل الدخول" : "Sign In"}
            </button>
            <button
              onClick={onToggleMenu}
              className={`lg:hidden relative h-11 w-11 rounded-2xl border transition-all duration-300 ${scrolled ? "border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200" : "border-white/25 bg-white/10 text-white backdrop-blur-md"} hover:border-brand-yelo/60 hover:text-brand-yelo`}
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0"}`}
                ></span>
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
                ></span>
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0"}`}
                ></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onCloseMenu}
      >
        <div
          className={`absolute inset-e-0 top-0 h-full w-[90%] sm:w-[86%] max-w-sm bg-white dark:bg-brand-charcoal border-s border-gray-200 dark:border-gray-800 p-6 pt-24 shadow-2xl transition-transform duration-350 ease-out ${mobileMenuOpen ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full"}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-2">
            <div className="grid grid-cols-2 items-center rounded-xl bg-gray-100 dark:bg-gray-800 p-1 relative w-24">
              <span
                className={`absolute top-1 bottom-1 inset-s-1 w-11 rounded-lg bg-brand-yelo shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${language === "ar" ? "translate-x-11" : "translate-x-0"}`}
              />
              <button
                onClick={toEnglish}
                className={`relative z-10 px-3 py-1.5 rounded-lg text-xs font-black transition-colors duration-300 ${language === "en" ? "text-black" : "text-gray-600 dark:text-gray-300"}`}
              >
                EN
              </button>
              <button
                onClick={toArabic}
                className={`relative z-10 px-3 py-1.5 rounded-lg text-xs font-black transition-colors duration-300 ${language === "ar" ? "text-black" : "text-gray-600 dark:text-gray-300"}`}
              >
                AR
              </button>
            </div>

            <button
              onClick={onToggleTheme}
              className="relative overflow-hidden h-10 w-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 grid place-items-center text-gray-700 dark:text-gray-200 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              aria-label="Toggle Theme"
            >
              <Sun
                size={16}
                className={`absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-75 scale-60 opacity-0"}`}
              />
              <Moon
                size={16}
                className={`absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isDark ? "rotate-75 scale-60 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
              />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <Link
                key={item}
                href={
                  item === "Fleet"
                    ? "/fleet"
                    : item === "Monthly Subscription"
                      ? "/monthly-subscription"
                      : item === "Offers"
                        ? "/offers"
                        : item === "Locations"
                          ? "/locations"
                          : "/"
                }
                onClick={onCloseMenu}
                className="w-full text-start px-4 py-3 rounded-2xl text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                {language === "ar"
                  ? {
                      Fleet: "الأسطول",
                      "Monthly Subscription": "اشتراك شهري",
                      Offers: "العروض",
                      Locations: "الفروع",
                    }[item] || item
                  : item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
