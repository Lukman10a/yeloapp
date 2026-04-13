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

export const CITIES = ["All Locations", "Riyadh", "Jeddah", "Dammam", "Dubai", "Cairo", "Casablanca"];
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
    image: "https://images.unsplash.com/photo-1544626154-15e8c17b0780?q=80&w=800&auto=format&fit=crop", // Airport terminal inside
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
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop", // Modern city street
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
    image: "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?q=80&w=800&auto=format&fit=crop", // KAFD lookalike
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
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop", // Modern airport
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
    image: "https://images.unsplash.com/photo-1616462725356-4226fabaebec?q=80&w=800&auto=format&fit=crop", // Palm trees city
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
    image: "https://images.unsplash.com/photo-1625406085542-f288bede8dc0?q=80&w=800&auto=format&fit=crop", // Airport setup
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
    image: "https://images.unsplash.com/photo-1546415822-b5eab683abdb?q=80&w=800&auto=format&fit=crop", // Dubai skyline
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
    image: "https://images.unsplash.com/photo-1574512402130-9b577ca226f9?q=80&w=800&auto=format&fit=crop", // Cairo look
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
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop", // Moroccan architecture
  },
];