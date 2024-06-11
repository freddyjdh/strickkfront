'use client'
import {ReactNode, useEffect, useState} from 'react';
import { Inter, Poppins, Libre_Franklin } from 'next/font/google'
import Lottie from 'lottie-react';
import Loader from '@/public/loader.json'
import ff from "@/public/ff5559257aff672e62f946d1f9f26267.gif"
import Image from 'next/image';





const poppins  = Libre_Franklin({weight: ['400', '500', '700'], subsets:['latin']})




export default function Hydrate({children}: {children: ReactNode}){

    const [isHydrated, setisHydrated] = useState(false)

    useEffect(() => {
      setisHydrated(true)

    }, [])
    
    return(
    <>
      {
      isHydrated ? 
      <div>
             
          
            {children} 
          </div> 
          : 
          <div className={`${poppins.className} `}>
            <div className='text-5xl font-black text-center py-[40vh] px-[40vw]'>
             <Image src={ff} alt={'ff'} height={400} width={400} unoptimized/>
            </div>
           </div>
      }
    </>
    )
}