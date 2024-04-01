'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

import menuOpen from '@/public/icon-open.png';
import menuClose from '@/public/icon-close.png';
import Logo from '@/public/logo.png';
import Link from 'next/link';

type Props = {}




const Nav = (props: Props) => {
    const [open, setopen] = useState<boolean>(false)

useEffect(() => {
   gsap.fromTo('.mobilemenu', {x:-200}, {x:0})
 })
 
// useEffect(() => {
//    {open && gsap.fromTo('.mobilemenu', {x:0}, {x:-200})}
//  })
 

  return (
    <div className='fixed top-0 left-0 right-0 pt-5 h-20 bg-white'>
    <div className='flex justify-end gap-[5rem] lg:gap-[18vw] pt-3 lg:px-[9vw]'>
        
        <span>
          <a href='/'>  <Image src={Logo} alt="logo"/></a>
        </span>
        <span className='h-8 w-8 lg:hidden relative left-[4rem]' onClick={()=>setopen(!open)}>
        <Image src={open ? menuClose : menuOpen} alt='handle menu button'/>
        </span>
        <span>
          <ul className='hidden lg:flex gap-[2rem]'>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/plans'>Plans</a></li>
            <li><a href='/contact'>Contact</a></li>

          </ul>
        </span>
        <span className='hidden lg:flex gap-1'>
          <Link href={'portal.strickk.com/login'}><button className='transition ease-in-out delay-150  border border-[#f4bf68] rounded-lg w-[5.5rem] h-[2.2rem] hover:bg-[#f4bf68]'>Login</button></Link>
          <Link href={'portal.strickk.com/register'}> <button className='transition ease-in-out delay-150  border border-[#f4bf68] bg-[#f4bf68] rounded-lg w-[5.5rem] h-[2.2rem] hover:bg-white' >Sign up</button></Link>
        </span>
    </div>
    {open && <div className='flex justify-center align-middle h-[100vh] w-full bg-white py-[30vh] mobilemenu'>
      <ul className='text-[2.5rem]'>
     <a href='/'>   <li className=''>Home</li></a>
     <a href='about'>    <li>About</li></a>
     <a href='plans'>   <li>Plans</li></a>
     <a href='/'>   <li>Contact</li></a>

      
      </ul>

    </div>}
    </div>
  )
}

export default Nav