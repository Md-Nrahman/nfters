import React from "react";
import Image1 from "../assets/images/SellNFTS/image1.png";
import Image2 from "../assets/images/SellNFTS/image2.png";
import Image3 from "../assets/images/SellNFTS/image3.png";
import profile1 from "../assets/images/SellNFTS/profile1.png";
import profile2 from "../assets/images/SellNFTS/profile2.png";
import Button from "../reusables/Button";
const SellYourNFTS = () => {
  return (
    <div className="">
      <div className="lg:m-20 m-10 lg:px-20 md:grid lg:grid-cols-2 items-center space-x-6">
        <div className="flex items-center justify-center space-x-10">
          <div className="space-y-8 flex flex-col items-end">
            <div className="relative w-64">
              <img src={Image1} alt="" className="w-64" />
              <img
                src={profile1}
                alt=""
                className="absolute w-14 z-10 -right-6 -bottom-6"
              />
            </div>

            <div className="relative w-44">
              <img src={Image3} alt="" className="w-44" />
              <img
                src={profile2}
                alt=""
                className="absolute w-14 z-10 -right-6 -bottom-6"
              />
            </div>
          </div>
          <div className="relative w-52">
            <img src={Image2} alt="" className="w-52" />
            <img
              src={profile2}
              alt=""
              className="absolute w-14 z-10 -right-6 -bottom-6"
            />
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-3xl integralBold text-left ">
            Create and Sell Your NFTS
          </h1>
          <p className="py-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <Button title="Sign Up Now" />
        </div>
      </div>
    </div>
  );
};

export default SellYourNFTS;
