import React from "react";
import Image1 from "../assets/images/CollectionFeaturedNFTS/image1.png";
import Image2 from "../assets/images/CollectionFeaturedNFTS/image2.png";
import Image3 from "../assets/images/CollectionFeaturedNFTS/image3.png";
import Image4 from "../assets/images/CollectionFeaturedNFTS/image4.png";
import profile from "../assets/images/CollectionFeaturedNFTS/profile.png";
import CollectionFeaturedCard from "./CollectionFeaturedNFTS/CollectionFeaturedCard";
const CollectionFeaturedNFTS = () => {
  return (
    <div className="bg-[#D9E0EC]/20">
      <div className="lg:m-20 m-10 lg:px-20 py-20">
        <h1 className="text-3xl integralBold py-10">
          Collection Featured NFTS
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
          <CollectionFeaturedCard
            Image1={Image1}
            Image2={Image2}
            Image3={Image3}
            Image4={Image4}
            profile={profile}
          />
          <CollectionFeaturedCard
            Image1={Image2}
            Image2={Image3}
            Image3={Image4}
            Image4={Image1}
            profile={profile}
          />
          <CollectionFeaturedCard
            Image1={Image3}
            Image2={Image4}
            Image3={Image1}
            Image4={Image2}
            profile={profile}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionFeaturedNFTS;
