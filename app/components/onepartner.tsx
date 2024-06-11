import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import React from 'react'
import Image from 'next/image';

export type PartnerProps = {
    logo: string | StaticImport;
    animationClass: string;
    width: string;
}

const Onepartner = (props: PartnerProps) => {
  return (
    <div className='mx-16'>
        <Image className={`${props.width} ${props.animationClass}`} src={props.logo} alt={props.animationClass}/>
    </div>
  )
}

export default Onepartner