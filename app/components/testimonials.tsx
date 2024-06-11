import React from 'react';
import Image from 'next/image';
import Man from '@/public/unsplash_pAtA8xe_iVM.png';

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div>
        <div>
        <h1 className=' py-20 text-3xl lg:text-4xl text-center lg:text-left lg:px-20 font-extrabold lg:font-bold  leading-[3.4rem]'>
            TESTIMONIALS
        </h1>
        </div>
        <div className='flex justify-center'>
            <div className='w-[90vw] h-full bg-primary rounded-md flex flex-col gap-14 lg:flex-row lg:justify-between py-15'>
                <span className='lg:basis-2/3 px-10 lg:px-20 mt-12'>
                    <h3 className='font-extrabold text-3xl'> "</h3>
                    <p className='text-xl '>
                    Strickk has seamlessly taken over from Cryptcoinvest, and the enhanced features have made my investment journey more intuitive. The commitment to security and the promise of instant payouts instills confidence in my financial decisions.
                    </p>
                    <h3 className='text-right text-3xl py-7 font-extrabold'>
                        John D.    "
                    </h3>
                </span>
                <span className='lg:basis-1/3'>
                    <Image className='relative   left-24 lg:left-16 h-[23rem] w-[18.5rem] z-10'  src={Man} alt="man"/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Testimonials