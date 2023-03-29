import React from "react";
import Image1 from "../assets/images/DiscoverMoreNFT/image1.png";
import Image2 from "../assets/images/DiscoverMoreNFT/image2.png";
import Image3 from "../assets/images/DiscoverMoreNFT/image3.png";
import Image4 from "../assets/images/DiscoverMoreNFT/image4.png";
import profile1 from "../assets/images/DiscoverMoreNFT/profile1.png";
import profile2 from "../assets/images/DiscoverMoreNFT/profile2.png";
import profile3 from "../assets/images/DiscoverMoreNFT/profile3.png";
import profile4 from "../assets/images/DiscoverMoreNFT/profile4.png";
import Button from "../reusables/Button";
import NFTCards from "./DiscoverMore/NFTCards";

const DiscoverMore = () => {
  return (
    <div className="bg-[#D9E0EC]/20">
      <div className="lg:m-20 m-10 lg:px-20 py-10">
        <h5 className="text-3xl integralBold">DISCOVER MORE NFTS</h5>
        <div className="space-y-4">
          <Button title="All Categories" />
          <Button
            title="Art"
            background="bg-[#DCDCDC]"
            text="black font-medium hover:bg-gray-200"
          />
          <Button
            title="Celebrities"
            background="bg-[#DCDCDC]"
            text="black font-medium hover:bg-gray-200"
          />
          <Button
            title="Gaming"
            background="bg-[#DCDCDC]"
            text="black font-medium hover:bg-gray-200"
          />
          <Button
            title="Sport"
            background="bg-[#DCDCDC]"
            text="black font-medium hover:bg-gray-200"
          />
          <Button
            title="Music"
            background="bg-[#DCDCDC]"
            text="black font-medium hover:bg-gray-200"
          />
          <Button
            title="Crypto"
            background="bg-[#DCDCDC]"
            text="black font-medium hover:bg-gray-200"
          />
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 my-8 ">
          <NFTCards
            Image1={Image1}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image2}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image3}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image4}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image2}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image3}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image4}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image1}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image3}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image4}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image1}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <NFTCards
            Image1={Image2}
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
        </div>

        <div className="flex justify-center">
        <Button
          title="More NFTS"
          bordered
          background="none hover:bg-indigo-800"
          text="text-indigo-800 hover:text-white"
        />
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
