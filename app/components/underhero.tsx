'use client'
import React from 'react'
import Hero from './hero'
import AOS from 'aos';
import 'aos/dist/aos.css'; 



AOS.init();

type Props = {}

const Underhero = (props: Props) => {
  return (
    <div data-aos="zoom-in-up"
    >
        <div className='pt-24'>
        <h1 className='text-4xl lg:text-6xl text-center lg:px-20 font-extrabold lg:font-bold  leading-[3.4rem]'>
        Your Precision Path to Unparalleled Wealth <br></br>
Begins Here.
        </h1>
        </div>

    </div>
  )
}

export default Underhero