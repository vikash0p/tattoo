"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { sliderData } from "@/utils/data";
import Image from "next/image";

interface SimpleSliderProps{
    font:any,
}
export default function SimpleSlider({font}:SimpleSliderProps) {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
          dynamicBullets:true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
          id="#"
        ></div>
        {sliderData.map((item) => {
            console.log("🚀 ~ file: SimpleSlider.tsx:34 ~ item:", item.title.split(' '));
            const title=item.title.split(' ');
            const LastTitle=title[title.length -1]
            const AllTitle=title.slice(0, title.length -1).join(" ")
          return (
            <SwiperSlide key={item.id} className="w-full h-96 md:min-h-screen relative">
              <div className="w-full h-full">
                <div className="relative w-full min-h-screen ">
                  <Image src={item.img} alt={item.title} fill priority />
                </div>
              </div>

              <div className="absolute top-1/4  w-1/2 left-32  text-white   ">
                <div className="space-y-4">
                  <div className="title" data-swiper-parallax="-300">
                    <h5 className="text-orange-400 uppercase ">
                      {" "}
                      Welcome to karma tattoo
                    </h5>{" "}
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">
                    <h2 className=" text-3xl md:text-5xl lg:text-7xl font-semibold">
                      {AllTitle}{" "}
                      <span className={`Text_Stock ${font.className}`}>
                        {LastTitle}{" "}
                      </span>{" "}
                    </h2>
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <button type="button" className=" px-4 lg:px-8 py-3 bg-orange-400">
                      {" "}
                      Book Your Tattoo
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
