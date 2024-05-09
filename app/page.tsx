import React from 'react'
import {  Oswald } from "next/font/google";
import SimpleSlider from '@/components/HomeComponents/SimpleSlider';
import ArtefactTattoo from '@/components/HomeComponents/ArtefactTattoo';
import HowTiWorks from '@/components/HomeComponents/HowTiWorks';
import Appointment from '@/components/HomeComponents/Appointment';
import TattooArtiest from '@/components/HomeComponents/TattooArtiest';
import Service from '@/components/HomeComponents/Service';
import PriceList from '@/components/HomeComponents/PriceList';
import Footer from '@/components/ReusableComponents/Footer';
import GoToTop from '@/components/HomeComponents/GoToTop';

const font = Oswald({ subsets: ["latin"] });

const Home:React.FC = () => {

  return (
    <div>
      <SimpleSlider font={font} />
      <ArtefactTattoo font={font} />
      <HowTiWorks font={font} />
      <Appointment />
      <TattooArtiest font={font} />
      <Service font={font} />
      <PriceList />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Home
