import { Star } from "lucide-react";

export default function RenderStarts(rating: number) {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex gap-0.5 text-orange-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < fullStars ? "fill-orange-400" : "opacity-20"}
        />
      ))}
    </div>
  );
}
