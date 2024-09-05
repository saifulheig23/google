import bannerCock1 from "../assets/images/hero/banner-cock1.svg";
import bannerCock2 from "../assets/images/hero/banner-cock2.svg";
import heroImage1 from "../assets/images/hero/banner-right.png";

const HeroSection = () => {
  return (
    <>
      <section className="bg-hero bg-bottom bg-cover w-full  py-12 ">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 relative">
          <div className="flex flex-col justify-center px-4 mb-8 lg:mb-0">
            <h4 className="text-[#aaf40c] lg:text-xl mb-2 ">
              Book Your Game Space in Seconds
            </h4>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-sans text-white">
              {" "}
              Discover and <span className="text-[#aaf40c]">Reserve</span> Top
              Sports Venues!
            </h1>
            <p className="text-white text-base ">
              Play Without Limits. Easily find and book the best sports
              facilities around you. From fields to courts, secure your spot
              today.
            </p>
          </div>
          <div className=" text-center ">
            <img
              className="text-center mx-auto"
              src={heroImage1}
              alt="Banner"
            />
          </div>
        </div>

        <div className="hidden lg:block absolute top-72 left-36">
          <img src={bannerCock2} alt="" />
        </div>

        <div className=" hidden lg:block absolute top-48 left-1/3">
          <img src={bannerCock1} alt="" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
