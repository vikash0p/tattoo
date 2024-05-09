import Image from 'next/image'
import React from 'react'
import PriceTable from './PriceTable';

const PriceList = () => {
  return (
    <div className="w-full min-h-[550px] grid grid-cols-1 lg:grid-cols-2 bg-black text-white" id='price'>
      <div className="relative w-full h-full">
        <Image
          src={"/home/price.jpg"}
          alt="price"
          fill
          className="object-cover object-center "
        />
      </div>
      <div className="text-white z-30 px-20 pt-24">
        <h5 className="text-orange-400">PRICING PLAN</h5>
        <h2 className='text-5xl font-semibold'>PRICE LIST</h2>
        <div className='py-10'>
        <PriceTable />
        </div>
      </div>
    </div>
  );
}

export default PriceList
