"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CarFront,
  MapPin,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import HomeNavbar from "../home/HomeNavbar";
import SafeImage from "../home/SafeImage";
import { MONTHLY_FEATURES, STEPS } from "./subData";

export default function MonthlySubPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-offwhite dark:bg-brand-charcoal text-gray-900 dark:text-gray-100 font-sans selection:bg-brand-yelo selection:text-black transition-colors duration-500 pb-0">
      <HomeNavbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        isDark={isDark}
        onToggleTheme={() => setTheme(isDark ? "light" : "dark")}
        onToggleMenu={() => setMobileMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMobileMenuOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] w-full flex items-center justify-start pt-24 pb-16 md:pb-20 bg-brand-charcoal">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2000&auto=format&fit=crop"
            alt="Handing over car keys"
            sizes="100vw"
            className="object-cover object-center w-full h-full"
            preload
            quality={60}
          />
          <div className="absolute inset-0 bg-black/60 z-10 dark:bg-black/80 transition-colors duration-700"></div>
          <div className="absolute inset-0 bg-linear-to-t from-brand-offwhite dark:from-brand-charcoal via-transparent to-transparent z-10"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 z-20 w-full relative mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col xl:flex-row gap-12 items-start justify-between"
          >
            {/* Left Hero Text */}
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-4 tracking-tight text-white drop-shadow-xl">
                Yelo Monthly{" "}
                <span className="text-brand-yelo">Subscription</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 md:text-gray-300 max-w-xl font-medium tracking-wide">
                Subscribe today and enjoy the endless benefits of owning a
                vehicle without the hassle of ownership.
              </p>
            </div>

            {/* Right Booking Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-none overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              {/* Tabs */}
              <div className="flex overflow-x-auto scrollbar-hide bg-brand-charcoal dark:bg-black p-1 text-white">
                {[
                  "Search Now",
                  "Monthly Subscription",
                  "Manage My Booking",
                  "Yelo Limousine",
                ].map((tab, idx) => (
                  <button
                    key={idx}
                    className={`whitespace-nowrap px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                      tab === "Monthly Subscription"
                        ? "bg-white dark:bg-gray-800 text-brand-charcoal dark:text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {idx === 0 && <CarFront size={16} />}
                      {idx === 1 && <CalendarDays size={16} />}
                      {idx === 2 && <CalendarDays size={16} />}
                      {idx === 3 && <CarFront size={16} />}
                      {tab}
                    </div>
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <div className="p-6 sm:p-8 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Location Group */}
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                        Pick up & Return location
                      </label>
                      <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded text-brand-yelo focus:ring-brand-yelo"
                        />
                        Return to a different location
                      </label>
                    </div>
                    <div className="relative">
                      <MapPin
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="text"
                        placeholder="Search Location"
                        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-xl py-3.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-yelo dark:focus:ring-brand-yelo transition-all font-semibold"
                      />
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="col-span-1">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Pick up date & time
                    </label>
                    <div className="flex w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
                      <div className="relative w-2/3 border-r border-gray-200 dark:border-gray-700">
                        <input
                          type="text"
                          placeholder="Date"
                          className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-brand-yelo transition-all font-semibold"
                        />
                      </div>
                      <div className="w-1/3 relative">
                        <input
                          type="text"
                          placeholder="Time"
                          className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-3.5 px-3 focus:outline-none focus:ring-2 focus:ring-brand-yelo transition-all font-semibold text-center"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contract */}
                  <div className="col-span-1 md:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Contract Length
                    </label>
                    <div className="relative">
                      <select className="appearance-none w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-400 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-brand-yelo transition-all font-semibold cursor-pointer">
                        <option>--Select--</option>
                        <option>1 Month</option>
                        <option>3 Months</option>
                        <option>6 Months</option>
                        <option>12 Months</option>
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        size={20}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 font-bold border-b border-gray-400 pb-0.5 hover:text-brand-yelo hover:border-brand-yelo transition-all text-sm"
                  >
                    Know More
                  </Link>
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <span className="text-brand-charcoal dark:text-brand-yelo font-bold text-sm hidden sm:block">
                      Need More than 12 month?
                    </span>
                    <button className="bg-brand-charcoal dark:bg-brand-yelo text-white dark:text-black py-4 px-8 rounded-xl font-bold flex-1 sm:flex-none flex justify-center items-center gap-2 hover:bg-gray-800 dark:hover:bg-yellow-400 transition-all shadow-lg shadow-gray-900/20 active:scale-95 group">
                      Search{" "}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="relative z-10 -mt-8 py-20 bg-brand-offwhite dark:bg-brand-charcoal transition-colors duration-500">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal dark:text-brand-yelo mb-6 tracking-tight">
            Why the Monthly Subscription from Yelo?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            If you desire the convenience of regularly driving a vehicle without
            the hassle of managing its maintenance, insurance, and any other
            added fees then a long-term rental is the perfect solution for you.
          </p>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-black text-brand-charcoal dark:text-brand-yelo mb-4 tracking-tight">
            Instant Rental
          </h3>
          <p className="text-gray-600 dark:text-gray-300 font-medium md:text-lg">
            Get your car in hassle-free process with a minimal paperwork
          </p>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 pt-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {MONTHLY_FEATURES.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.7 }}
                className="group flex flex-col"
              >
                <div className="relative w-full h-64 sm:h-72 rounded-3xl overflow-hidden mb-8 shadow-xl">
                  <SafeImage
                    src={feat.img}
                    alt={feat.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    quality={75}
                  />
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-brand-yelo/30 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl md:text-2xl font-black text-brand-charcoal dark:text-brand-yelo mb-3 tracking-tight">
                    {feat.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3 Step Journey */}
        <div className="bg-gray-100 dark:bg-gray-900/50 py-24 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-brand-charcoal dark:text-brand-yelo mb-4 tracking-tight">
              3 steps Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium md:text-lg mb-16">
              We made it easy for you, get your car in few taps
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Responsive connecting dashed line */}
              <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-gray-300 dark:border-gray-700 z-0"></div>

              {STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="relative z-10 flex flex-col items-center group"
                >
                  <div className="w-14 h-14 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-xl font-black text-brand-charcoal dark:text-brand-yelo mb-8 group-hover:bg-brand-yelo group-hover:text-black transition-colors shadow-lg shadow-black/5 dark:shadow-black/40">
                    {step.num}
                  </div>
                  <h5 className="text-xl md:text-2xl font-black text-brand-charcoal dark:text-white mb-3">
                    {step.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 font-medium max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <button className="bg-brand-charcoal dark:bg-brand-yelo text-white dark:text-black font-black px-10 py-5 rounded-2xl hover:bg-gray-900 dark:hover:bg-yellow-400 transition-colors shadow-xl hover:scale-105 active:scale-95">
                Discover more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
