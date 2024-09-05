import { Skeleton } from "@/components/ui/skeleton";

const LoadingCard = () => {
  return (
    <div className="h-screen w-full grid lg:grid-cols-3 gap-y-6 gap-x-4  ">
      <div className="max-w-sm mx-3 lg:mx-0 rounded-lg ">
        <Skeleton className="w-full h-56 rounded-lg" />

        <div className="space-y-3 mt-6">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="space-y-3 mt-7">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      <div className="max-w-sm mx-3 lg:mx-0 rounded-lg ">
        <Skeleton className="w-full h-56 rounded-lg" />

        <div className="space-y-3 mt-6">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="space-y-3 mt-7">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="max-w-sm mx-3 lg:mx-0 rounded-lg ">
        <Skeleton className="w-full h-56 rounded-lg" />

        <div className="space-y-3 mt-6">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="space-y-3 mt-7">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="max-w-sm mx-3 lg:mx-0 rounded-lg ">
        <Skeleton className="w-full h-56 rounded-lg" />

        <div className="space-y-3 mt-6">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="space-y-3 mt-7">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="max-w-sm mx-3 lg:mx-0 rounded-lg ">
        <Skeleton className="w-full h-56 rounded-lg" />

        <div className="space-y-3 mt-6">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="space-y-3 mt-7">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="max-w-sm mx-3 lg:mx-0 rounded-lg ">
        <Skeleton className="w-full h-56 rounded-lg" />

        <div className="space-y-3 mt-6">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="space-y-3 mt-7">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
