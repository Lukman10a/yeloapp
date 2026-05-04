export type BranchType = "Airport" | "City";

export interface Location {
  id: string;
  name: string;
  city: string;
  country: string;
  type: BranchType;
  address: string;
  hours: string;
  phone: string;
  image: string;
}

export const CITIES = [
  "All Locations",
  "Riyadh",
  "Jeddah",
  "Dammam",
  "Dubai",
  "Cairo",
  "Casablanca",
];
export const FILTERS = ["All Types", "Airports", "City Branches"];

export const LOCATIONS: Location[] = [
  {
    id: "ruh-1",
    name: "King Khalid International Airport",
    city: "Riyadh",
    country: "Saudi Arabia",
    type: "Airport",
    address: "Terminal 1 & 2 Arrivals, Airport Road, Riyadh",
    hours: "24 Hours / 7 Days",
    phone: "+966 9200 00000",
    image:
      "https://plus.unsplash.com/premium_photo-1733317275880-efc038690422?w=600&auto=format&fit=crop",
    // "https://images.unsplash.com/photo-1526779259212-3e1a9a25e7c5?q=80&w=800&auto=format&fit=crop", // Riyadh airport interior
  },
  {
    id: "ruh-2",
    name: "Olaya Main Branch",
    city: "Riyadh",
    country: "Saudi Arabia",
    type: "City",
    address: "King Fahd Road, Olaya District, Riyadh",
    hours: "08:00 AM - 11:00 PM",
    phone: "+966 11 123 4567",
    image:
      "https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=800&auto=format&fit=crop", // Riyadh city street
  },
  {
    id: "ruh-3",
    name: "Financial District",
    city: "Riyadh",
    country: "Saudi Arabia",
    type: "City",
    address: "King Abdullah Financial District (KAFD), Riyadh",
    hours: "09:00 AM - 10:00 PM",
    phone: "+966 11 987 6543",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800&auto=format&fit=crop", // Modern business district
  },
  {
    id: "jed-1",
    name: "King Abdulaziz International Airport",
    city: "Jeddah",
    country: "Saudi Arabia",
    type: "Airport",
    address: "North Terminal Arrivals Building, Jeddah",
    hours: "24 Hours / 7 Days",
    phone: "+966 9200 00000",
    image:
      "https://images.unsplash.com/photo-1632653323756-a9b6966bc4d1?q=80&w=936&auto=format&fit=crop",
    // "https://images.unsplash.com/photo-1549237513-97f4154f3de2?q=80&w=800&auto=format&fit=crop", // Jeddah airport arrival hall
  },
  {
    id: "jed-2",
    name: "Al Andalus District",
    city: "Jeddah",
    country: "Saudi Arabia",
    type: "City",
    address: "Tahlia Street, Al Andalus, Jeddah",
    hours: "08:00 AM - 11:00 PM",
    phone: "+966 12 345 6789",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop", // Stylish Arabian city street
  },
  {
    id: "dmm-1",
    name: "King Fahd International Airport",
    city: "Dammam",
    country: "Saudi Arabia",
    type: "Airport",
    address: "Main Arrivals Concourse, Dammam",
    hours: "24 Hours / 7 Days",
    phone: "+966 9200 00000",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop", // Airport gate with planes
  },
  {
    id: "dxb-1",
    name: "Dubai International Airport (DXB)",
    city: "Dubai",
    country: "UAE",
    type: "Airport",
    address: "Terminal 3 Arrivals, Dubai",
    hours: "24 Hours / 7 Days",
    phone: "+971 4 123 4567",
    image:
      "https://plus.unsplash.com/premium_photo-1661963237186-6ad19c923d24?w=600&auto=format&fit=crop",
    // "https://images.unsplash.com/photo-1546367564-0b716b28f5cf?q=80&w=800&auto=format&fit=crop", // Dubai skyline and airport vibes
  },
  {
    id: "cai-1",
    name: "Cairo International Airport",
    city: "Cairo",
    country: "Egypt",
    type: "Airport",
    address: "Terminal 2 Ground Floor, Cairo",
    hours: "24 Hours / 7 Days",
    phone: "+20 2 2265 5000",
    image:
      "https://images.unsplash.com/photo-1568600964990-6653286fa3f5?w=600&auto=format&fit=crop",

    // "https://images.unsplash.com/photo-1581032281201-6421cc2154f0?q=80&w=800&auto=format&fit=crop", // Cairo airport interior
  },
  {
    id: "cas-1",
    name: "Mohammed V International Airport",
    city: "Casablanca",
    country: "Morocco",
    type: "Airport",
    address: "Terminal 1 Arrivals Area, Casablanca",
    hours: "24 Hours / 7 Days",
    phone: "+212 522 000000",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=800&auto=format&fit=crop", // Moroccan city skyline
  },
];
