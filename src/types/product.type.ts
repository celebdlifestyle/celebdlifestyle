export type Product = {
  _id: number; // Mongo id
  name: string;
  slug: string;
  description: string;
  brand: string;
  thumbnail: string;
  images: string[];
  price: number;
  category: string;
  categorySlug: string;
  gender: string;
  isTrending: boolean;
  isBestSelling: boolean;
  isCelebdGoldPlated: boolean;
  isCelebdSilverPlated: boolean;
  isCelebdWhitePlated: boolean;
  isCelebdBlackPlated: boolean;
  tags: string[];
  stock: number;
  createdAt: string;
  updatedAt: string;
};

export type ProductProps = {
  products: Product[];
};
