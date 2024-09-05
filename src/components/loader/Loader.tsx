import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <>
      <div className="h-[85vh] flex items-center justify-center text-lg font-medium ">
        <Loader2 className="animate-spin mr-3" />
        Loading...
      </div>
      ;
    </>
  );
};

export default Loader;
