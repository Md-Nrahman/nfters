import React from 'react'

const NavBar = () => {
  return (
    <header class="text-gray-600 body-font mx-20 lg:px-20 border-b">
  <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class=" text-xl integralBold text-indigo-800">NFTERS</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Marketplace</a>
      <a class="mr-5 hover:text-gray-900">Resource</a>
      <a class="mr-5 hover:text-gray-900">About</a>
    </nav>
    <button class="inline-flex items-center bg-indigo-800 text-white border-0 mr-3 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">Upload
          </button>
          <button class="inline-flex items-center text-indigo-800 border-2 border-indigo-800 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">Connect Wallet
          </button>
  </div>
</header>
  )
}

export default NavBar