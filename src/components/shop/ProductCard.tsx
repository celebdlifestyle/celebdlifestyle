import { useRouter } from "next/navigation";
import { useState } from "react";
import { Product } from "@/types/product.type";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const image = isHovered ? product.images[1] : product.images[0];

  return (
    <div
      onClick={() =>
        router.push(
          `/products/${product.category.toLocaleLowerCase()}/${product.slug}`,
        )
      }
      className="cursor-pointer basis-2/5 md:basis-1/5 rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <div
          className="transition-transform duration-500 ease-in-out rounded-md"
          style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
        >
          <Image
            src={
              image ||
              "https://res.cloudinary.com/dhydrnckd/image/upload/v1769857248/Placeholder_m6whpi.png"
            }
            alt={product.slug}
            width={400}
            height={500}
            className="h-52 md:h-96 w-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="text-sm font-bold md:font-semibold md:text-[1rem] grid gap-1 my-1">
        <p className="hover:underline">{product.name}</p>
        <p>₹{product.price}</p>
      </div>
    </div>
  );
}
