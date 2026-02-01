import Link from "next/link";
import Image from "next/image";

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
    <Link href={`/collections/${slug}/${_id}`}>
      <div className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-zinc-800">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Hover Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="p-3 sm:p-4">
          <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white text-center truncate group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </Link>
  );
}
