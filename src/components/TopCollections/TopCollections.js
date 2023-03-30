import React from "react";
import ethereum from "../../assets/images/TopCollections/ethereum.png";
import Image1 from "../../assets/images/TopCollections/image1.png";
import Image2 from "../../assets/images/TopCollections/image2.png";
import Image3 from "../../assets/images/TopCollections/image3.png";
import Image4 from "../../assets/images/TopCollections/image4.png";
import profile from "../../assets/images/TopCollections/profile.png";
import top1 from "../../assets/images/TopCollections/top1.png";
import PercentageCard from "./PercentageCard";
import PlaceBidCard from "./PlaceBidCard";

const TopCollections = () => {
  return (
    <div className="">
      <div className="lg:m-20 m-10 lg:px-20 grid lg:grid-cols-3 grid-cols-1 space-y-4 space-x-6">
        <div>
          <img src={Image1} alt="Main" />
          <div className="flex justify-between space-x-2 font-medium my-4">
            <div className="flex space-x-2">
              <img src={profile} className="h-12" alt="profile" />
              <div>
                <h3 className="font-bold text-xl">The Futr Abstr</h3>
                <p className="text-sm text-gray-600">10 in the stock</p>
              </div>
            </div>
            <div>
              <p className="block text-gray-600 text-sm">Highest Bid</p>
              <img src={ethereum} className="inline mr-2" alt="ethereum" />
              <p className="inline font-bold">0.25 ETH</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <PlaceBidCard image={Image2} profile={profile} />
          <PlaceBidCard image={Image3} profile={profile} />
          <PlaceBidCard image={Image4} profile={profile} />
        </div>

        <div className="space-y-8 lg:border-l-2 my-2">
          <div>
            <h3 className="ml-8 integralBold">Top Collections Over</h3>
            <h3 className="ml-8 font-medium text-indigo-800">Last 7 days</h3>
          </div>
          <PercentageCard image={top1} textSuccess percentage="+26.52%" />
          <PercentageCard image={top1} percentage="-26.52%" />
          <PercentageCard image={top1} textSuccess percentage="+26.52%" />
          <PercentageCard image={top1} percentage="-26.52%" />
          <PercentageCard image={top1} textSuccess percentage="+26.52%" />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default TopCollections;
