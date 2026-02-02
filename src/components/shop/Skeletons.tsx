export const ProductCardSkeleton = () => {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full aspect-square bg-zinc-800" />

      {/* Content skeleton */}
      <div className="p-3 space-y-3">
        {/* Title skeleton */}
        <div className="h-4 bg-zinc-800 rounded w-3/4" />

        {/* Price skeleton */}
        <div className="h-5 bg-zinc-800 rounded w-1/2" />

        {/* Button skeleton */}
        <div className="h-9 bg-zinc-800 rounded" />
      </div>
    </div>
  );
};
