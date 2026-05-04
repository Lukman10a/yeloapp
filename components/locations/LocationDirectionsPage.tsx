"use client";

import Link from "next/link";
import { MapPin, Clock, Phone, Navigation, ArrowRight, Compass } from "lucide-react";
import SafeImage from "@/components/home/SafeImage";
import { useLanguage } from "@/app/providers";
import type { Location } from "./locationsData";

interface LocationDirectionsPageProps {
  location: Location;
}

const LocationDirectionsPage = ({ location }: LocationDirectionsPageProps) => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const title = isAr
    ? `الاتجاهات إلى ${location.name}`
    : `Directions to ${location.name}`;
  const description = isAr
    ? `اتبع هذه الإرشادات للوصول إلى فرع يلو في ${location.city}.`
    : `Follow these directions to reach the Yelo branch in ${location.city}.`;

  const directionsSteps = [
    {
      label: isAr ? "حدد نقطة الانطلاق" : "Start from your location",
      detail: isAr
        ? "افتح التطبيق المفضل للملاحة وحدد وجهتك أدناه."
        : "Open your favorite navigation app and choose the destination below.",
    },
    {
      label: isAr ? "اتبع المسار المقترح" : "Follow the suggested route",
      detail: isAr
        ? "سترى أقصر طريق مع تحديثات حركة المرور في الوقت الحقيقي."
        : "You’ll see the shortest route with real-time traffic updates.",
    },
    {
      label: isAr ? "ابحث عن نقطة الوصول" : "Find your arrival point",
      detail: isAr
        ? "تأكد من الوصول إلى نقطة الوصول الصحيحة داخل الفرع عند الوصل."
        : "Make sure to reach the correct arrival point inside the branch once you arrive.",
    },
  ];

  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    location.address,
  )}`;

  return (
    <div className="min-h-screen bg-brand-offwhite dark:bg-brand-charcoal text-gray-900 dark:text-gray-100 selection:bg-brand-yelo selection:text-black transition-colors duration-500 pb-20">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,211,59,0.22),_transparent_40%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-brand-charcoal/95 via-brand-charcoal/70 to-transparent" />

        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.9fr] items-center">
            <div className="rounded-[2rem] bg-white/95 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 shadow-2xl shadow-black/5 p-8 md:p-10 backdrop-blur-xl">
              <div className="inline-flex items-center gap-3 rounded-full bg-brand-yelo/10 text-brand-yelo py-2 px-4 text-xs font-semibold uppercase tracking-[0.24em]">
                <Compass size={16} />
                {isAr ? "اتجاهات الفرع" : "Branch Directions"}
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-brand-charcoal dark:text-white">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 text-lg leading-8">
                {description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-brand-offwhite dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400 mb-3">
                    {isAr ? "الفرع" : "Branch"}
                  </p>
                  <h2 className="text-xl font-black text-gray-900 dark:text-white">
                    {location.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {location.city}, {location.country}
                  </p>
                </div>

                <div className="rounded-3xl bg-brand-offwhite dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400 mb-3">
                    {isAr ? "نوع الفرع" : "Branch Type"}
                  </p>
                  <p className="text-xl font-black text-gray-900 dark:text-white">
                    {isAr ? (location.type === "Airport" ? "مطار" : "مدينة") : location.type}
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {isAr
                      ? "مصمم لخدمات الإيجار السريعة في موقعك." 
                      : "Designed for fast rental pickup at your destination."}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-black/95 text-white p-5 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-yelo mb-2">
                    {isAr ? "العنوان" : "Address"}
                  </p>
                  <p className="font-semibold leading-6 text-sm">{location.address}</p>
                </div>
                <div className="rounded-3xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400 mb-2">
                    {isAr ? "ساعات العمل" : "Hours"}
                  </p>
                  <p className="font-semibold leading-6 text-sm">{location.hours}</p>
                </div>
                <div className="rounded-3xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400 mb-2">
                    {isAr ? "الهاتف" : "Phone"}
                  </p>
                  <p className="font-semibold leading-6 text-sm">{location.phone}</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-charcoal text-white px-6 py-3 font-bold shadow-lg shadow-brand-charcoal/20 hover:bg-black transition-colors"
                >
                  <Navigation size={18} />
                  {isAr ? "افتح في خرائط Google" : "Open in Google Maps"}
                </a>
                <Link
                  href="/locations"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/95 text-gray-900 px-6 py-3 font-bold shadow-sm hover:bg-gray-100 transition-colors">
                  <ArrowRight size={18} className="rotate-180" />
                  {isAr ? "العودة إلى الفروع" : "Back to Locations"}
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 border border-gray-200 dark:border-gray-800 bg-black/10">
              <div className="relative h-full min-h-[24rem]">
                <SafeImage
                  src={location.image}
                  alt={`${location.name} map preview`}
                  className="object-cover w-full h-full"
                  sizes="100vw"
                  quality={70}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.24em] font-semibold">
                    <MapPin size={16} />
                    {isAr ? "نظرة عامة" : "Route preview"}
                  </div>
                  <h2 className="mt-4 text-3xl font-black tracking-tight">
                    {location.city}
                  </h2>
                  <p className="mt-2 max-w-sm text-sm text-gray-200 leading-6">
                    {isAr
                      ? "شاهد العنوان وأقرب طرق الوصول إلى الفرع في لمحة."
                      : "Preview the destination and the most convenient access route at a glance."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.9fr]">
            <div className="rounded-[2rem] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl p-8 md:p-10">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">
                {isAr ? "خطوات الاتجاه" : "Direction Steps"}
              </h2>
              <div className="space-y-5">
                {directionsSteps.map((step, index) => (
                  <div key={step.label} className="flex gap-5 rounded-3xl border border-gray-200 dark:border-gray-800 bg-brand-offwhite dark:bg-gray-950 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yelo text-black text-lg font-black">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {step.label}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-brand-charcoal/95 border border-brand-yelo/20 p-8 text-white shadow-2xl">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-yelo/80">
                    {isAr ? "نصيحة سريعة" : "Quick tip"}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">
                    {isAr ? "أسهل طريق للوصول" : "Easiest route"}
                  </h3>
                </div>
                <div className="rounded-3xl bg-white/10 p-3">
                  <Navigation size={22} className="text-brand-yelo" />
                </div>
              </div>
              <p className="text-sm leading-7 text-gray-200">
                {isAr
                  ? "افضل دائماً استخدام التطبيق الملاحي الذي تعرفه. اضبط وجهتك على العنوان الكامل، ثم اتبع التوجيهات الصوتية للوصول بسرعة وراحة."
                  : "We recommend using the navigation app you’re most comfortable with. Set the destination to the full address and follow voice guidance for a smoother arrival."}
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-yelo/80 mb-2">
                    {isAr ? "الطرق المزدحمة" : "Traffic notes"}
                  </p>
                  <p className="text-sm leading-6 text-gray-100">
                    {isAr
                      ? "تجنب شوارع المدينة الرئيسية خلال ساعات الذروة للحصول على رحلة أسرع."
                      : "Avoid main city roads during peak hours for a faster trip."}
                  </p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-yelo/80 mb-2">
                    {isAr ? "التجهيز قبل الوصول" : "Prepare before arrival"}
                  </p>
                  <p className="text-sm leading-6 text-gray-100">
                    {isAr
                      ? "احجز سيارتك مسبقاً واحتفظ بمعلومات الاستلام لتسهيل الوصول." 
                      : "Book your car in advance and keep your pickup details ready for a smooth arrival."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocationDirectionsPage;
