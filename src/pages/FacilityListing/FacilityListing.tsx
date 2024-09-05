/* eslint-disable @typescript-eslint/no-explicit-any */
import FacilityCard from "@/components/FacilityCard";
import LoadingCard from "@/components/loader/LoadingCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { useGetAllFacilitiesQuery } from "@/redux/api/facilityApi/facilityApi";

const FacilityListing = () => {
  const { data, isLoading } = useGetAllFacilitiesQuery(undefined);
  const facilities = data?.data;
  // console.log(facilities);

  return (
    <div className=" lg:max-w-7xl mx-auto lg:mb-20 mb-10">
      <div>
        <SectionHeader title1="Explore All " title2="Venues" description="" />
      </div>

      {isLoading && <LoadingCard />}

      <div className=" grid lg:grid-cols-3 gap-y-5 lg:gap-y-10 justify-items-center">
        {facilities?.map((facility: any) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default FacilityListing;
