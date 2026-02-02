import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  _id: string;
  image: string;
  title: string;
  slug: string;
}

export default function CategoryCard({
  _id,
  image,
  title,
  slug,
}: CategoryCardProps) {
  return (
    <Link href={`/products/${slug}`}>
      <div className="group cursor-pointer">
        {/* Image Container - 4:5 aspect ratio */}
        <div
          className="relative w-full overflow-hidden bg-gray-900 rounded-lg"
          style={{ aspectRatio: "4/5" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
        </div>

        {/* Title */}
        <h3 className="mt-3 text-center text-sm font-medium text-gray-200 transition-colors duration-200 group-hover:text-orange-500 sm:text-base">
          {title}
        </h3>
      </div>
    </Link>
  );
}
