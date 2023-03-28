import React from 'react'
import DotsImage from "../assets/images/heroSection/Dot.png"
import Hero1 from "../assets/images/heroSection/hero1.png"
import Hero2 from "../assets/images/heroSection/hero2.png"
import Hero3 from "../assets/images/heroSection/hero3.png"
import LiveAction from "../assets/images/heroSection/liveAction.png"

const HeroSection = () => {
  return (
    <div className='grid grid-cols-4 container m-20 lg:px-20'>
        <div className='col-span-2'>
            <h3 className='integralBold text-4xl'>Discover, and collect Digital Art NFTs</h3>
        <p className='my-4'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
        <div className='relative'>
        <button className="inline-flex mt-5 items-center bg-indigo-800 text-white border-0 mr-3 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">Explore Now
          </button>
        <img className='absolute -z-10 -left-5 top-2 w-40' src={DotsImage} />
        </div>
        <div className='grid grid-cols-5 my-5'>
          <div>
            <h3 className='text-3xl integralBold'>98K+</h3>
            <p>Artwork</p>
          </div>
          <div>
            <h3 className='text-3xl integralBold'>12K+</h3>
            <p>Auction</p>
          </div>
          <div>
            <h3 className='text-3xl integralBold'>15K+</h3>
            <p>Artist</p>
          </div>
        </div>
        </div>
        

        <div className='col-span-2 '>
<div className='lg:ml-32 relative'>
<img className='w-80 absolute' src={Hero1} />
        <img className='w-80 absolute -z-10 left-6' src={Hero2} />
        <img className='w-80 absolute -z-20 left-12' src={Hero3} />
          <img className='w-20 absolute z-10 top-48 -left-10' src={LiveAction} />
</div>
          </div>

    </div>
  )
}

export default HeroSection