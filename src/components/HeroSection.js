import React from "react";
import CountUp from "react-countup";
import DotsImage from "../assets/images/heroSection/Dot.png";
import Hero1 from "../assets/images/heroSection/hero1.png";
import Hero2 from "../assets/images/heroSection/hero2.png";
import Hero3 from "../assets/images/heroSection/hero3.png";
import LiveAction from "../assets/images/heroSection/liveAction.png";

const HeroSection = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 container lg:m-20 m-10 lg:px-20">
      <div className="col-span-2">
        <h3 className="integralBold text-4xl">
          Discover, and collect Digital Art NFTs
        </h3>
        <p className="my-4">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <div className="relative">
          <button className="inline-flex mt-5 items-center bg-indigo-800 text-white border-0 mr-3 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
            Explore Now
          </button>
          <img
            className="absolute -z-10 -left-5 top-2 w-40"
            src={DotsImage}
            alt="dots"
          />
        </div>
        <div className="grid grid-cols-5 my-5">
          <div>
            <h3 className="text-3xl integralBold">
              <CountUp end={98} duration={10} />
              K+
            </h3>
            <p>Artwork</p>
          </div>
          <div>
            <h3 className="text-3xl integralBold">
              <CountUp end={12} duration={10} />
              K+
            </h3>
            <p>Auction</p>
          </div>
          <div>
            <h3 className="text-3xl integralBold">
              <CountUp end={15} duration={10} />
              K+
            </h3>
            <p>Artist</p>
          </div>
        </div>
      </div>

      <div className="col-span-2" data-aos="fade-left" data-aos-duration="1500">
        <div className="lg:ml-32 relative">
          <img className="w-80 " src={Hero1} alt="bg-1" />
          <img
            className="w-72 absolute -z-10 left-20 top-4"
            src={Hero2}
            alt="bg-2"
          />
          <img
            className="w-64 absolute -z-20 left-40 top-8"
            src={Hero3}
            alt="bg-3"
          />
          <img
            className="w-20 absolute z-10 top-48 -left-10"
            src={LiveAction}
            alt="bg-4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
