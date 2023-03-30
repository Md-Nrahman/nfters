import React from "react";
import ethereum2 from "../../assets/images/TopCollections/ethereum2.png";
import Button from "../../reusables/Button";

const PlaceBidCard = ({ image, profile }) => {
  return (
    <div className="flex items-center space-x-4">
      <img src={image} alt="Main" />
      <div className="space-y-4">
        <h3 className="font-bold text-xl">The Futr Abstr</h3>
        <div className="flex space-x-2">
          <img src={profile} className="h-10" alt="profile" />
          <div className="flex space-x-3 items-center">
            <div className="border-2 px-2 py-1 rounded-lg text-[#00AC4F] border-[#00AC4F]">
              <img src={ethereum2} className="inline mr-2 h-5" alt="ethereum" />
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
  );
};

export default PlaceBidCard;
