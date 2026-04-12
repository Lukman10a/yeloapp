"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import SafeImage from "./SafeImage";
import { FEATURE_CARS } from "./homeData";

export default function PremiumFleetSection() {
  return (
    <section className="py-16 md:py-24 max-w-screen-2xl mx-auto px-4 md:px-8 border-b border-gray-100 dark:border-gray-800/60 transition-colors relative overflow-hidden">
      <div className="absolute top-20 right-0 w-125 h-125 bg-linear-to-br from-brand-yelo/10 to-transparent dark:from-brand-yelo/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-brand-yelo rounded-full text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yelo z-10 animate-pulse"></span>
            Exclusive Collection
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight text-gray-900 dark:text-white leading-tight">
            A Class Apart.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl font-medium">
            Carefully curated high-performance vehicles for those who demand
            excellence on their journey.
          </p>
        </div>
        <button className="flex items-center gap-2 text-gray-900 dark:text-white font-bold text-base sm:text-lg hover:text-brand-yelo dark:hover:text-brand-yelo transition-colors group border-b-2 border-gray-900 dark:border-white pb-1 hover:border-brand-yelo dark:hover:border-brand-yelo whitespace-nowrap">
          View All Vehicles
          <ArrowUpRight
            size={20}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
        {FEATURE_CARS.map((car, i) => (
          <motion.div
            key={car.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: i * 0.1,
              duration: 0.7,
              ease: [0.21, 1.02, 0.73, 1],
            }}
            className="group relative h-112 sm:h-120 md:h-137.5 rounded-4xl overflow-hidden cursor-pointer flex flex-col justify-end"
          >
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 z-0">
              <SafeImage
                src={car.img}
                alt={car.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-[1.5s] ease-out brightness-90 group-hover:brightness-100"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/60 to-transparent opacity-80 z-10 group-hover:opacity-90 transition-opacity"></div>
            <div
              className={`absolute inset-0 bg-linear-to-t ${car.color} opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-700`}
            ></div>

            <div className="relative z-20 p-6 md:p-8 w-full transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex justify-between items-center mb-4">
                <span className="backdrop-blur-md bg-white/20 border border-white/20 text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                  {car.cat}
                </span>
                <span className="bg-brand-yelo text-black text-xs font-black uppercase px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(255,208,0,0.5)]">
                  {car.discount}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-2 text-white drop-shadow-md">
                {car.name}
              </h3>

              <div className="flex flex-col gap-1 mb-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 h-auto md:h-0 md:group-hover:h-auto overflow-hidden">
                {car.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center text-gray-300 text-sm font-medium"
                  >
                    <CheckCircle
                      size={14}
                      className="text-brand-yelo mr-2 shrink-0"
                    />
                    {feat}
                  </div>
                ))}
              </div>

              <div className="flex items-end justify-between border-t border-white/20 pt-6 mt-2">
                <div className="flex flex-col">
                  <span className="text-gray-400 line-through text-sm font-medium mb-1 drop-shadow-md">
                    SAR {car.crossed}
                  </span>
                  <span className="text-3xl font-black text-white drop-shadow-lg">
                    <span className="text-brand-yelo mr-1">SAR</span>
                    {car.price}
                    <span className="text-sm font-medium text-gray-300 ml-1">
                      /day
                    </span>
                  </span>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center group-hover:bg-brand-yelo group-hover:text-black group-hover:border-brand-yelo transition-all transform group-hover:rotate-45">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
