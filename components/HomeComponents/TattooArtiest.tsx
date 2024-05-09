"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { artiest } from "@/utils/data";
import Image from "next/image";

export default function TattooArtiest({ font }: { font: any }) {
  return (
    <div className="max-w-5xl m-auto min-h-screen ">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper " id="team">
        {artiest.map((value) => {
          return (
            <SwiperSlide key={value.id} className="w-full space-y-3 pt-20 relative">
              <h5 className="text-center text-orange-400">OUR TEAM</h5>
              <h2
                className={`font-bold ${font.className} text-5xl text-center`}
              >
                {" "}
                TATTOO <span className="Text_StockOne ">ARTISTS</span>{" "}
              </h2>
              <div className=" max-w-lg h-[540px] relative overflow-x-hidden   ">
                <Image
                  src={value.img}
                  alt={value.title}
                  fill
                  className="object-cover  "
                  sizes=""
                />
              </div>
              <div className=" absolute top-[50%] left-[40%]">
                <div
                  className=" max-w-md min-h-[250px]  p-6 bg-white">
                    <h2 className="text-2xl font-bold text-orange-400">{value.name} </h2>
                  <h5 className="mb-2  tracking-tight text-gray-900 ">
                  {value.artiest}
                  </h5>
                  <p className="font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
                {value.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
