'use client'
import { artiest, service } from "@/utils/data";
import Image from "next/image";
import React from "react";
import PriceTable from "./PriceTable";

const Service = ({font}:{font:any}) => {
  return (
    <div className="max-w-5xl m-auto py-20" id="service">
      <h5 className="text-orange-400">WHAT WE DO</h5>
      <h2 className="text-5xl font-bold pb-8 md:pb-0">OUR SERVICES</h2>
      <div className="">
        {service.map((value, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              className={`w-full h-full flex flex-col lg:flex-row even:md:flex-row-reverse`}
              key={value.id}
            >
              <div className="flex-1">
                <div>
                  <Image
                    src={value.img}
                    alt={value.title}
                    width={500}
                    height={400}
                  />
                </div>
              </div>
              <div className="flex-1 py-8 flex  gap-5 ">
                <div className="">
                  <h1
                    className={`text-6xl text-orange-400 Text_StockOne ${font.className}`}
                  >
                    {value.number}{" "}
                  </h1>
                </div>
                <div className="">
                  <h1 className="text-2xl text-orange-400">{value.name} </h1>
                  <p>{value.title}...</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
