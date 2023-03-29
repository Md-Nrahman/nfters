import React from 'react'
import Button from '../../reusables/Button'

const CollectionFeaturedCard = ({Image1, Image2, Image3, Image4, profile}) => {
  return (
    <div className=''>
           <div className='flex justify-center items-center space-x-3'>
            <img src={Image1} className="w-64"/>
            <div className='space-y-3'>
            <img src={Image2} className="w-20"/>
            <img src={Image3} className="w-20"/>
            <img src={Image4} className="w-20"/>
           </div>
           </div>
           <div className="mx-6 my-3">
           <h3 className="font-bold text-xl mb-3">Amazing Collection</h3>

            <div className="flex justify-around items-center">
              <img src={profile} className="h-10" />
               <p className="text-sm text-gray-600">By Arkhan</p>
              
            <Button bordered title="Total 54 items" background="bg-[#D9E0EC]/20 hover:bg-indigo-800" text="text-indigo-800 hover:text-white"/>
            </div>
            
          </div>
           </div>
  )
}

export default CollectionFeaturedCard