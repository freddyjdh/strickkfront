import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import React from 'react';
import Image from 'next/image';

 export type whyProps = {
    logo: string | StaticImport;
    background: string;
    heading: string;
    text: string;
}

const Onewhystrickk = (props: whyProps) => {
  return (
    <div className='flex justify-center'>
        <div className={ `h-[45vh] bg-${props.background} w-[80vw] lg:w-[25vw] border border-primary border-solid rounded-xl boxshadow`}>
            <div className='flex justify-center' >
                <div className='px-7 py-4'>
                <div className='flex justify-center'>
                    <Image className='h-20 w-20' src={props.logo} alt="about"/>
                </div>
                <div className='py-9'>
                    <h2 className='text-center font-bold text-xl'>
                        {props.heading}
                    </h2>
                </div>
                <div>
                    <p className='text-center leading-none text-[0.8rem]'>
                        {props.text}
                    </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Onewhystrickk