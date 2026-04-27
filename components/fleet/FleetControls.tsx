"use client";

import { LayoutGrid, List } from "lucide-react";
import { getCategoryLabel } from "./fleetUtils";

type FleetControlsProps = {
  isAr: boolean;
  filteredCount: number;
  viewMode: "grid" | "list";
  onViewModeChange: (viewMode: "grid" | "list") => void;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: number;
  onPriceRangeChange: (value: number) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
};

export default function FleetControls({
  isAr,
  filteredCount,
  viewMode,
  onViewModeChange,
  categories,
  activeCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
}: FleetControlsProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight text-gray-900 dark:text-white">
            {isAr ? "السيارات المتاحة" : "Available Vehicles"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            {isAr
              ? `${filteredCount} سيارة متاحة`
              : `${filteredCount} Vehicle${filteredCount !== 1 ? "s" : ""} Available`}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-gray-500 me-2">
            {isAr ? "عناصر محفوظة لاحقا" : "Saved for later items"}
          </span>
          <div className="flex bg-gray-200 dark:bg-gray-800 p-1 rounded-xl">
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-2 rounded-lg transition-all ui-motion ui-press ${viewMode === "list" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}
            >
              <List size={20} />
            </button>
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded-lg transition-all ui-motion ui-press ${viewMode === "grid" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}
            >
              <LayoutGrid size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-3 items-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`whitespace-nowrap px-6 py-3 rounded-2xl md:rounded-full text-sm font-bold transition-all border ui-motion ui-press ${
              activeCategory === category
                ? "bg-gray-900 dark:bg-brand-yelo border-gray-900 dark:border-brand-yelo text-white dark:text-black shadow-lg"
                : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500"
            }`}
          >
            {getCategoryLabel(category, isAr)}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 mb-12 shadow-sm flex flex-col md:flex-row gap-8 items-end">
        <div className="flex-1 w-full flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
              {isAr ? "حسب الفئة" : "By Categories"}
            </label>
            <select
              title="Category"
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 dark:text-white outline-none focus:border-brand-yelo transition-colors appearance-none"
              value={activeCategory}
              onChange={(event) => onCategoryChange(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {getCategoryLabel(category, isAr)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
              {isAr ? "ترتيب حسب" : "Sort by"}
            </label>
            <select
              title="Sort order"
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 dark:text-white outline-none focus:border-brand-yelo transition-colors appearance-none"
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
            >
              <option value="price-asc">
                {isAr ? "السعر من الأقل للأعلى" : "Price Low to High"}
              </option>
              <option value="price-desc">
                {isAr ? "السعر من الأعلى للأقل" : "Price High to Low"}
              </option>
            </select>
          </div>
        </div>

        <div className="flex-1 w-full max-w-sm">
          <div className="flex justify-between mb-2">
            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block">
              {isAr ? "نطاق السعر" : "Price Range"}
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
            onChange={(event) => onPriceRangeChange(Number(event.target.value))}
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
              {isAr
                ? "إظهار الكل بما في ذلك غير المتاح"
                : "Show all include out of stock"}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
