// import CheckAvailability from "@/components/CheckAvailability";
import BookingFacility from "@/components/BookingFacility";
import { useGetSingleFacilityQuery } from "@/redux/api/facilityApi/facilityApi";
import { Loader2 } from "lucide-react";
import { useParams } from "react-router-dom";

const FacilityDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleFacilityQuery(id);
  const facility = data?.data;

  // console.log(facility?.name);

  if (isLoading) {
    return (
      <div className="h-[85vh] flex items-center justify-center font-semibold ">
        <Loader2 className="animate-spin mr-3" />
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="w-full lg:max-w-7xl mx-auto bg-purple-300">
        <div className="w-full lg:w-[800px] mx-auto bg-red-600">
          <img
            className="object-cover w-full"
            src={facility?.imageUrl}
            alt={facility?.name}
          />
        </div>
        <div>
          <BookingFacility facility={facility} />
        </div>
      </div>
    </>
  );
};

export default FacilityDetails;
