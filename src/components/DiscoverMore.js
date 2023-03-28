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
      <div className="m-20 lg:px-20 py-10">
        <h5 className="text-3xl integralBold">DISCOVER MORE NFTS</h5>
        <div className="space-y-4">
        <Button title="All Categories" />
          <Button title="Art" background="bg-[#DCDCDC]" text="black font-medium hover:bg-gray-200" />
          
          <button class="inline-flex items-center font-medium bg-[#DCDCDC] border-0 mr-3 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
            Art
          </button>
          <button class="inline-flex items-center font-medium bg-[#DCDCDC] border-0 mr-3 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
            Celebrities
          </button>
          <button class="inline-flex items-center font-medium bg-[#DCDCDC] border-0 mr-3 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
            Gaming
          </button>
          <button class="inline-flex items-center font-medium bg-[#DCDCDC] border-0 mr-3 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
            Sport
          </button>
          <button class="inline-flex items-center font-medium bg-[#DCDCDC] border-0 mr-3 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
            Music
          </button>
          <button class="inline-flex items-center font-medium bg-[#DCDCDC] border-0 mr-3 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
            Crypto
          </button>
        </div>

        <div className="grid grid-cols-4  my-8 ">
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
      </div>
    </div>
  );
};

export default DiscoverMore;
