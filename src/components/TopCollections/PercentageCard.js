import React from "react";
import ethereum from "../../assets/images/TopCollections/ethereum.png";
import verify from "../../assets/images/TopCollections/verify.png";

const PercentageCard = ({ image, textSuccess = false, percentage }) => {
  return (
    <div className="flex justify-center items-center space-x-3">
      <h3 className="font-bold text-lg">1</h3>
      <div className="relative w-20">
        <img src={image} alt="img1" />
        <img
          className="absolute z-10 -top-2 right-3"
          src={verify}
          alt="verified"
        />
      </div>

      <div className="">
        <h3 className="font-bold ">CryptoFunks</h3>
        <img src={ethereum} className="inline mr-2" alt="ethereum" />
        <p className="inline text-sm">19,769.39</p>
      </div>

      <h3
        className={`${
          textSuccess ? "text-green-600" : "text-red-600"
        } font-bold text-lg`}
      >
        {percentage}
      </h3>
      <div></div>
    </div>
  );
};

export default PercentageCard;
