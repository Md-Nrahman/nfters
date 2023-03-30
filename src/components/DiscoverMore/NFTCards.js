import React from "react";
import etherum from "../../assets/images/DiscoverMoreNFT/etherum.png";

const NFTCards = ({ Image1, profile1, profile2, profile3, profile4 }) => {
  return (
    <div className="bg-white p-6 mx-3 rounded-2xl w-auto mb-3">
      <div className="relative mb-7">
        <img src={Image1} className="w-64" alt="background" />
        <img
          src={profile1}
          className="absolute z-0 -bottom-4 left-2"
          alt="profile1"
        />
        <img
          src={profile2}
          className="absolute z-10 -bottom-4 left-8"
          alt="profile2"
        />
        <img
          src={profile3}
          className="absolute z-10 -bottom-4 left-14"
          alt="profile3"
        />
        <img
          src={profile4}
          className="absolute z-10 -bottom-4 left-20"
          alt="profile4"
        />
      </div>
      <h3 className="font-medium text-xl mb-3">ArtCrypto</h3>
      <div className="flex justify-between">
        <div className="flex space-x-2 font-medium">
          <img src={etherum} className="" alt="ethereum" />
          <p className="text-[#00AC4F] inline">0.25 ETH</p>
        </div>
        <p className="text-gray-500 font-medium inline">1 of 321</p>
      </div>
      <hr className="mt-5 mb-3" />
      <div className="flex justify-between">
        <div className="flex space-x-2 font-medium">
          <p className="inline text-indigo-800 bg-[#F5F5F5] p-2 rounded-full">
            3h 50m 2s left
          </p>
        </div>
        <p className="font-medium text-indigo-800 p-2 text-lg inline">
          Place a bid
        </p>
      </div>
    </div>
  );
};

export default NFTCards;
