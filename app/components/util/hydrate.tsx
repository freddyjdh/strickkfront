'use client'
import {ReactNode, useEffect, useState} from 'react';
import { Inter, Poppins, Libre_Franklin } from 'next/font/google'




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
          </div> : 
          <div className={`${poppins.className} h-screen w-screen justify-center align-middle bg-black`}> </div>
      }
    </>
    )
}