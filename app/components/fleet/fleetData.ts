export interface FleetCar {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  seats: number;
  bags: number;
  transmission: "A" | "M";
  doors: number;
  ac: "Y" | "N";
  freeKm: number;
  isAvailable: boolean;
}

export const CATEGORIES = [
  "All Fleet",
  "Small Cars",
  "Sedan & compact",
  "SUV & Crossover",
  "Electric",
  "Luxury",
  "Family",
];

export const FLEET_CARS: FleetCar[] = [
  {
    id: "car-1",
    name: "Chery Arizo 5",
    category: "Sedan & compact",
    brand: "Chery",
    price: 152.00,
    originalPrice: 190.00,
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop",
    seats: 4,
    bags: 2,
    transmission: "A",
    doors: 4,
    ac: "Y",
    freeKm: 200,
    isAvailable: true,
  },
  {
    id: "car-2",
    name: "Suzuki Dzire",
    category: "Sedan & compact",
    brand: "Suzuki",
    price: 152.00,
    originalPrice: 190.00,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop",
    seats: 4,
    bags: 2,
    transmission: "A",
    doors: 4,
    ac: "Y",
    freeKm: 200,
    isAvailable: true,
  },
  {
    id: "car-3",
    name: "Hyundai Grand I10",
    category: "Small Cars",
    brand: "Hyundai",
    price: 161.50,
    originalPrice: 190.00,
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=800&auto=format&fit=crop",
    seats: 4,
    bags: 2,
    transmission: "A",
    doors: 4,
    ac: "Y",
    freeKm: 200,
    isAvailable: true,
  },
  {
    id: "car-4",
    name: "Chery Arrizo 6",
    category: "Sedan & compact",
    brand: "Chery",
    price: 166.50,
    originalPrice: 185.00,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
    seats: 5,
    bags: 2,
    transmission: "A",
    doors: 4,
    ac: "Y",
    freeKm: 200,
    isAvailable: true,
  },
  {
    id: "car-5",
    name: "Mercedes S-Class",
    category: "Luxury",
    brand: "Mercedes",
    price: 2500.00,
    originalPrice: 3000.00,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
    seats: 5,
    bags: 3,
    transmission: "A",
    doors: 4,
    ac: "Y",
    freeKm: 200,
    isAvailable: true,
  },
  {
    id: "car-6",
    name: "Porsche 911",
    category: "Sports",
    brand: "Porsche",
    price: 3200.00,
    originalPrice: 3500.00,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop",
    seats: 2,
    bags: 1,
    transmission: "A",
    doors: 2,
    ac: "Y",
    freeKm: 150,
    isAvailable: true,
  }
];
