"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
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
              className={`p-2 rounded-full border transition-all ${
                scrolled
                  ? "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  : "border-white/20 bg-white/5 text-white hover:bg-white/20"
              }`}
              aria-label="Toggle Theme"
            >
              <span suppressHydrationWarning>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </span>
            </button>

            <div
              className={`hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border transition-colors backdrop-blur-md cursor-pointer ${scrolled ? "bg-gray-100/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300" : "bg-white/10 border-white/20 text-white"}`}
            >
              <button
                onClick={toggleLanguage}
                className="hover:text-brand-yelo transition-colors uppercase"
              >
                {language === "ar" ? "EN" : "AR"}
              </button>
              <span className="opacity-40">/</span>
              <span className="hover:text-brand-yelo transition-colors opacity-70">
                SAR
              </span>
            </div>

            <button
              className={`hidden md:flex border px-6 py-2.5 rounded-full font-bold transition-all items-center gap-2 transform hover:scale-105 active:scale-95 ${scrolled ? "bg-gray-900 dark:bg-brand-yelo dark:text-black text-white hover:bg-black dark:hover:bg-yellow-400 border-transparent shadow-xl" : "border-white/30 bg-white/10 text-white hover:bg-white hover:text-black backdrop-blur-md"}`}
            >
              {language === "ar" ? "تسجيل الدخول" : "Sign In"}
            </button>
            <button
              onClick={onToggleMenu}
              className={`transition-colors lg:hidden p-2 ${scrolled ? "text-gray-800 dark:text-gray-200" : "text-white"} hover:text-brand-yelo`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm"
          onClick={onCloseMenu}
        >
          <div
            className="absolute inset-e-0 top-0 h-full w-[90%] sm:w-[86%] max-w-sm bg-white dark:bg-brand-charcoal border-s border-gray-200 dark:border-gray-800 p-6 pt-24 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
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
                  className="w-full text-start px-4 py-3 rounded-2xl text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-900"
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
            {/* <div className="mt-8 space-y-3">
              <button
                onClick={onToggleTheme}
                className="w-full rounded-2xl bg-gray-900 text-white dark:bg-brand-yelo dark:text-black py-3 font-bold"
              >
                Switch to {isDark ? "Light" : "Dark"} Mode
              </button>
              <button className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 py-3 font-bold text-gray-800 dark:text-gray-200">
                Sign In
              </button>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
