import { Calendar, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FacilityCard({ facility }: any) {
  return (
    <div className="facilityCard max-w-sm mx-3 lg:mx-0 rounded-lg shadow-lg  overflow-hidden dark:border dark:text-gray-300 ">
      <div className="relative overflow-hidden">
        <Link to={`/facilities/${facility?._id}`}>
          <img
            className="w-full h-56 object-cover  duration-500 ease-in-out"
            src={
              facility?.imageUrl ||
              `https://t4.ftcdn.net/jpg/06/45/35/87/360_F_645358788_Nr0bQp4DMUhVFFUkC5BTuy8b0pe3KtlH.jpg`
            }
            alt="Sports Facility"
          />
        </Link>
        <div className="absolute top-5 left-5 bg-cyan-500 text-white px-2 py-1 rounded-sm text-sm font-semibold">
          Featured
        </div>
        <div className="absolute top-5 right-5 bg-green-700 text-white px-2 py-1 rounded-sm text-sm font-semibold">
          $ {facility?.pricePerHour}/hr
        </div>
      </div>
      <div className="py-4 px-4">
        <div className="flex items-start justify-between ">
          <div className="flex items-center  mb-4 mt-1">
            <div className="bg-yellow-500 text-white px-2 rounded-md text-sm font-bold mr-2">
              4.2
            </div>
            <div className="text-gray-500 font-medium text-sm">300 Reviews</div>
          </div>
          <div className="bg-white border px-1 py-1 rounded-full text-gray-500 hover:bg-green-600 hover:text-white duration-500">
            <Heart size={18} />
          </div>
        </div>
        <Link to={`/facilities/${facility?._id}`}>
          <h2 className=" text-2xl font-bold mb-2 truncate">
            {facility?.name}
          </h2>
        </Link>
        <p className="text-gray-500 text-sm mb-4 truncate">
          {facility?.description}
        </p>
        <div className="flex items-center text-sm font-semibold text-gray-600 mb-4">
          <MapPin size={20} className="text-gray-500 mr-2 truncate" />
          {facility?.location}
        </div>
        <div className="flex items-center text-sm font-semibold text-gray-600 mb-4">
          <Calendar size={20} className="text-gray-500 mr-2" />
          Next Availability: 15 May 2023
        </div>
        <Separator className="my-6 " />
        <div className="flex items-center justify-end pb-3">
          <Link
            to="/booking"
            className="font-semibold flex items-center hover:text-green-600 duration-150"
          >
            <Calendar size={15} className="mr-2" /> Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FacilityCard;
