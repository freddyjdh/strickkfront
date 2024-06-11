import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type PlanProps = {
  logo: string | StaticImport;
  name: string;
  percentage: string;
  duration: string;

    
}

const Oneplan = (props: PlanProps) => {
  return (
    <div>
       <div className='flex justify-center'>
          <Image className='text-center h-32 w-32 z-30 relative top-16' src={props.logo} alt={props.name}/>
          </div>
    <div className='flex justify-center -z-50'>
      <div className={ `h-[47vh] w-[80vw] lg:w-[25vw] border border-primary border-solid rounded-xl boxshadow`}>
        <div>
         
          <div className='pt-20'>
            <h3 className='py-5 text-center text-xl font-semibold'>
              {props.name}
            </h3>
          </div>
          <div>
            <h1 className='text-center pb-4 font-bold text-[2.6rem]'>
              {props.percentage}
            </h1>
          </div>
          <div className='flex justify-center '>
            <p className='px-20 py-2  border border-solid border-primary rounded-xl'>{props.duration}</p>
          </div>
          <div className='flex justify-center pt-2'>
            <button className='transition ease-in-out delay-150  border border-[#f4bf68] bg-[#f4bf68] rounded-lg w-[11.5rem] h-[2.2rem] hover:bg-white'>
              Learn More
            </button>
          </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Oneplan