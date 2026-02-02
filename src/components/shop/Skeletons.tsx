export function CategoryCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-64 lg:h-80 rounded-md bg-zinc-800" />
      <div className="mt-3 mx-auto w-24 h-4 rounded-full bg-zinc-800" />
    </div>
  );
}

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

export const SidebarCategoryCardSkeleton = () => {
  return (
    <div className="space-y-2 animate-pulse">
      <div className="relative w-full overflow-hidden rounded-lg h-28 bg-zinc-800">
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <div className="h-3 w-20 bg-zinc-700 rounded" />
        </div>
      </div>
    </div>
  );
};

export const SidebarProductCardSkeleton = () => {
  return (
    <div className="space-y-2 animate-pulse">
      <div className="relative w-full overflow-hidden rounded-lg h-28 bg-zinc-800" />
      <div className="space-y-1">
        <div className="h-3 bg-zinc-800 rounded w-3/4" />
        <div className="flex items-center justify-between">
          <div className="h-3 bg-zinc-800 rounded w-1/3" />
          <div className="h-2 bg-zinc-800 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
};
