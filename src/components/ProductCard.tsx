import { useRouter } from "next/navigation";
import { useState } from "react";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/products/${product.id}`)}
      className="cursor-pointer basis-2/5 md:basis-1/5"
      onMouseEnter={() => setHoveredProductId(product.id)}
      onMouseLeave={() => setHoveredProductId(null)}
    >
      <div>
        <img
          src={
            hoveredProductId === product.id
              ? product.images[0]
              : product.images[1]
          }
          alt={product.slug}
          className="transition-all duration-300 h-52 md:h-96"
        />
        <div className="text-sm font-bold md:font-semibold md:text-[1rem] grid gap-1 my-1">
          <p className="hover:underline">
            {product.title} - {product.variants.colors}
          </p>
          <p>₹{product.price}</p>
        </div>
      </div>
    </div>
  );
}
