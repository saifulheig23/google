import FacilityCard from "./FacilityCard";
import SectionHeader from "./shared/SectionHeader";
import { Button } from "./ui/button";

const FeaturedVenues = () => {
  return (
    <section className="lg:max-w-7xl mx-auto pb-10 lg:pb-10">
      <SectionHeader
        title1="Featured "
        title2="Venues"
        description="Advanced sports venues offer the latest facilities, dynamic and unique environments for enhanced badminton performance."
      />

     
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          <FacilityCard />
          <FacilityCard />
          <FacilityCard />
      </div>
      <div className="mt-16 text-center w-full">
        <Button className="bg-gradient text-center px-6 py-4">Explore More</Button>
      </div>
      
    </section>
  );
};

export default FeaturedVenues;
