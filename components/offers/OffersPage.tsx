"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ArrowRight, BadgePercent, Calendar, Tag } from "lucide-react";
import HomeNavbar from "../home/HomeNavbar";
import SafeImage from "../home/SafeImage";
import { useLanguage } from "@/app/providers";

type OfferItem = {
  id: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  badgeEn: string;
  badgeAr: string;
  image: string;
};

const OFFERS: OfferItem[] = [
  {
    id: "offer-1",
    titleEn: "Weekend Luxury Deal",
    titleAr: "عرض فاخر لعطلة نهاية الأسبوع",
    descEn: "Save up to 25% on premium vehicles every Thursday to Saturday.",
    descAr: "وفر حتى 25% على السيارات الفاخرة من الخميس إلى السبت.",
    badgeEn: "Limited Time",
    badgeAr: "لفترة محدودة",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "offer-2",
    titleEn: "Airport Fast-Track",
    titleAr: "مسار سريع في المطار",
    descEn: "Instant pickup at select airports with zero waiting fees.",
    descAr: "استلام فوري في مطارات محددة بدون رسوم انتظار.",
    badgeEn: "Airport",
    badgeAr: "المطار",
    image:
      "https://images.unsplash.com/photo-1544626154-15e8c17b0780?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "offer-3",
    titleEn: "Monthly Saver",
    titleAr: "توفير الاشتراك الشهري",
    descEn: "Get exclusive monthly rates plus complimentary maintenance.",
    descAr: "احصل على أسعار شهرية حصرية مع صيانة مجانية.",
    badgeEn: "Subscription",
    badgeAr: "اشتراك",
    image:
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function OffersPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { language } = useLanguage();
  const isDark = resolvedTheme === "dark";
  const isAr = language === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copy = useMemo(
    () => ({
      title: isAr ? "عروض يلو" : "Yelo Offers",
      subtitle: isAr
        ? "أقوى العروض على الإيجار اليومي والشهري مع مزايا حصرية."
        : "Best-value deals for daily and monthly rentals with exclusive perks.",
      cta: isAr ? "احجز العرض" : "Book Offer",
      terms: isAr ? "تطبق الشروط والأحكام" : "Terms and conditions apply",
      expires: isAr ? "ينتهي قريباً" : "Ending Soon",
    }),
    [isAr],
  );

  return (
    <div className="min-h-screen bg-brand-offwhite dark:bg-brand-charcoal text-gray-900 dark:text-gray-100 transition-colors duration-500 pb-20">
      <HomeNavbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        isDark={isDark}
        onToggleTheme={() => setTheme(isDark ? "light" : "dark")}
        onToggleMenu={() => setMobileMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMobileMenuOpen(false)}
      />

      <section className="relative min-h-[46vh] md:min-h-[56vh] pt-28 pb-12 flex items-end">
        <div className="absolute inset-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
            alt="Offers hero"
            sizes="100vw"
            className="object-cover object-center"
            preload
            quality={60}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-linear-to-t from-brand-offwhite dark:from-brand-charcoal via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-gray-200 md:text-xl max-w-2xl font-medium">
            {copy.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {OFFERS.map((offer, index) => (
            <motion.article
              key={offer.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <div className="relative h-52">
                <SafeImage
                  src={offer.image}
                  alt={isAr ? offer.titleAr : offer.titleEn}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  quality={65}
                />
                <div className="absolute top-4 inset-s-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-bold">
                  <BadgePercent size={14} className="text-brand-yelo" />
                  {isAr ? offer.badgeAr : offer.badgeEn}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white leading-tight">
                  {isAr ? offer.titleAr : offer.titleEn}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                  {isAr ? offer.descAr : offer.descEn}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} /> {copy.expires}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Tag size={14} /> {copy.terms}
                  </span>
                </div>

                <button className="mt-2 bg-gray-900 dark:bg-brand-yelo text-white dark:text-black rounded-2xl py-3.5 font-black inline-flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-yellow-400 transition-colors">
                  {copy.cta}
                  <ArrowRight size={18} className="rtl:-scale-x-100" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
