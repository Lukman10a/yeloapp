export const NAV_LINKS = ["Fleet", "Monthly Subscription", "Offers", "Locations"];

export const FEATURE_CARS = [
  {
    name: "Mercedes S-Class",
    price: "2,500",
    crossed: "3,000",
    cat: "Luxury",
    discount: "20% OFF",
    features: ["V8 Engine", "Leather Interior", "Massage Seats"],
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-600/20 to-transparent",
  },
  {
    name: "BMW X7",
    price: "1,800",
    crossed: "2,000",
    cat: "SUV",
    discount: "10% OFF",
    features: ["7 Seater", "Panoramic Roof", "All-Wheel Drive"],
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
    color: "from-zinc-600/20 to-transparent",
  },
  {
    name: "Porsche 911",
    price: "3,200",
    crossed: "3,500",
    cat: "Sports",
    discount: "5% OFF",
    features: ["0-100 in 3.2s", "Sport Chrono", "Bucket Seats"],
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=800&auto=format&fit=crop",
    color: "from-red-600/20 to-transparent",
  },
  {
    name: "Audi RS e-tron GT",
    price: "2,900",
    crossed: "3,200",
    cat: "Electric",
    discount: "15% OFF",
    features: ["Fully Electric", "Bang & Olufsen", "Air Suspension"],
    img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop",
    color: "from-brand-yelo/20 to-transparent",
  },
] as const;

export const BENTO_CATEGORIES = [
  {
    title: "Luxury",
    desc: "Arrive in absolute distinction.",
    img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "SUV & Crossover",
    desc: "Space for the whole family.",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Sports",
    desc: "Feel the thrill of the road.",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Sedan & Compact",
    desc: "Perfect for daily city drives.",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
] as const;
