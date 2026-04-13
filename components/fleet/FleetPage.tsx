"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  LayoutGrid,
  List,
  Info,
  User,
  Briefcase,
  Snowflake,
  DoorOpen,
  CarFront,
} from "lucide-react";
import Link from "next/link";
import HomeNavbar from "../home/HomeNavbar";
import SafeImage from "../home/SafeImage";
import { FLEET_CARS, CATEGORIES, FleetCar } from "./fleetData";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop",
];

export default function FleetPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [activeCategory, setActiveCategory] = useState("All Fleet");
  const [priceRange, setPriceRange] = useState(2800);
  const [sortBy, setSortBy] = useState("price-asc");

  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    // For inner pages, we can just treat it constantly scrolled if we want a solid nav,
    // but preserving the scroll listener ensures standard behavior.
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const filteredCars = FLEET_CARS.filter((car) => {
    if (activeCategory !== "All Fleet" && car.category !== activeCategory)
      return false;
    if (car.price > priceRange) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
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
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-start overflow-hidden pt-24 pb-16 md:pb-20 bg-brand-charcoal">
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
                src={HERO_IMAGES[currentImageIndex]}
                alt="Yelo Fleet Background"
                sizes="100vw"
                className="object-cover object-center w-full h-full"
                preload
                quality={60}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/50 z-10 dark:bg-brand-charcoal/70 transition-colors duration-700"></div>
          <div className="absolute inset-0 bg-linear-to-b from-brand-charcoal/80 via-transparent to-brand-offwhite dark:to-brand-charcoal z-10"></div>
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
                Home
              </Link>
              <ChevronRight size={16} className="mx-2 text-white" />
              <span className="text-white">Fleet</span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 backdrop-blur-md shadow-2xl"
            >
              <span className="w-2 h-2 rounded-full bg-brand-yelo mr-2 animate-pulse"></span>
              PREMIUM VEHICLES
            </motion.div>

            <h1 className="text-[2.4rem] sm:text-5xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight text-white">
              Discover Our <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-brand-yelo to-yellow-200 pb-2">
                Premium Fleet
                <motion.span
                  className="absolute bottom-1 md:bottom-2 left-0 w-full h-0.75 md:h-2 bg-brand-yelo/60 rounded-full blur-md"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                  style={{ originX: 0 }}
                ></motion.span>
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-300 md:text-gray-200 mb-8 max-w-2xl leading-relaxed font-medium md:font-light">
              Experience the pinnacle of driving comfort. Browse our exclusive
              selection of meticulously maintained vehicles suited for any
              destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 sm:px-6 md:px-8 max-w-screen-2xl mx-auto z-10 pt-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight text-gray-900 dark:text-white">
              Available Vehicles
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              {filteredCars.length} Vehicle
              {filteredCars.length !== 1 ? "s" : ""} Available
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-500 mr-2">
              Saved for later items
            </span>
            <div className="flex bg-gray-200 dark:bg-gray-800 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}
              >
                <List size={20} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}
              >
                <LayoutGrid size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-3 items-center mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-2xl md:rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat
                  ? "bg-gray-900 dark:bg-brand-yelo border-gray-900 dark:border-brand-yelo text-white dark:text-black shadow-lg"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters Box */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 mb-12 shadow-sm flex flex-col md:flex-row gap-8 items-end">
          <div className="flex-1 w-full flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
                By Categories
              </label>
              <select
                title="Category"
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 dark:text-white outline-none focus:border-brand-yelo transition-colors appearance-none"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
                Sort by
              </label>
              <select
                title="Sort order"
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 dark:text-white outline-none focus:border-brand-yelo transition-colors appearance-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price-asc">Price Low to High</option>
                <option value="price-desc">Price High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex-1 w-full max-w-sm">
            <div className="flex justify-between mb-2">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block">
                Price Range
              </label>
              <span className="text-xs font-bold text-gray-900 dark:text-white">
                152 SAR - {priceRange} SAR
              </span>
            </div>
            <input
              title="Price Range"
              type="range"
              min="152"
              max="5000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-gray-900 dark:accent-brand-yelo h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="mt-4 flex items-center justify-end gap-2">
              <input
                type="checkbox"
                id="stock"
                className="accent-gray-900 dark:accent-brand-yelo w-4 h-4 rounded-sm border-gray-300"
              />
              <label
                htmlFor="stock"
                className="text-sm font-semibold text-gray-600 dark:text-gray-400 cursor-pointer"
              >
                Show all include out of stock
              </label>
            </div>
          </div>
        </div>

        {/* Cars Layout */}
        <motion.div
          layout
          className={`gap-6 ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "flex flex-col"}`}
        >
          <AnimatePresence>
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} viewMode={viewMode} />
            ))}
          </AnimatePresence>

          {filteredCars.length === 0 && (
            <div className="w-full text-center py-24 bg-white/50 dark:bg-gray-900/50 rounded-4xl border border-gray-200 dark:border-gray-800 col-span-full">
              <CarFront
                size={48}
                className="mx-auto text-gray-300 dark:text-gray-600 mb-4"
              />
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                No Vehicles Found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search criteria.
              </p>
            </div>
          )}
        </motion.div>

        {filteredCars.length > 0 && (
          <div className="flex justify-center mt-12">
            <button className="bg-gray-900 dark:bg-brand-yelo text-white dark:text-black hover:bg-black dark:hover:bg-yellow-400 px-8 py-4 rounded-2xl font-black transition-transform active:scale-95 shadow-xl">
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

function CarCard({
  car,
  viewMode,
}: {
  car: FleetCar;
  viewMode: "grid" | "list";
}) {
  if (viewMode === "grid") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all flex flex-col group"
      >
        <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <SafeImage
            src={car.image}
            alt={car.name}
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={60}
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-brand-yelo dark:text-brand-yelo font-bold text-xs uppercase tracking-wider">
            <CarFront size={14} /> {car.category}
          </div>
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">
            {car.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">
            or Similar
          </p>

          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm font-medium mb-6 mt-auto">
            <div className="flex items-center gap-1" title="Seats">
              <User size={16} /> {car.seats}
            </div>
            <div className="flex items-center gap-1" title="Bags">
              <Briefcase size={16} /> {car.bags}
            </div>
            <div
              className="flex items-center gap-1 font-bold"
              title="Transmission"
            >
              {car.transmission}
            </div>
            <div className="flex items-center gap-1" title="Doors">
              <DoorOpen size={16} /> {car.doors}
            </div>
            <div className="flex items-center gap-1 font-bold" title="A/C">
              <Snowflake size={16} className="mr-0.5" />
              {car.ac}
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-4 flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-gray-400 line-through text-xs font-semibold">
                {car.originalPrice.toFixed(2)} SAR
              </span>
              <span className="text-2xl font-black text-gray-900 dark:text-white leading-none">
                {car.price.toFixed(2)}{" "}
                <span className="text-sm font-bold text-brand-yelo">SAR</span>
              </span>
              <span className="text-[10px] text-gray-500 mt-1 uppercase">
                Price do not include VAT
              </span>
            </div>
            <button className="bg-gray-900 dark:bg-brand-yelo text-white dark:text-black font-black text-sm px-5 py-3 rounded-xl hover:scale-105 active:scale-95 transition-all">
              BOOK NOW
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all flex flex-col md:flex-row group"
    >
      {/* List View */}
      <div className="relative w-full md:w-1/3 min-h-64 md:min-h-full bg-gray-100 dark:bg-gray-800 overflow-hidden shrink-0">
        <SafeImage
          src={car.image}
          alt={car.name}
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={60}
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col md:flex-row gap-6 md:gap-8 justify-between relative">
        <div className="flex flex-col justify-center flex-1">
          <div className="flex items-center gap-2 mb-2 text-brand-yelo dark:text-brand-yelo font-bold text-xs uppercase tracking-wider">
            <CarFront size={14} /> {car.category}
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
            {car.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">
            or Similar
          </p>

          <div className="flex items-center gap-5 text-gray-600 dark:text-gray-300 text-sm font-semibold bg-gray-50 dark:bg-gray-800/50 w-fit px-5 py-3 rounded-2xl">
            <div className="flex items-center gap-1.5" title="Seats">
              <User size={16} className="text-gray-400" /> {car.seats}
            </div>
            <div className="flex items-center gap-1.5" title="Bags">
              <Briefcase size={16} className="text-gray-400" /> {car.bags}
            </div>
            <div className="flex items-center gap-1.5" title="Transmission">
              <span className="text-gray-400 font-bold">T</span>{" "}
              {car.transmission}
            </div>
            <div className="flex items-center gap-1.5" title="Doors">
              <DoorOpen size={16} className="text-gray-400" /> {car.doors}
            </div>
            <div className="flex items-center gap-1.5" title="A/C">
              <Snowflake size={16} className="text-gray-400" /> {car.ac}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end justify-center border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-800 pt-6 md:pt-0 md:pl-8 min-w-50">
          <div className="flex items-end justify-between md:flex-col md:items-end w-full mb-6 gap-2">
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <span className="text-gray-500 text-sm font-bold mb-1">
                Price for 1 day(s)
              </span>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">
                Free KM {car.freeKm}
              </span>
              <div className="flex items-center gap-1.5 text-gray-400 line-through text-sm font-semibold">
                <Info size={12} className="text-brand-yelo" />{" "}
                {car.originalPrice.toFixed(2)} SAR
              </div>
            </div>

            <div className="flex flex-col items-end text-right">
              <span className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-none mb-1">
                {car.price.toFixed(2)}
              </span>
              <span className="text-brand-yelo font-black">SAR</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="text-gray-400 hover:text-gray-900 dark:hover:text-brand-yelo text-xs uppercase font-bold flex items-center gap-1 transition-colors">
              <span className="w-4 h-4 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-sm">
                ★
              </span>
              Save
            </button>
            <button className="bg-gray-900 dark:bg-brand-yelo text-white dark:text-black font-black text-sm px-8 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all flex-1 md:flex-auto whitespace-nowrap shadow-md">
              BOOK NOW
            </button>
          </div>
          <span className="text-[10px] text-gray-400 uppercase mt-4 block text-center md:text-right w-full">
            Price do not include VAT
          </span>
        </div>
      </div>
    </motion.div>
  );
}
