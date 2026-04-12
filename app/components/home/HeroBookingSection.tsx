"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CarFront,
  ChevronsRight,
  MapPin,
} from "lucide-react";
import SafeImage from "./SafeImage";

type HeroBookingSectionProps = {
  activeTab: string;
  onChangeTab: (tab: string) => void;
};

export default function HeroBookingSection({
  activeTab,
  onChangeTab,
}: HeroBookingSectionProps) {
  return (
    <>
      <section className="relative min-h-[90vh] sm:min-h-[85vh] md:min-h-[95vh] w-full flex items-center justify-start overflow-hidden pt-24 pb-16 md:pb-20 bg-brand-charcoal">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Background"
            sizes="100vw"
            className="object-cover object-center md:object-[center_70%] scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10 dark:bg-brand-charcoal/70 transition-colors duration-700"></div>
          <div className="absolute inset-0 bg-linear-to-r from-brand-charcoal/90 via-brand-charcoal/60 to-transparent z-10 dark:from-brand-charcoal dark:via-brand-charcoal/80"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-yelo/30 blur-[130px] rounded-full z-10 mix-blend-screen pointer-events-none hidden md:block"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 z-20 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 backdrop-blur-md shadow-2xl"
            >
              <span className="w-2 h-2 rounded-full bg-brand-yelo mr-2 animate-pulse"></span>
              REDEFINING MOBILITY IN KSA
            </motion.div>

            <h1 className="text-[2.4rem] sm:text-5xl md:text-7xl lg:text-[85px] font-black leading-[1.05] mb-6 tracking-tight text-white">
              Beyond Your <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-brand-yelo to-yellow-200 pb-2">
                Expectations
                <motion.span
                  className="absolute bottom-1 md:bottom-2 left-0 w-full h-0.75 md:h-2 bg-brand-yelo/60 rounded-full blur-md"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                  style={{ originX: 0 }}
                ></motion.span>
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-300 md:text-gray-200 mb-8 md:mb-12 max-w-2xl leading-relaxed font-medium md:font-light">
              Experience the pinnacle of driving comfort. Drive our exclusive
              selection of meticulously maintained luxury, sports, and economy
              vehicles suited for any destination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-brand-yelo text-black px-8 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all transform hover:scale-[1.03] active:scale-95 shadow-[0_0_30px_rgba(255,208,0,0.3)] group w-full sm:w-auto">
                <CarFront size={22} />
                Reserve Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1.5 transition-transform"
                />
              </button>
              <button className="bg-white/5 border border-white/20 backdrop-blur-xl text-white px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-white/15 transition-all group w-full sm:w-auto">
                Explore Fleet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-30 -mt-12 sm:-mt-16 md:-mt-24 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 p-4 md:p-5 rounded-4xl md:rounded-[3rem] shadow-2xl shadow-gray-900/10 dark:shadow-black/40 relative group"
        >
          <div className="flex flex-col lg:flex-row gap-4 relative w-full">
            <div className="flex overflow-x-auto pb-2 xl:pb-0 xl:border-r border-gray-200 dark:border-gray-800 xl:pr-6 flex-none scrollbar-hide items-center gap-2">
              {["Daily Rental", "Monthly Sub", "Chauffeur"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => onChangeTab(tab)}
                  className={`whitespace-nowrap px-6 py-4 rounded-2xl md:rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-xl scale-100"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex-1 flex flex-col lg:flex-row items-center gap-3 w-full">
              <div className="flex-1 w-full bg-gray-50/80 dark:bg-gray-800/80 rounded-2xl md:rounded-full px-6 py-4 md:py-5 flex items-center gap-4 border border-transparent hover:border-brand-yelo/50 dark:hover:border-brand-yelo/50 transition-all cursor-text focus-within:ring-2 focus-within:ring-brand-yelo/20 focus-within:border-brand-yelo focus-within:bg-white dark:focus-within:bg-gray-900">
                <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-sm text-gray-400 dark:text-gray-300">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">
                    Pick-up Location
                  </span>
                  <input
                    type="text"
                    placeholder="Search city, airport, or branch..."
                    className="bg-transparent border-none outline-none text-gray-900 dark:text-white w-full placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm md:text-base font-semibold"
                  />
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center h-12 w-12 shrink-0 -mx-4 z-10 rounded-full bg-brand-yelo border-4 border-white dark:border-gray-900 cursor-pointer shadow-lg hover:rotate-180 transition-transform duration-500 text-black">
                <ChevronsRight size={20} />
              </div>

              <div className="flex-1 w-full flex flex-col md:flex-row gap-3">
                <div className="flex-1 bg-gray-50/80 dark:bg-gray-800/80 rounded-2xl md:rounded-full px-5 py-4 md:py-5 flex items-center gap-4 border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-pointer hover:bg-white dark:hover:bg-gray-800">
                  <Calendar
                    className="text-gray-400 dark:text-gray-300 flex-none"
                    size={20}
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">
                      Pick-up Date
                    </span>
                    <span className="text-gray-900 dark:text-white text-sm md:text-base font-semibold">
                      Add Date
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-gray-50/80 dark:bg-gray-800/80 rounded-2xl md:rounded-full px-5 py-4 md:py-5 flex items-center gap-4 border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-pointer hover:bg-white dark:hover:bg-gray-800">
                  <Calendar
                    className="text-gray-400 dark:text-gray-300 flex-none"
                    size={20}
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1">
                      Return Date
                    </span>
                    <span className="text-gray-900 dark:text-white text-sm md:text-base font-semibold">
                      Add Date
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full lg:w-auto mt-2 lg:mt-0 bg-gray-900 dark:bg-brand-yelo text-white dark:text-black px-10 py-5 rounded-2xl md:rounded-full font-black text-lg flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-yellow-400 hover:scale-[1.02] active:scale-95 transition-all flex-none shadow-xl lg:ml-2">
                Search <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
