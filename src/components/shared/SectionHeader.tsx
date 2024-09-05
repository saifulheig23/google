import React from "react";
import titleHead from "../../assets/images/section-title/title-head.png";

interface SectionHeaderProps {
  title1: string;
  title2: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title1,
  title2,
  description,
}) => {
  return (
    <div className="text-center lg:py-20 py-10">
      <div className="">
        <h1 className="mb-4 relative inline-block text-3xl lg:text-4xl font-bold font-Outfit">
          {title1}
          <span className="bg-gradient bg-clip-text text-transparent">
            {title2}
          </span>
          <img
            className="absolute dark:-top-14 -top-5 left-1/3 -z-30"
            src={titleHead}
            alt=""
          />
        </h1>
      </div>
      <p className="lg:w-[700px] px-2 mx-auto text-gray-500 text-lg font-medium">{description}</p>
    </div>
  );
};

export default SectionHeader;
