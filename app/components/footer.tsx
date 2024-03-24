import React from 'react'
import Image from 'next/image';
import Logo from '@/public/whitelogo.png'


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className=' w-[100vw] overflow-x-hidden '>
      <div className='flex justify-center relative top-12'>
        <div className='h-[32vh] w-[80vw] bg-[#f4bf68]  rounded-xl flex justify-center'>
          <div  className='pt-12 '>
            <div>
                          <h3 className='text-center text-2xl font-black '>Stay Connected</h3>
            <p className='px-[6rem] lg:px-[18rem] text-center pb-4 text-xs font-thin'>
            Instantly discover answers in our support center for seamless
crypto buying and selling with us
            </p>
            </div>

           
            <span className='relative flex justify-center left-12'>
              <input className='bg-transparent w-[67vw] lg:w-[40vw] leading-none text-white px-3 border border-solid border-black rounded-2xl h-[2.6rem]' placeholder='Enter Email'></input>
              <button className='relative right-[27vw] lg:right-[9vw]  h-9 top-[0.18rem] text-xs  bg-black text-white  w-[6rem] py-2 rounded-2xl'>
                Join Now
              </button>
            </span>
            </div>
        </div>

      </div>
      <div className='h-[50vh] bg-black'>
        <div className='relative  top-16'>
          <div className='flex justify-center lg:justify-start pt-2 pb-9'>
          <Image className='h-[5rem] w-[10rem]' src={Logo} alt='footer logo'/>
        </div>
        <div className='flex justify-center'>
          <ul className='text-white flex gap-[4rem]'>
            <li>
              Home
            </li>
            <li>
              Service
            </li>
            <li>
              About Us
            </li>
          </ul>
        </div>
        <div className='text-white bg-black text-center px-[4rem] pt-7 lg:text-left lg:px-[1rem] lg:w-[20rem]'>
          <p className='pb-[1rem] border-b-2'>Your secure gateway to the dynamic world of cryptocurrencies, offering top-tier protection and peace of mind for your investments.</p>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Footer