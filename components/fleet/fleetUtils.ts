export const FLEET_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=2000&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1503376780353-7e6692cd0ed2?q=80&w=2000&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?q=80&w=2000&auto=format&fit=crop",
];

const CATEGORY_LABELS_AR: Record<string, string> = {
  "All Fleet": "كل الأسطول",
  "Small Cars": "سيارات صغيرة",
  "Sedan & compact": "سيدان ومدمجة",
  "SUV & Crossover": "دفع رباعي وكروس أوفر",
  Electric: "كهربائي",
  Luxury: "فاخر",
  Family: "عائلي",
  Sports: "رياضي",
};

export function getCategoryLabel(category: string, isAr: boolean) {
  return isAr ? CATEGORY_LABELS_AR[category] || category : category;
}
