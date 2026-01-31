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
  categoryId: string | null;
  gender: string;
  istrending: boolean;
  isbestselling: boolean;
  tags: string[];
  stock: number;
  createdAt: string;
  updatedAt: string;
};

export type ProductProps = {
  products: Product[];
};
