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

export const ProductPageSkeleton = () => {
  return (
    <div className="container px-4 py-8 mx-auto md:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Images Skeleton */}
        <div className="space-y-4">
          {/* Main Image Skeleton */}
          <div
            className="relative w-full overflow-hidden bg-gray-800 rounded-lg animate-pulse"
            style={{ aspectRatio: "4/5" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
          </div>

          {/* Thumbnails Skeleton */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative w-full overflow-hidden bg-gray-800 rounded-lg animate-pulse"
                style={{ aspectRatio: "4/5" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Skeleton */}
        <div className="space-y-6">
          {/* Brand Skeleton */}
          <div className="w-24 h-4 bg-gray-800 rounded animate-pulse"></div>

          {/* Title Skeleton */}
          <div className="space-y-2">
            <div className="w-3/4 h-8 bg-gray-800 rounded animate-pulse"></div>
            <div className="w-1/2 h-8 bg-gray-800 rounded animate-pulse"></div>
          </div>

          {/* Price Skeleton */}
          <div className="w-32 h-10 bg-gray-800 rounded animate-pulse"></div>

          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="w-24 h-6 bg-gray-800 rounded animate-pulse"></div>
            <div className="w-full h-4 bg-gray-800 rounded animate-pulse"></div>
            <div className="w-full h-4 bg-gray-800 rounded animate-pulse"></div>
            <div className="w-3/4 h-4 bg-gray-800 rounded animate-pulse"></div>
          </div>

          {/* Details Skeleton */}
          <div className="p-6 space-y-4 border border-gray-800 rounded-lg">
            <div className="w-32 h-6 bg-gray-800 rounded animate-pulse"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="w-20 h-4 bg-gray-800 rounded animate-pulse"></div>
                <div className="w-32 h-4 bg-gray-800 rounded animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Button Skeleton */}
          <div className="w-full h-14 bg-gray-800 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
