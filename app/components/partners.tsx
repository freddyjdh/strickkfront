import React from 'react';
import Image from 'next/image';
import Delph from '@/public/logos/image 10.png'
import GSR from '@/public/logos/image 11.png'
import HRT from '@/public/logos/image 12.png'
import Flow from '@/public/logos/image 13.png'
import DG from '@/public/logos/image 14.png'
import LayerZ from '@/public/logos/image 16.png'
import Frax from '@/public/logos/image 17.png'
import Coinbase from '@/public/logos/image 18.png'
import Binance from '@/public/logos/image 19.png'
import Huobi from '@/public/logos/image 20.png'
import Onepartner, { PartnerProps } from './onepartner';

type Props = {}

const partners = [
    {
        logo: Binance,
    animationClass: 'on',
    width: "w-[15vw] h-[5vh]"
    },
    {
        logo: Delph,
    animationClass: 'off',
    width: "w-[15vw] h-[5vh]"
    },
    {
        logo: HRT,
    animationClass: 'on',
    width: "w-[10vw] h-[5vh]"
    },
    {
        logo: GSR,
    animationClass: 'on',
    width: "w-[10vw] h-[5vh]"
    },
    {
        logo: DG,
    animationClass: 'off',
    width: "w-[15vw] h-[5vh]"
    },
    {
        logo: LayerZ,
    animationClass: 'on',
    width: "w-[15vw] h-[5vh]"
    },
    {
        logo: Huobi,
    animationClass: 'on',
    width: "w-[10vw] h-[5vh]"
    },
    {
        logo: Frax,
    animationClass: 'off',
    width: "w-[15vw] h-[5vh]"
    },
    {
        logo: Coinbase,
    animationClass: 'on',
    width: "w-[28vw] h-[5vh]"
    },
    {
        logo: Flow,
    animationClass: 'off',
    width: "w-[38vw] h-[5vh]"
    },
]

const Partners = (props: Props) => {
  return (
    <div>
        <div className='pt-20'>
        <h1 className=' pb-20 text-3xl lg:text-4xl text-center lg:text-left lg:px-20 font-extrabold lg:font-bold  leading-[3.4rem]'>
            Our Partners
        </h1>
        </div>

        <div>
            <div className='flex justify-evenly'>
            {partners && partners.slice(0,4).map((partner: PartnerProps) => { return <Onepartner key={partner.animationClass} logo={partner.logo} animationClass={partner.animationClass} width={partner.width}/>})}
            </div>
            <div className='flex justify-evenly py-20'>
            {partners && partners.slice(4,8).map((partner: PartnerProps) => { return <Onepartner key={partner.animationClass} logo={partner.logo} animationClass={partner.animationClass} width={partner.width}/>})}
            </div>
            <div className='flex justify-evenly'>
            {partners && partners.slice(8,10).map((partner: PartnerProps) => { return <Onepartner key={partner.animationClass} logo={partner.logo} animationClass={partner.animationClass} width={partner.width}/>})}
            </div>
        </div>
    </div>
  )
}

export default Partners