import React from 'react'
import Button from '../reusables/Button'

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font ">
  <div class="container mx-20 lg:px-20 px-5 py-24  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span class="text-xl integralBold text-indigo-800">NFTERS</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
      <span class="inline-flex sm:ml-auto mt-6 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
    <div class="flex md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Market Place</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">All NFTS</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">New</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Art</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Sports</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Utility</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Music</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Domain Name</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">My Account</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Profile</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Favorite</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">My Collections</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Settings</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Stay In The Loop</h2>
        <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
        <div className='relative my-4'>
    <input class="bg-gray-100 mr-3 w-96 rounded-full border-0 focus:ring-2 focus:ring-indigo-800 focus:bg-white text-base outline-none text-gray-700 py-4 pl-3 pr-10 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter your email address" type="text" />
    <div className="absolute z-10 -right-40 top-3">
    <Button title="Subscribe Now"  />
    </div>
    </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex justify-center">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 Md. Naimur Rahman
        </p>

      
    </div>
  </div>
</footer>
  )
}

export default Footer