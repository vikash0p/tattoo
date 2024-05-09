import Image from "next/image";
import React from "react";

const ArtefactTattoo = ({ font }: { font: any }) => {
  return (
    <div className="max-w-[80%] m-auto min-h-screen grid grid-cols-1 gap-8 lg:gap-0 lg:py-0 lg:grid-cols-2 place-items-center py-8" id="about">
      <div className="space-y-2 md:space-y-4">
        <p className="text-sm text-orange-400">ESTABLISHED 1985</p>
        <h2 className={`text-5xl font-bold ${font.className}`}>
          ARTEFACT{" "}
          <span className={`Text_StockOne ${font.className} `}>TATTOO</span>{" "}
        </h2>
        <p>
          Tattoo viverra tristique usto duis vitae diam neque nivamus aestan the
          artine arinian aten mis viverra nec lacus nedana duru edino setlie
          suscipe curas tristique inila duman aten elit finibus vivera alacus
          fermen. Lorem arena nuam enim mi obortis esen the uctus cumsan solden
          malisuametion ametion in the auctor orci done vitae.
        </p>
        <ul className="marker:text-orange-400 list-disc pl-5 space-y-3 text-gray-500">
          <li className="">Comfortable and relaxing environment</li>
          <li className="">Experienced artist input on your tattoo</li>
          <li className="">Top of the line cleaning and safety protocols</li>
          <li className="">
            Full aftercare instructions for a well-healed tattoo
          </li>
        </ul>
      </div>
      <div className="w-full">
        <div className="relative max-w-sm h-[450px]  m-auto ">
          <Image
            src={"/home/price.jpg"}
            alt="price"
            fill
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 shadow-2xl  "
          />
        </div>
      </div>
    </div>
  );
};

export default ArtefactTattoo;
