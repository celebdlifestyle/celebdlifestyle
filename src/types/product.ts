export type Product = {
  id: number;
  productId: string;
  slug: string;
  title: string;
  brand: string;
  description: string;
  category: string;
  tags: string[];
  price: number;
  discountPrice: number;
  currency: string;
  inStock: boolean;
  quantity: number;
  variants: {
    colors: string[];
    sizes: string[] | null;
  };
  images: string[];
  videoUrl: string;
  rating: {
    average: number;
    count: number;
  };
  reviews: any[]; // you can define a separate type for reviews if needed
  shipping: {
    estimatedDelivery: string;
    shippingFee: number;
    freeShippingOver: number;
  };
  returnPolicy: string;
  specifications: {
    weight: string;
    [key: string]: string; // allows for additional spec fields like material, fit, etc.
  };
  warranty: string;
};
export type ProductProps = {
  products: Product[];
};
