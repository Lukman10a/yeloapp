"use client";

import {
  Briefcase,
  CarFront,
  DoorOpen,
  Info,
  Snowflake,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import SafeImage from "../home/SafeImage";
import type { FleetCar } from "./fleetData";

type CarCardProps = {
  car: FleetCar;
  viewMode: "grid" | "list";
  isAr: boolean;
  categoryLabel: (category: string) => string;
};

export default function CarCard({
  car,
  viewMode,
  isAr,
  categoryLabel,
}: CarCardProps) {
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
            <CarFront size={14} /> {categoryLabel(car.category)}
          </div>
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">
            {car.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">
            {isAr ? "أو ما يماثلها" : "or Similar"}
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
                {isAr
                  ? "السعر لا يشمل ضريبة القيمة المضافة"
                  : "Price do not include VAT"}
              </span>
            </div>
            <button className="bg-gray-900 dark:bg-brand-yelo text-white dark:text-black font-black text-sm px-5 py-3 rounded-xl hover:scale-105 active:scale-95 transition-all ui-motion ui-press ui-lift">
              {isAr ? "احجز الآن" : "BOOK NOW"}
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
            <CarFront size={14} /> {categoryLabel(car.category)}
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
            {car.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">
            {isAr ? "أو ما يماثلها" : "or Similar"}
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

        <div className="flex flex-col items-start md:items-end justify-center border-t md:border-t-0 md:border-s border-gray-100 dark:border-gray-800 pt-6 md:pt-0 md:ps-8 min-w-50">
          <div className="flex items-end justify-between md:flex-col md:items-end w-full mb-6 gap-2">
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <span className="text-gray-500 text-sm font-bold mb-1">
                {isAr ? "السعر لليوم الواحد" : "Price for 1 day(s)"}
              </span>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">
                {isAr ? `كم مجاني ${car.freeKm}` : `Free KM ${car.freeKm}`}
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
            <button className="text-gray-400 hover:text-gray-900 dark:hover:text-brand-yelo text-xs uppercase font-bold flex items-center gap-1 transition-colors ui-motion ui-press">
              <span className="w-4 h-4 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-sm">
                ★
              </span>
              {isAr ? "حفظ" : "Save"}
            </button>
            <button className="bg-gray-900 dark:bg-brand-yelo text-white dark:text-black font-black text-sm px-8 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all flex-1 md:flex-auto whitespace-nowrap shadow-md ui-motion ui-press ui-lift">
              {isAr ? "احجز الآن" : "BOOK NOW"}
            </button>
          </div>
          <span className="text-[10px] text-gray-400 uppercase mt-4 block text-center md:text-right w-full">
            {isAr
              ? "السعر لا يشمل ضريبة القيمة المضافة"
              : "Price do not include VAT"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
