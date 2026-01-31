"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  _id: string;
  image: string;
  title: string; // HOODIES / CAPS / etc
  slug: string; // hoodies / caps
};

export default function CategoryCard({ _id, image, title, slug }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/collections/${slug}/${_id}`)}
      className="relative overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={500}
        height={650}
        className="object-cover w-full h-[420px] transition-transform duration-300 group-hover:scale-105"
      />

      {/* Bottom overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Title */}
      <div className="absolute bottom-0 w-full py-4">
        <h2 className="text-white text-center tracking-widest text-xl font-semibold">
          {title}
        </h2>
      </div>
    </div>
  );
}
