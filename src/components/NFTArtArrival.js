import React from 'react'
import Chart from "../assets/images/NFTArrival/chart-square.png"
import TickCard from "../assets/images/NFTArrival/tick-card.png"
const NFTArtArrival = () => {
  return (
    <div className='bg-[#D9E0EC]/20'>
        <div className='lg:m-20 m-10 lg:px-20 py-20 md:flex space-x-8 items-center justify-center'>
            <h1 className='text-3xl integralBold text-center py-10'>The amazing NFT art of the world here</h1>
            <div className='flex space-x-5 justify-center items-start'>
              <img src={TickCard}/>
              <div>
                <h1 className='font-bold text-lg'>Fast Transaction</h1>
                <p className='mt-3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
              </div>
            </div>
            <div className='flex space-x-5 justify-center items-start'>
              <img src={Chart}/>
              <div>
                <h1 className='font-bold text-lg'>Growth Transaction</h1>
                <p className='mt-3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default NFTArtArrival