"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Heart,
  Plane,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import SafeImage from "./SafeImage";
import { BENTO_CATEGORIES } from "./homeData";

const Facebook = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Twitter = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const Linkedin = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const Youtube = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function AdditionalSections() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/20 transition-colors">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
              Find Your Perfect Ride
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-xl">
              From daily commutes to cross-country adventures — we have the
              right vehicle for every journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[220px] sm:auto-rows-[250px] md:auto-rows-[300px]">
            {BENTO_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative rounded-4xl overflow-hidden cursor-pointer shadow-md dark:shadow-none hover:shadow-2xl transition-all duration-500 ${cat.span}`}
              >
                <SafeImage
                  src={cat.img}
                  alt={cat.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={50}
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/30 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>

                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-20 pr-6">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-black mb-2 tracking-tight text-white group-hover:text-brand-yelo transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-200 md:text-gray-300 font-medium md:text-lg line-clamp-1">
                    {cat.desc}
                  </p>
                  <Link
                    href="/fleet"
                    className="mt-4 flex items-center text-white font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-white/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm"
                  >
                    View Fleet <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-16 md:text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            The Yelo Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 min-h-90 sm:min-h-100 md:min-h-0 relative rounded-[2.5rem] overflow-hidden group shadow-lg dark:shadow-none hover:shadow-2xl transition-all"
          >
            <SafeImage
              src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=1200&auto=format&fit=crop"
              alt="Interior"
              sizes="(max-width: 768px) 100vw, 66vw"
              quality={60}
              className="object-cover object-right group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-r from-gray-950/95 via-gray-950/70 to-transparent z-10"></div>

            <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-14 max-w-md md:max-w-xl">
              <span className="text-brand-yelo font-black tracking-widest uppercase text-xs md:text-sm mb-4">
                Amyali Rewards
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                The Loyalty Program You Deserve
              </h3>
              <p className="text-gray-300 mb-8 md:mb-10 text-base sm:text-lg md:text-xl font-medium">
                Earn points on every drive. Upgrade your tier. Unlock exclusive
                premium benefits across the GCC.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Rent", "Earn", "Redeem"].map((pill) => (
                  <span
                    key={pill}
                    className="px-6 md:px-8 py-3 rounded-full border border-gray-400/30 text-white font-bold text-sm md:text-base hover:bg-brand-yelo hover:border-brand-yelo hover:text-black transition-colors cursor-pointer backdrop-blur-md bg-white/5"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-72 sm:h-75 md:h-auto relative rounded-[2.5rem] overflow-hidden group border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col justify-end transition-all"
          >
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-brand-yelo group-hover:text-black transition-colors text-blue-600 dark:text-blue-400">
              <Plane size={32} />
            </div>
            <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white">
              Airport Rentals
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-medium leading-relaxed">
              Seamless pickup at 15+ airports across Saudi Arabia. Step off the
              plane, into your car.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-72 sm:h-75 md:h-auto relative rounded-[2.5rem] overflow-hidden group border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col justify-end transition-all"
          >
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white z-10">
              Yelo Shield Premium
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-medium z-10 leading-relaxed">
              Full-coverage protection options for zero-liability, 100% peace of
              mind on every journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800 relative overflow-hidden transition-colors">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24 text-center">
            {[
              { num: "500K+", label: "Happy Customers" },
              { num: "50+", label: "Locations In KSA" },
              { num: "100+", label: "Car Models Available" },
              { num: "10+", label: "Years of Trust" },
            ].map((stat, i) => (
              <motion.div
                key={stat.num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-6xl lg:text-[80px] font-black text-gray-900 dark:text-white leading-none mb-3 md:mb-6">
                  {stat.num}
                </div>
                <div className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider text-[10px] md:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 border-t border-gray-100 dark:border-gray-800 pt-12 md:pt-16">
            {[
              {
                title: "Fully Insured Fleet",
                desc: "Comprehensive coverage options tailored for completely stress-free driving experiences.",
                icon: ShieldCheck,
              },
              {
                title: "24/7 Priority Support",
                desc: "Our dedicated mobile response units and customer care team are always standing by.",
                icon: Heart,
              },
              {
                title: "Instant Smart Booking",
                desc: "Reserve your vehicle in seconds. Manage seamlessly through our iOS and Android app.",
                icon: Clock,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 p-6 sm:p-8 rounded-4xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-brand-yelo dark:hover:border-brand-yelo transition-colors shadow-sm"
              >
                <feature.icon className="text-gray-900 dark:text-white flex-none bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 w-16 h-16" />
                <div>
                  <h4 className="text-xl font-black mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-screen-2xl mx-auto px-4 md:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-charcoal dark:bg-black rounded-[2.5rem] md:rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center border border-gray-800"
        >
          <div className="absolute inset-0 bg-linear-to-bl from-brand-yelo/20 via-transparent to-brand-charcoal dark:to-black z-0 pointer-events-none"></div>

          <div className="p-8 md:p-16 lg:p-24 z-10 w-full md:w-1/2 md:pr-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
              Rent Smarter. <br /> Drive Better.
            </h2>
            <p className="text-gray-300 md:text-gray-400 text-lg md:text-xl font-medium mb-10 max-w-md leading-relaxed">
              Book, manage, and track your rental from anywhere with the Yelo
              app. Experience absolute mobility in your pocket.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-gray-900 px-6 md:px-8 py-4 rounded-2xl font-black text-sm md:text-base flex items-center gap-3 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-lg w-full sm:w-auto justify-center">
                <Smartphone size={22} /> App Store
              </button>
              <button className="bg-transparent border-2 border-gray-700 text-white px-6 md:px-8 py-4 rounded-2xl font-black text-sm md:text-base flex items-center gap-3 hover:border-gray-500 hover:bg-white/5 active:scale-95 transition-all w-full sm:w-auto justify-center">
                <Smartphone size={22} /> Google Play
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center p-6 sm:p-10 md:p-0 z-10 relative h-95 sm:h-100 md:h-auto mt-6 md:mt-0 overflow-hidden md:overflow-visible">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="w-56 sm:w-64 md:w-72 lg:w-80 h-112 sm:h-125 md:h-150 bg-gray-50 dark:bg-gray-900 border-10 border-gray-800 dark:border-gray-800 rounded-[40px] shadow-2xl shadow-black/60 relative overflow-hidden md:absolute md:-bottom-32 md:right-16 rotate-6 md:rotate-15 origin-bottom-right"
            >
              <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
              <div className="absolute top-8 left-6 right-6 h-32 bg-gray-100 dark:bg-gray-800 rounded-3xl"></div>
              <div className="absolute top-48 left-6 right-6 h-24 bg-gray-100 dark:bg-gray-800 rounded-2xl"></div>
              <div className="absolute top-76 left-6 right-6 h-24 bg-gray-100 dark:bg-gray-800 rounded-2xl"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 border-t border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 tracking-tight">
            Where Will Your Journey Begin?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h3 className="text-xl md:text-2xl font-black mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                Top Cities in Saudi Arabia
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Riyadh",
                  "Jeddah",
                  "Dammam",
                  "Mecca",
                  "Medina",
                  "Tabuk",
                  "Abha",
                  "Taif",
                  "Hail",
                  "Al Jubail",
                ].map((city) => (
                  <span
                    key={city}
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-5 py-3 rounded-full text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-brand-yelo hover:border-gray-900 dark:hover:border-brand-yelo shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                International Destinations
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "UAE",
                  "Morocco",
                  "Oman",
                  "Egypt",
                  "Switzerland",
                  "Turkey",
                  "Germany",
                ].map((country) => (
                  <span
                    key={country}
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-5 py-3 rounded-full text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-brand-yelo hover:border-gray-900 dark:hover:border-brand-yelo shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-950 pt-20 md:pt-28 pb-8 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden transition-colors">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6 sm:gap-x-8 gap-y-10 md:gap-y-12 mb-16 md:mb-20">
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                  Yelo<span className="text-brand-yelo">.</span>
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-8 leading-relaxed font-medium md:max-w-xs">
                Beyond your expectations. Premium car rental services setting
                the standard across Saudi Arabia and the GCC.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-5 py-3 rounded-xl text-sm font-black flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  App Store
                </button>
                <button className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-5 py-3 rounded-xl text-sm font-black flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  Google Play
                </button>
              </div>
            </div>

            {[
              {
                title: "Company",
                links: [
                  "About Us",
                  "Careers",
                  "Franchise",
                  "Media Center",
                  "Contact Us",
                ],
              },
              {
                title: "Rent",
                links: [
                  "Our Fleet",
                  "Branches",
                  "Special Offers",
                  "Long-term Lease",
                  "Yelo Limousine",
                ],
              },
              {
                title: "Useful Links",
                links: [
                  "Terms & Conditions",
                  "Privacy Policy",
                  "FAQ",
                  "Amyali Program",
                  "Site Map",
                ],
              },
              {
                title: "Support",
                links: [
                  "Customer Service",
                  "Roadside Assistance",
                  "Feedback",
                  "Find a Branch",
                ],
              },
            ].map((col) => (
              <div key={col.title} className="col-span-1">
                <h4 className="text-gray-900 dark:text-white font-black tracking-widest text-xs uppercase mb-6 md:mb-8">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 text-sm font-semibold hover:text-brand-yelo dark:hover:text-brand-yelo transition-colors relative group inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 dark:text-gray-500 font-semibold text-xs md:text-sm text-center md:text-left">
              © 2026 Alwefaq Transportation Solutions. All rights reserved.
            </div>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-yelo hover:text-black dark:hover:bg-brand-yelo dark:hover:text-black hover:border-brand-yelo transition-all cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
