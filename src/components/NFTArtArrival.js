import React from 'react'
import Chart from "../assets/images/NFTArrival/chart-square.png"
import TickCard from "../assets/images/NFTArrival/tick-card.png"
const NFTArtArrival = () => {
  return (
    <div className='bg-[#D9E0EC]/20'>
        <div className='m-20 lg:px-20 flex items-center'>
            <h1 className='text-3xl integralBold text-center pt-10'>The amazing NFT art of the world here</h1>
            <div className='flex justify-center items-start'>
              <img src={TickCard}/>
              <div>
                <h1>Fast Transaction</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
              </div>
            </div>
            <div className='flex justify-center items-start'>
              <img src={Chart}/>
              <div>
                <h1>Fast Transaction</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default NFTArtArrival