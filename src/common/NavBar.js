import React from "react";
import Search from "../assets/images/search.png";

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font mx-20 lg:px-20 border-b">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className=" text-xl integralBold text-indigo-800">NFTERS</span>
        </span>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <span className="mr-5 hover:text-gray-900">Marketplace</span>
          <span className="mr-5 hover:text-gray-900">Resource</span>
          <span className="mr-5 hover:text-gray-900">About</span>
        </nav>
        <div className="relative my-1">
          <input
            className="bg-gray-100 mr-3 rounded-full border-0 focus:ring-2 focus:ring-indigo-800 focus:bg-white text-base outline-none text-gray-700 py-1 pl-3 pr-10 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Search"
            type="text"
          />
          <img
            className="absolute z-10 right-6 top-2 w-6"
            src={Search}
            alt="Search"
          />
        </div>
        <button className="inline-flex items-center bg-indigo-800 text-white border-0 mr-3 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
          Upload
        </button>
        <button className="inline-flex items-center text-indigo-800 border-2 border-indigo-800 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default NavBar;
