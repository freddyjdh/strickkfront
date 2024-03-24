import React from 'react';
import Heroimg from '@/public/srtrickkheroimg.png';
import Image from 'next/image';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='pt-[17vh] pb-[15vh]'>
      <section className='flex justify-center lg:justify-between align-middle pt-6'>
      <div className='lg:basis-2/3'>
          <div>
          <h1 className='text-4xl lg:text-5xl text-center lg:text-left lg:px-20 font-extrabold lg:font-bold pt-[4rem] leading-[3.4rem]'>Explore Strickk for <br></br>
  an enhanced <br></br>
  investment <br className='lg:hidden'></br> experience.</h1>
        </div>
          <div className='py-11'>
              <p className='text-center lg:text-left lg:px-20'>
              Benefit from top-tier security, risk-free <br></br> liquidity pools, and instant payouts,<br></br>
  ensuring a seamless journey to financial <br></br> growth in the crypto space.
              </p>
          </div>
          <div className='flex justify-center lg:justify-start lg:px-20'>
            <button className='bg-primary px-7 py-3 rounded-full'>Explore Now</button>
          </div>
      </div>
      <div className='hidden lg:block lg:basis-1/3 pt-9'>
          <Image src={Heroimg} alt='hero image'/>
      </div>
      </section>

    </div>
  )
}

export default Hero