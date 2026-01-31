import { useRouter } from "next/navigation";
import { useState } from "react";
import { Product } from "@/types/product.type";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const router = useRouter();
  const image =
    hoveredProductId === product._id ? product.images[0] : product.images[1];

  return (
    <div
      onClick={() => router.push(`/products/${product._id}`)}
      className="cursor-pointer basis-2/5 md:basis-1/5"
      onMouseEnter={() => setHoveredProductId(product._id)}
      onMouseLeave={() => setHoveredProductId(null)}
    >
      <div>
        <Image
          src={
            image ||
            "https://res.cloudinary.com/dhydrnckd/image/upload/v1769857248/Placeholder_m6whpi.png"
          }
          alt={product.slug}
          width={400}
          height={500}
          className="transition-all duration-300 h-52 md:h-96 w-full object-cover"
        />

        <div className="text-sm font-bold md:font-semibold md:text-[1rem] grid gap-1 my-1">
          <p className="hover:underline">{product.name}</p>
          <p>₹{product.price}</p>
        </div>
      </div>
    </div>
  );
}
