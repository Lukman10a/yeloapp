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
import { useLanguage } from "@/app/providers";

export default function AdditionalSections() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const bentoMap: Record<string, { title: string; desc: string }> = {
    Luxury: { title: "فاخر", desc: "وصول يليق بمكانتك." },
    "SUV & Crossover": {
      title: "دفع رباعي وكروس أوفر",
      desc: "مساحة كافية لكل أفراد العائلة.",
    },
    Sports: { title: "رياضية", desc: "متعة الطريق بكل تفاصيلها." },
    "Sedan & Compact": { title: "سيدان ومدمجة", desc: "مثالية لقيادة المدينة اليومية." },
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/20 transition-colors">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">
              {isAr ? "اعثر على سيارتك المثالية" : "Find Your Perfect Ride"}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-xl">
              {isAr
                ? "من تنقلاتك اليومية إلى رحلاتك الطويلة، لدينا السيارة المناسبة لكل رحلة."
                : "From daily commutes to cross-country adventures — we have the right vehicle for every journey."}
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

                <div className="absolute bottom-6 md:bottom-8 inset-s-6 md:inset-s-8 z-20 pe-6">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-black mb-2 tracking-tight text-white group-hover:text-brand-yelo transition-colors">
                    {isAr ? (bentoMap[cat.title]?.title ?? cat.title) : cat.title}
                  </h3>
                  <p className="text-gray-200 md:text-gray-300 font-medium md:text-lg line-clamp-1">
                    {isAr ? (bentoMap[cat.title]?.desc ?? cat.desc) : cat.desc}
                  </p>
                  <Link
                    href="/fleet"
                    className="mt-4 flex items-center text-white font-bold opacity-0 -translate-x-4 rtl:translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-white/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm"
                  >
                    {isAr ? "استكشف الأسطول" : "View Fleet"}{" "}
                    <ArrowRight size={18} className="ms-2 rtl:-scale-x-100" />
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
            {isAr ? "تجربة يلو" : "The Yelo Experience"}
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
                {isAr ? "مكافآت أميالي" : "Amyali Rewards"}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                {isAr
                  ? "برنامج الولاء الذي تستحقه"
                  : "The Loyalty Program You Deserve"}
              </h3>
              <p className="text-gray-300 mb-8 md:mb-10 text-base sm:text-lg md:text-xl font-medium">
                {isAr
                  ? "اكسب نقاطا مع كل رحلة، وارتق بمستواك، وافتح مزايا حصرية في أنحاء الخليج."
                  : "Earn points on every drive. Upgrade your tier. Unlock exclusive premium benefits across the GCC."}
              </p>

              <div className="flex flex-wrap gap-3">
                {(isAr ? ["استأجر", "اكسب", "استبدل"] : ["Rent", "Earn", "Redeem"]).map((pill) => (
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
            <div className="absolute top-8 inset-e-8 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:bg-brand-yelo group-hover:text-black transition-colors text-blue-600 dark:text-blue-400">
              <Plane size={32} />
            </div>
            <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white">
              {isAr ? "تأجير المطارات" : "Airport Rentals"}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-medium leading-relaxed">
              {isAr
                ? "استلام سلس في أكثر من 15 مطارا داخل السعودية. من الطائرة مباشرة إلى سيارتك."
                : "Seamless pickup at 15+ airports across Saudi Arabia. Step off the plane, into your car."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-72 sm:h-75 md:h-auto relative rounded-[2.5rem] overflow-hidden group border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col justify-end transition-all"
          >
            <div className="absolute top-8 inset-e-8 w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white z-10">
              {isAr ? "يلو شيلد بريميوم" : "Yelo Shield Premium"}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-base font-medium z-10 leading-relaxed">
              {isAr
                ? "خيارات حماية شاملة لمسؤولية صفر وراحة بال كاملة في كل رحلة."
                : "Full-coverage protection options for zero-liability, 100% peace of mind on every journey."}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800 relative overflow-hidden transition-colors">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24 text-center">
            {[
              { num: "500K+", label: isAr ? "عميل سعيد" : "Happy Customers" },
              { num: "50+", label: isAr ? "موقعا في المملكة" : "Locations In KSA" },
              { num: "100+", label: isAr ? "موديل سيارة متاح" : "Car Models Available" },
              { num: "10+", label: isAr ? "سنوات من الثقة" : "Years of Trust" },
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
                    {isAr
                      ? {
                          "Fully Insured Fleet": "أسطول مؤمن بالكامل",
                          "24/7 Priority Support": "دعم أولوية 24/7",
                          "Instant Smart Booking": "حجز ذكي فوري",
                        }[feature.title] || feature.title
                      : feature.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                    {isAr
                      ? {
                          "Comprehensive coverage options tailored for completely stress-free driving experiences.": "خيارات تغطية شاملة مصممة لتجربة قيادة بلا أي قلق.",
                          "Our dedicated mobile response units and customer care team are always standing by.": "فرق الاستجابة المتنقلة وخدمة العملاء لدينا جاهزون دائما.",
                          "Reserve your vehicle in seconds. Manage seamlessly through our iOS and Android app.": "احجز سيارتك خلال ثوان وادِر رحلتك بسهولة عبر تطبيق iOS وAndroid.",
                        }[feature.desc] || feature.desc
                      : feature.desc}
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

          <div className="p-8 md:p-16 lg:p-24 z-10 w-full md:w-1/2 md:pe-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
              {isAr ? "استأجر بذكاء." : "Rent Smarter."} <br /> {isAr ? "قد أفضل." : "Drive Better."}
            </h2>
            <p className="text-gray-300 md:text-gray-400 text-lg md:text-xl font-medium mb-10 max-w-md leading-relaxed">
              {isAr
                ? "احجز وأدر وتابع تأجيرك من أي مكان عبر تطبيق يلو. تنقل بلا حدود من هاتفك."
                : "Book, manage, and track your rental from anywhere with the Yelo app. Experience absolute mobility in your pocket."}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-gray-900 px-6 md:px-8 py-4 rounded-2xl font-black text-sm md:text-base flex items-center gap-3 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-lg w-full sm:w-auto justify-center">
                <Smartphone size={22} /> {isAr ? "متجر التطبيقات" : "App Store"}
              </button>
              <button className="bg-transparent border-2 border-gray-700 text-white px-6 md:px-8 py-4 rounded-2xl font-black text-sm md:text-base flex items-center gap-3 hover:border-gray-500 hover:bg-white/5 active:scale-95 transition-all w-full sm:w-auto justify-center">
                <Smartphone size={22} /> {isAr ? "جوجل بلاي" : "Google Play"}
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center p-6 sm:p-10 md:p-0 z-10 relative h-95 sm:h-100 md:h-auto mt-6 md:mt-0 overflow-hidden md:overflow-visible">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="w-56 sm:w-64 md:w-72 lg:w-80 h-112 sm:h-125 md:h-150 bg-gray-50 dark:bg-gray-900 border-10 border-gray-800 dark:border-gray-800 rounded-[40px] shadow-2xl shadow-black/60 relative overflow-hidden md:absolute md:-bottom-32 md:inset-e-16 rotate-6 md:rotate-15 rtl:md:-rotate-15 origin-bottom-right rtl:origin-bottom-left"
            >
              <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
              <div className="absolute top-8 inset-s-6 inset-e-6 h-32 bg-gray-100 dark:bg-gray-800 rounded-3xl"></div>
              <div className="absolute top-48 inset-s-6 inset-e-6 h-24 bg-gray-100 dark:bg-gray-800 rounded-2xl"></div>
              <div className="absolute top-76 inset-s-6 inset-e-6 h-24 bg-gray-100 dark:bg-gray-800 rounded-2xl"></div>
              <div className="absolute bottom-6 inset-s-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-1/3 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 border-t border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 tracking-tight">
            {isAr ? "من أين ستبدأ رحلتك؟" : "Where Will Your Journey Begin?"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h3 className="text-xl md:text-2xl font-black mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                {isAr ? "أهم مدن السعودية" : "Top Cities in Saudi Arabia"}
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
                {isAr ? "وجهات دولية" : "International Destinations"}
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
    </>
  );
}
