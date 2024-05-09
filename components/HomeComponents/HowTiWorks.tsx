'use client'
import { howToWorks } from '@/utils/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react'

interface indexProps {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const HowTiWorks = ({font}:{font:any}) => {
const [index, setIndex] = useState<number>(0);

    const ClickHandler=(id:number)=>{
        setIndex(id);

    }
    const buttonVariants = {
      initial: { y: 0 },
      animate: { y: 20, transition: { duration: 0.5 } },
    };

  return (
    <div className="max-w-[80%] m-auto min-h-[540px] grid grid-cols-1 lg:grid-cols-2 place-items-center py-10 md:py-0">
      <div className=" space-y-2 md:space-y-4">
        <p className="text-sm text-orange-400">OUR PROCESS</p>
        <h2 className={`text-5xl font-bold ${font.className}`}>
          HOW IT{" "}
          <span className={`Text_StockOne ${font.className} `}>WORKS</span>{" "}
        </h2>
        <p className="max-w-md">
          Tattoo viverra tristique usto duis vitae diam neque nivamus aestan
          atene artine arinianu ateli finibus viverra nec lacus nedana duru
          meetion setlie in the miss fermen.
        </p>
        <ul className="  md:pl-5 space-y-3 text-gray-500">
          <li className="">—— Comfortable and relaxing environment</li>
          <li className="">—— Experienced artist input on your tattoo</li>
        </ul>
      </div>
      <div className="w-full py-8 md:py-0 space-y-3 ">
        {howToWorks.map((item) => {
          return (
            <div
              className="text-start py-2 border-b-2 border-b-orange-400"
              key={item.id}
            >
              <motion.button
                type="button"
                className={`text-start`}
                onClick={() => ClickHandler(item.id)}
                initial="animate" // Use the 'animate' variant on hover
                animate="initial" // Use the 'initial' variant when tapped
                variants={buttonVariants} // Pass the variants
                transition={{ duration: 0.2 }} // Set the transition duration
              >
                <h5 className="text-xl font-semibold">
                  <span className="text-orange-400">{item.id}.</span>{" "}
                  {item.title}
                </h5>
                {index === item.id && (
                  <p className="text-gray-500">{item.des}</p>
                )}
              </motion.button>
            </div>
          );
        })}
      </div>
          </div>
  );
}

export default HowTiWorks
