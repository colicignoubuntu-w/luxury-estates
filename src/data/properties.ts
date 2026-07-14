export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Mansão Alphaville",
    location: "Alphaville, São Paulo",
    price: 8950000,
    image: "/images/properties/mansion-1.webp",
    bedrooms: 5,
    bathrooms: 7,
    area: 620,
  },
  {
    id: 2,
    title: "Residência Jardim Europa",
    location: "Jardim Europa, São Paulo",
    price: 12500000,
    image: "/images/properties/mansion-2.webp",
    bedrooms: 6,
    bathrooms: 8,
    area: 850,
  },
  {
    id: 3,
    title: "Casa Contemporânea",
    location: "Campinas, São Paulo",
    price: 5600000,
    image: "/images/properties/mansion-3.webp",
    bedrooms: 4,
    bathrooms: 5,
    area: 430,
  },
];

export default properties;