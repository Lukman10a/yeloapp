"use client";

import Link from "next/link";
import { ArrowRight, Plane, ShieldCheck, Clock, Heart } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-20 md:pt-28 pb-8 relative overflow-hidden transition-colors border-t border-white/10 dark:border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-brand-yelo/5 to-transparent pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-7 gap-x-6 sm:gap-10 gap-y-12 md:gap-y-16 mb-16 md:mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Link
                href="/"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center hover:scale-105 active:scale-95 transition-transform duration-300"
              >
                Yelo
                <span className="text-brand-yelo drop-shadow-[0_0_10px_rgba(255,204,0,0.5)]">
                  .
                </span>
              </Link>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-10 leading-relaxed font-medium max-w-md">
              Beyond your expectations. Premium car rental services setting the
              standard across Saudi Arabia and the GCC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/20 hover:border-white/30 transition-all shadow-sm flex-1 sm:flex-none transform hover:-translate-y-1">
                App Store
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/20 hover:border-white/30 transition-all shadow-sm flex-1 sm:flex-none transform hover:-translate-y-1">
                Google Play
              </button>
            </div>
          </div>

          {[
            {
              title: "Company",
              links: [
                { name: "About Yelo", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Franchise", href: "#" },
              ],
            },
            {
              title: "Rent",
              links: [
                { name: "Fleet", href: "/fleet" },
                { name: "Our Branches", href: "#" },
                { name: "Deals", href: "#" },
              ],
            },
            {
              title: "Useful Links",
              links: [
                { name: "Contact Us", href: "#" },
                { name: "Services", href: "#" },
                { name: "Membership", href: "#" },
                { name: "Yelo Magazine", href: "#" },
                { name: "Our News", href: "#" },
              ],
            },
            {
              title: "Top Cities",
              links: [
                { name: "Rent a car in Riyadh", href: "#" },
                { name: "Rent a car in Makkah", href: "#" },
                { name: "Rent a car in Al Madinah", href: "#" },
                { name: "Rent a car in Abha", href: "#" },
                { name: "Rent a car in Al-'Ula", href: "#" },
              ],
            },
            {
              title: "Intl Destinations",
              links: [
                { name: "Rent a car in Morocco", href: "#" },
                { name: "Rent a car in UAE", href: "#" },
                { name: "Rent a car in Oman", href: "#" },
                { name: "Rent a car in Egypt", href: "#" },
                { name: "Rent a car in Switzerland", href: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title} className="col-span-1">
              <h4 className="text-white font-black tracking-widest text-xs uppercase mb-6 md:mb-8 flex items-center">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm font-semibold hover:text-brand-yelo transition-colors relative group inline-block py-1"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yelo transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 font-semibold text-xs md:text-sm text-center md:text-left selection:bg-brand-yelo selection:text-black">
            © {new Date().getFullYear()} Alwefaq Transportation Solutions. All
            rights reserved.
          </div>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-brand-yelo hover:text-black hover:border-brand-yelo transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(255,204,0,0.3)]"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
