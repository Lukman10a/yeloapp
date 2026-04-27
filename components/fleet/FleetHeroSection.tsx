"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SafeImage from "../home/SafeImage";
import { FLEET_HERO_IMAGES } from "./fleetUtils";

type FleetHeroSectionProps = {
  currentImageIndex: number;
  isAr: boolean;
};

export default function FleetHeroSection({
  currentImageIndex,
  isAr,
}: FleetHeroSectionProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-brand-charcoal">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <SafeImage
              src={FLEET_HERO_IMAGES[currentImageIndex]}
              alt="Yelo Fleet Background"
              sizes="100vw"
              className="object-cover object-center w-full h-full"
              preload
              quality={75}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50 z-10 dark:bg-brand-charcoal/70 transition-colors duration-700" />
        <div className="absolute inset-0 bg-linear-to-b from-brand-charcoal/80 via-transparent to-brand-gray dark:to-brand-charcoal z-10"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 z-20 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center text-sm font-bold text-gray-300 md:text-gray-400 mb-6 drop-shadow-md">
            <Link
              href="/"
              className="hover:text-brand-yelo transition-colors text-white"
            >
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <ChevronRight size={16} className="mx-2 text-white" />
            <span className="text-white">{isAr ? "الأسطول" : "Fleet"}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 backdrop-blur-md shadow-2xl"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yelo me-2 animate-pulse" />
            {isAr ? "سيارات مميزة" : "PREMIUM VEHICLES"}
          </motion.div>

          <h1 className="text-[2.4rem] sm:text-5xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight text-white">
            {isAr ? "اكتشف" : "Discover Our"} <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-brand-yelo to-yellow-200 pb-2">
              {isAr ? "أسطولنا المميز" : "Premium Fleet"}
              <motion.span
                className="absolute bottom-1 md:bottom-2 inset-s-0 w-full h-0.75 md:h-2 bg-brand-yelo/60 rounded-full blur-md"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-300 md:text-gray-200 mb-8 max-w-2xl leading-relaxed font-medium md:font-light">
            {isAr
              ? "استمتع بأقصى درجات الراحة أثناء القيادة. تصفح مجموعتنا الحصرية من السيارات المصانة بعناية لكل وجهة."
              : "Experience the pinnacle of driving comfort. Browse our exclusive selection of meticulously maintained vehicles suited for any destination."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
