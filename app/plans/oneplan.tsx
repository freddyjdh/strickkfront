import React from 'react';
import Image from 'next/image';
import { StaticImageData, StaticImport } from 'next/dist/shared/lib/get-img-props';


export type planPageProps = {
    icon: string | StaticImageData;
    name: string;
    description: string;
    range: string;
    duration: string;
    returns: string;
    

}

const Oneplan = (props: planPageProps) => {
  return (
    <div className='flex justify-center'>
        <div className='w-[80vw] boxshadow rounded-lg lg:px-16 '>
            <div className='lg:flex lg:justify-between lg:pt-9'>
            <div className='flex justify-center px-5 gap-5'>
                <span><Image className='h-14 w-14' src={props.icon} alt={props.name}/></span>
                <span className='flex align-middle py-4'><h3 className='text-xl font-bold'>{props.name}</h3></span>
            </div>
            <div className='lg:hidden'>
                <p className='text-justify text-sm  px-3 py-5'>
                {props.description}
                </p>
            </div>
            <div className='bg-primary text-black rounded-xl'>
                <span className='flex px-3 py-3 gap-11'>
                    <p className='font-bold'>Investment Range:</p>
                    <p>{props.range}</p>
                </span>
                <span className='flex pb-3 px-3 gap-8'>
                    <p className='font-bold'>Investment Duration:</p>
                    <p>{props.duration}</p>
                </span>
                <span className='flex pb-3 px-3 gap-11'>
                    <p className='font-bold'>Investment Returns:</p>
                    <p>{props.returns}</p>
                </span>
            </div>
     </div>

            
            <div className='hidden lg:block'>
                <p className='text-justify text-sm  px-3 py-5'>
                {props.description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Oneplan