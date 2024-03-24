import Image from "next/image";
import Hero from "./components/hero";
import Underhero from "./components/underhero";
import WhyStrickk from "./components/whyStrickk";
import Plans from "./components/plans";
import Partners from "./components/partners";
import Testimonials from "./components/testimonials";
import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import Cookieconsent from "./components/cookieconsent";



export default function Home() {

  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // })

  
  return (
   
  //  <ReactLenis root>
<div>
  <Hero/>
  <Underhero/>
  <WhyStrickk/>
  <Plans/>
  <Partners/>
  <Testimonials/>
  <Cookieconsent/>




</div>
// </ReactLenis>
  );
}
