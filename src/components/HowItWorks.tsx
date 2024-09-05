import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import workIcon1 from "../assets/images/icons/work-icon1.svg";
import workIcon2 from "../assets/images/icons/work-icon2.svg";
import workIcon3 from "../assets/images/icons/work-icon3.svg";
import SectionHeader from "./shared/SectionHeader";
import { Button } from "./ui/button";

const HowItWorks = () => {
  return (
    <>
      <section className="py-10 lg:pb-10">
        <SectionHeader
          title1="How It "
          title2="Works"
          description="Simplifying the booking process for coaches, venues, and athletes."
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="w-[350px] mx-auto shadow-lg rounded-lg">
            <CardHeader>
              <div className="mb-5 w-[100px] h-[100px] mx-auto bg-[#f9f9f6]   rounded-md flex items-center justify-center ">
                <img className="" src={workIcon1} alt="" />
              </div>
              <CardTitle className="text-center font-Outfit">Join Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-center">
                Quick and Easy Registration: Get started on our software
                platform with a simple account creation process.
              </p>
            </CardContent>
            <CardFooter className="my-3">
              <Button className="w-full bg-gradient dark:text-white">
                Register Now <ArrowRight size={20} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-[350px] mx-auto  shadow-lg rounded-lg">
            <CardHeader>
              <div className="mb-5 w-[100px] h-[100px] mx-auto bg-[#f9f9f6]  rounded-md flex items-center justify-center ">
                <img className="" src={workIcon2} alt="" />
              </div>
              <CardTitle className="text-center font-Outfit">
                Select Venues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-center">
                Find & Reserve Sports Venues Near You. Book venues and premium
                facilities.
              </p>
            </CardContent>
            <CardFooter className="my-3">
              <Button className="w-full bg-gradient dark:text-white">
                View Venues <ArrowRight size={20} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="w-[350px] mx-auto  shadow-lg rounded-lg">
            <CardHeader>
              <div className="mb-5 w-[100px] h-[100px] mx-auto bg-[#f9f9f6]  rounded-md flex items-center justify-center ">
                <img className="" src={workIcon3} alt="" />
              </div>
              <CardTitle className="text-center font-Outfit">
                Booking Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-center">
                Easily book, pay, and enjoy a seamless experience on our
                user-friendly platform.
              </p>
            </CardContent>
            <CardFooter className="my-3">
              <Button className="w-full bg-gradient dark:text-white">
                Book Now <ArrowRight size={20} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
