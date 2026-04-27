"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import HomeNavbar from "../home/HomeNavbar";
import { FLEET_CARS, CATEGORIES } from "./fleetData";
import FleetHeroSection from "./FleetHeroSection";
import FleetControls from "./FleetControls";
import CarCard from "./CarCard";
import { FLEET_HERO_IMAGES, getCategoryLabel } from "./fleetUtils";
import { useLanguage } from "@/app/providers";

export default function FleetPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [activeCategory, setActiveCategory] = useState("All Fleet");
  const [priceRange, setPriceRange] = useState(2800);
  const [sortBy, setSortBy] = useState("price-asc");

  const { resolvedTheme, setTheme } = useTheme();
  const { language } = useLanguage();
  const isDark = resolvedTheme === "dark";
  const isAr = language === "ar";

  useEffect(() => {
    // For inner pages, we can just treat it constantly scrolled if we want a solid nav,
    // but preserving the scroll listener ensures standard behavior.
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (previous) => (previous + 1) % FLEET_HERO_IMAGES.length,
      );
    }, 2000);

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

      <FleetHeroSection currentImageIndex={currentImageIndex} isAr={isAr} />

      <section className="relative px-4 sm:px-6 md:px-8 max-w-screen-2xl mx-auto z-10 pt-8 mt-12">
        <FleetControls
          isAr={isAr}
          filteredCount={filteredCars.length}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <div
          className={`gap-6 ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "flex flex-col"}`}
        >
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              viewMode={viewMode}
              isAr={isAr}
              categoryLabel={(category) => getCategoryLabel(category, isAr)}
            />
          ))}

          {filteredCars.length === 0 && (
            <div className="w-full text-center py-24 bg-white/50 dark:bg-gray-900/50 rounded-4xl border border-gray-200 dark:border-gray-800 col-span-full">
              <div className="mx-auto text-gray-300 dark:text-gray-600 mb-4 text-5xl font-black">
                CAR
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                {isAr ? "لا توجد سيارات" : "No Vehicles Found"}
              </h3>
              <p className="text-gray-500">
                {isAr
                  ? "جرب تعديل الفلاتر أو معايير البحث."
                  : "Try adjusting your filters or search criteria."}
              </p>
            </div>
          )}
        </div>

        {filteredCars.length > 0 && (
          <div className="flex justify-center mt-12">
            <button className="bg-gray-900 dark:bg-brand-yelo text-white dark:text-black hover:bg-black dark:hover:bg-yellow-400 px-8 py-4 rounded-2xl font-black transition-transform active:scale-95 shadow-xl ui-motion ui-press ui-lift">
              {isAr ? "تحميل المزيد" : "Load More"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
