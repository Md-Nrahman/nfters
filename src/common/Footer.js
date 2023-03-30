import React from "react";
import Button from "../reusables/Button";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font ">
      <div className="container mx-auto lg:px-20  py-24  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="text-xl integralBold text-indigo-800">NFTERS</span>
          </span>
          <p className="mt-2 text-sm text-gray-500">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <span className="inline-flex sm:ml-auto mt-6 justify-center sm:justify-start">
            <span className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </span>
            <span className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </span>
            <span className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </span>
          </span>
        </div>
        
          <div className="px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest mb-3">
              Market Place
            </h2>
            <nav className="list-none mb-10">
              <li>
                <span className="text-gray-600 hover:text-gray-800">
                  All NFTS
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800">New</span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800">Art</span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800">
                  Sports
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800">
                  Utility
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800">Music</span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800">
                  Domain Name
                </span>
              </li>
            </nav>
          </div>
          <div className="px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest mb-3">
              My Account
            </h2>
            <nav className="list-none mb-10">
              <li>
                <span className="text-gray-600 hover:text-gray-800">
                  Profile
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800">
                  Favorite
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800">
                  My Collections
                </span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-800">
                  Settings
                </span>
              </li>
            </nav>
          </div>
          <div className="px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest mb-3">
              Stay In The Loop
            </h2>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <div className="relative my-4">
              <input
                className="bg-gray-100 mr-3 w-full rounded-full border-0 focus:ring-2 focus:ring-indigo-800 focus:bg-white text-base outline-none text-gray-700 py-4 pl-3 pr-10 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your email address"
                type="text"
              />
              <div className="my-2 mx-auto">
                <Button title="Subscribe Now" />
              </div>
            </div>
          </div>
        
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex justify-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Md. Naimur Rahman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
