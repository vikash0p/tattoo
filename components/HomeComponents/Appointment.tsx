'use client'
import Image from 'next/image'
import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import TattooForm from './TattooForm';


const Appointment = () => {
  return (
    <div className="w-full h-[1100px] md:h-screen relative grid grid-cols-1 " id='contact' >
      <div className="w-full h-full relative overflow-x-hidden   ">
        <Image
          src={"/home/2.jpg"}
          alt="Appointment"
          fill
          className="object-cover  "
        />
      </div>
      <div className="absolute inset-10 max-w-7xl m-auto">
        <div className="  w-full min-h-screen  grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div className="space-y-4 text-white">
            <p className="text-sm text-orange-400">BOOK YOUR TATTOO</p>
            <h2 className={`text-5xl font-bold text-white`}>APPOINTMENT</h2>
            <p className="max-w-md">
              Tattoo viverra tristique usto duis vitae diam neque nivamus aestan
              atene artine arinianu ateli finibus viverra nec lacus nedana duru
              meetion setlie in the miss fermen.
            </p>
           <div className='flex flex-row gap-3 items-center'>
            <div className="">
                <FaPhoneVolume size={40} />
            </div>
            <div className="">
                <p className='text-sm uppercase text-orange-400'>appointment</p>
              <p className="text-2xl text-white">+91 1234567890</p>
            </div>
           </div>
          </div>
          <div className=" py-10">
            <TattooForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment
