import React from "react";
import verify from "../assets/images/TopCollections/verify.png";
import profile from "../assets/images/TopCollections/profile.png";
import ethereum from "../assets/images/TopCollections/ethereum.png";
import ethereum2 from "../assets/images/TopCollections/ethereum2.png";
import Image1 from "../assets/images/TopCollections/image1.png";
import Image2 from "../assets/images/TopCollections/image2.png";
import top1 from "../assets/images/TopCollections/top1.png";
import Button from "../reusables/Button";
import PercentageCard from "./TopCollections/PercentageCard";
const TopCollections = () => {
  return (
    <div className="">
      <div className="m-20 lg:px-20 grid grid-cols-3 space-x-6">
        <div>
          <img src={Image1} alt="Main" />
          <div className="flex justify-between space-x-2 font-medium my-4">
            <div className="flex space-x-2">
              <img src={profile} className="h-12" />
              <div>
                <h3 className="font-bold text-xl">The Futr Abstr</h3>
                <p className="text-sm text-gray-600">10 in the stock</p>
              </div>
            </div>
            <div>
              <p className="block text-gray-600 text-sm">Highest Bid</p>
              <img src={ethereum} className="inline mr-2" />
              <p className="inline font-bold">0.25 ETH</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <img src={Image2} alt="Main" />
            <div className="space-y-4">
              <h3 className="font-bold text-xl">The Futr Abstr</h3>
              <div className="flex space-x-2">
                <img src={profile} className="h-10" />
                <div className="flex space-x-3 items-center">
                  <div className="border-2 px-2 py-1 rounded-lg text-[#00AC4F] border-[#00AC4F]">
                    <img src={ethereum2} className="inline mr-2 h-5" />
                    <p className="inline font-bold text-sm">0.25 ETH</p>
                  </div>
                  <p className="text-sm text-gray-600">1 of 8</p>
                </div>
              </div>
              <Button
                title="Place a bid"
                bordered
                background="none hover:bg-indigo-800"
                text="text-indigo-800 hover:text-white"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img src={Image2} alt="Main" />
            <div className="space-y-4">
              <h3 className="font-bold text-xl">The Futr Abstr</h3>
              <div className="flex space-x-2">
                <img src={profile} className="h-10" />
                <div className="flex space-x-3 items-center">
                  <div className="border-2 px-2 py-1 rounded-lg text-[#00AC4F] border-[#00AC4F]">
                    <img src={ethereum2} className="inline mr-2 h-5" />
                    <p className="inline font-bold text-sm">0.25 ETH</p>
                  </div>
                  <p className="text-sm text-gray-600">1 of 8</p>
                </div>
              </div>
              <Button
                title="Place a bid"
                bordered
                background="none hover:bg-indigo-800"
                text="text-indigo-800 hover:text-white"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img src={Image2} alt="Main" />
            <div className="space-y-4">
              <h3 className="font-bold text-xl">The Futr Abstr</h3>
              <div className="flex space-x-2">
                <img src={profile} className="h-10" />
                <div className="flex space-x-3 items-center">
                  <div className="border-2 px-2 py-1 rounded-lg text-[#00AC4F] border-[#00AC4F]">
                    <img src={ethereum2} className="inline mr-2 h-5" />
                    <p className="inline font-bold text-sm">0.25 ETH</p>
                  </div>
                  <p className="text-sm text-gray-600">1 of 8</p>
                </div>
              </div>
              <Button
                title="Place a bid"
                bordered
                background="none hover:bg-indigo-800"
                text="text-indigo-800 hover:text-white"
              />
            </div>
          </div>
        </div>
        <div className="space-y-8 border-l-2">
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
