"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Phone,
  Clock,
  Plane,
  Building2,
  ChevronRight,
  Navigation,
} from "lucide-react";
import Link from "next/link";
import HomeNavbar from "../home/HomeNavbar";
import SafeImage from "../home/SafeImage";
import { LOCATIONS, CITIES, FILTERS } from "./locationsData";
import { useLanguage } from "@/app/providers";

export default function LocationsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCity, setActiveCity] = useState("All Locations");
  const [activeType, setActiveType] = useState("All Types");

  const { resolvedTheme, setTheme } = useTheme();
  const { language } = useLanguage();
  const isDark = resolvedTheme === "dark";
  const isAr = language === "ar";

  const cityLabel = (city: string) =>
    isAr
      ? {
          "All Locations": "كل المواقع",
          Riyadh: "الرياض",
          Jeddah: "جدة",
          Dammam: "الدمام",
          Dubai: "دبي",
          Cairo: "القاهرة",
          Casablanca: "الدار البيضاء",
        }[city] || city
      : city;

  const typeLabel = (type: string) =>
    isAr
      ? {
          "All Types": "كل الأنواع",
          Airports: "المطارات",
          "City Branches": "فروع المدن",
          Airport: "مطار",
          City: "مدينة",
        }[type] || type
      : type;

  const locationAr: Record<
    string,
    { name: string; address: string; country: string }
  > = {
    "ruh-1": {
      name: "مطار الملك خالد الدولي",
      address: "صالة الوصول 1 و2، طريق المطار، الرياض",
      country: "السعودية",
    },
    "ruh-2": {
      name: "فرع العليا الرئيسي",
      address: "طريق الملك فهد، حي العليا، الرياض",
      country: "السعودية",
    },
    "ruh-3": {
      name: "الحي المالي",
      address: "مركز الملك عبدالله المالي (كافد)، الرياض",
      country: "السعودية",
    },
    "jed-1": {
      name: "مطار الملك عبدالعزيز الدولي",
      address: "مبنى صالة الوصول الشمالية، جدة",
      country: "السعودية",
    },
    "jed-2": {
      name: "حي الأندلس",
      address: "شارع التحلية، الأندلس، جدة",
      country: "السعودية",
    },
    "dmm-1": {
      name: "مطار الملك فهد الدولي",
      address: "منطقة الوصول الرئيسية، الدمام",
      country: "السعودية",
    },
    "dxb-1": {
      name: "مطار دبي الدولي (DXB)",
      address: "صالة الوصول - مبنى 3، دبي",
      country: "الإمارات",
    },
    "cai-1": {
      name: "مطار القاهرة الدولي",
      address: "الطابق الأرضي - مبنى 2، القاهرة",
      country: "مصر",
    },
    "cas-1": {
      name: "مطار محمد الخامس الدولي",
      address: "منطقة الوصول - مبنى 1، الدار البيضاء",
      country: "المغرب",
    },
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredLocations = LOCATIONS.filter((loc) => {
    // City Filter
    if (activeCity !== "All Locations" && loc.city !== activeCity) return false;

    // Type Filter
    if (activeType === "Airports" && loc.type !== "Airport") return false;
    if (activeType === "City Branches" && loc.type !== "City") return false;

    // Search Query (name, city, address)
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      if (
        !loc.name.toLowerCase().includes(q) &&
        !loc.city.toLowerCase().includes(q) &&
        !loc.address.toLowerCase().includes(q)
      ) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-brand-offwhite dark:bg-brand-charcoal text-gray-900 dark:text-gray-100 font-sans selection:bg-brand-yelo selection:text-black transition-colors duration-500 pb-20">
      <HomeNavbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        isDark={isDark}
        onToggleTheme={() => setTheme(isDark ? "light" : "dark")}
        onToggleMenu={() => setMobileMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMobileMenuOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16 bg-brand-charcoal text-center">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2000&auto=format&fit=crop"
            alt="Yelo Branches GPS Map"
            sizes="100vw"
            className="object-cover object-center w-full h-full opacity-60"
            preload
            quality={60}
          />
          <div className="absolute inset-0 bg-black/60 z-10 dark:bg-brand-charcoal/80 transition-colors duration-700"></div>
          <div className="absolute inset-0 bg-linear-to-t from-brand-offwhite dark:from-brand-charcoal via-transparent to-brand-charcoal/50 z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 z-20 w-full relative mt-12 md:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center text-sm font-bold text-gray-300 md:text-gray-400 mb-6 drop-shadow-md">
              <Link
                href="/"
                className="hover:text-brand-yelo transition-colors text-white"
              >
                {isAr ? "الرئيسية" : "Home"}
              </Link>
              <ChevronRight size={16} className="mx-2 text-white" />
              <span className="text-white">
                {isAr ? "المواقع" : "Locations"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight text-white drop-shadow-xl">
              {isAr ? "فروعنا" : "Our "}{" "}
              <span className="text-brand-yelo">
                {isAr ? "ومواقعنا" : "Branches"}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 md:text-gray-300 max-w-2xl mx-auto font-medium mb-10">
              {isAr
                ? "اعثر على أقرب فرع يلو لك. نحن متواجدون في المدن الرئيسية والمطارات بخدمة مستمرة 24/7."
                : "Find a Yelo branch near you. Spread across major cities and airports globally with 24/7 services."}
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl relative flex items-center bg-white dark:bg-gray-900 rounded-full p-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.15)] dark:shadow-none border border-gray-100 dark:border-gray-800">
              <div className="ps-5 text-gray-400">
                <Search
                  size={22}
                  className={searchQuery ? "text-brand-yelo" : ""}
                />
              </div>
              <input
                type="text"
                placeholder={
                  isAr
                    ? "ابحث بالمدينة أو المطار أو اسم الفرع..."
                    : "Search by city, airport, or branch name..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 py-3.5 px-4 text-gray-900 dark:text-white font-semibold outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
              <button className="bg-brand-charcoal dark:bg-brand-yelo text-white dark:text-black px-6 py-3.5 rounded-full font-bold hover:bg-gray-900 dark:hover:bg-yellow-400 transition-colors active:scale-95">
                {isAr ? "بحث" : "Search"}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter and Content Section */}
      <section className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 z-10 pt-8 pb-32">
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          {/* Sidebar / Filters (Sticky on desktop) */}
          <div className="w-full xl:w-72 flex-none xl:sticky xl:top-32 flex flex-col gap-8">
            {/* Filter by Type */}
            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                {isAr ? "نوع الفرع" : "Branch Type"}
              </h3>
              <div className="flex flex-col gap-2">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveType(filter)}
                    className={`flex items-center gap-3 text-start px-4 py-3 rounded-xl font-bold transition-all ${
                      activeType === filter
                        ? "bg-brand-yelo/10 text-brand-yelo dark:text-brand-yelo"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-lg ${activeType === filter ? "bg-brand-yelo text-black" : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"}`}
                    >
                      {filter === "Airports" ? (
                        <Plane size={16} />
                      ) : filter === "City Branches" ? (
                        <Building2 size={16} />
                      ) : (
                        <MapPin size={16} />
                      )}
                    </div>
                    {typeLabel(filter)}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by City */}
            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                {isAr ? "اختر المدينة" : "Select City"}
              </h3>
              <div className="flex flex-col gap-2 max-h-100 overflow-y-auto scrollbar-hide pe-2">
                {CITIES.map((city) => (
                  <button
                    key={city}
                    onClick={() => setActiveCity(city)}
                    className={`text-start px-4 py-3 border-s-2 font-bold transition-all ${
                      activeCity === city
                        ? "border-brand-yelo text-brand-yelo"
                        : "border-transparent text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {cityLabel(city)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main List */}
          <div className="w-full flex-1">
            <div className="mb-6 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                  {cityLabel(activeCity)} {isAr ? "- الفروع" : "Branches"}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  {isAr
                    ? `عرض ${filteredLocations.length} نتيجة ${activeType !== "All Types" ? `لـ ${typeLabel(activeType)}` : ""}`
                    : `Showing ${filteredLocations.length} results ${activeType !== "All Types" ? `for ${activeType}` : ""}`}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredLocations.map((loc) => (
                  <motion.div
                    key={loc.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl dark:shadow-none transition-shadow group flex flex-col h-full"
                  >
                    <div className="h-48 w-full relative overflow-hidden">
                      <SafeImage
                        src={loc.image}
                        alt={loc.name}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={75}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 inset-s-4 flex gap-2">
                        <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-black shadow-lg uppercase tracking-wide flex items-center gap-1.5">
                          {loc.type === "Airport" ? (
                            <Plane size={12} className="text-brand-yelo" />
                          ) : (
                            <Building2 size={12} className="text-brand-yelo" />
                          )}
                          {typeLabel(loc.type)}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                          {cityLabel(loc.city)},{" "}
                          {isAr
                            ? (locationAr[loc.id]?.country ?? loc.country)
                            : loc.country}
                        </p>
                        <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight">
                          {isAr
                            ? (locationAr[loc.id]?.name ?? loc.name)
                            : loc.name}
                        </h3>
                      </div>

                      <div className="flex flex-col gap-3 mb-6 flex-1 text-sm font-medium">
                        <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <MapPin
                            size={18}
                            className="text-gray-400 dark:text-gray-500 flex-none mt-0.5"
                          />
                          <span>
                            {isAr
                              ? (locationAr[loc.id]?.address ?? loc.address)
                              : loc.address}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                          <Clock
                            size={18}
                            className="text-gray-400 dark:text-gray-500 flex-none"
                          />
                          <span>{loc.hours}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                          <Phone
                            size={18}
                            className="text-gray-400 dark:text-gray-500 flex-none"
                          />
                          <span className="font-bold">{loc.phone}</span>
                        </div>
                      </div>

                      <button className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-bold py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-brand-charcoal hover:dark:bg-brand-yelo hover:text-white dark:hover:text-black hover:border-transparent transition-colors flex items-center justify-center gap-2 group/btn">
                        {isAr ? "الحصول على الاتجاهات" : "Get Directions"}{" "}
                        <Navigation
                          size={16}
                          className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                        />
                      </button>
                    </div>
                  </motion.div>
                ))}

                {filteredLocations.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-1 md:col-span-2 text-center py-20 bg-white dark:bg-gray-900/50 rounded-3xl border border-gray-200 dark:border-gray-800 border-dashed"
                  >
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MapPin size={32} className="text-gray-400" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                      {isAr ? "لم يتم العثور على فروع" : "No Branches Found"}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {isAr
                        ? "جرب تعديل الفلاتر أو عبارة البحث."
                        : "Try adjusting your filters or search query."}
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCity("All Locations");
                        setActiveType("All Types");
                      }}
                      className="mt-6 text-brand-yelo font-bold hover:underline"
                    >
                      {isAr ? "مسح كل الفلاتر" : "Clear All Filters"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
