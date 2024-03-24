import React from 'react'
import first from '@/public/Group 114.png';
import second from '@/public/Group 115.png';
import third from '@/public/Frame 117.png';
import { whyProps } from './onewhystrickk';
import Onewhystrickk from './onewhystrickk';


type Props = {}

const whystrickk = [
    {
        logo: first,  
        background: "white",
        heading: "Top-Tier Security",
        text: "Strickk prioritizes security in the dynamic cryptocurrency landscape, employing top-tier measures to shield investments from threats. Trust Strickk for a secure and reliable environment, ensuring peace of mind for your assets."
    },
    {
        logo: second,
        background: "primary",
        heading: "Risk-Free Liquidity Pools",
        text: "Dive into crypto investments confidently with Strickk's risk-free liquidity pools, minimizing investment risks and providing a secure avenue for asset growth. Our commitment to a risk-free environment makes us the preferred choice for savvy investors."
    },
    {
        logo: third,
        background: "white",
        heading: "Instant Payout",
        text: "Experience Strickk's efficiency with instant payouts, prioritizing your time and financial goals. Choose Strickk for investments that grow and deliver results promptly."
    }
]



const WhyStrickk = (props: Props) => {
  return (
    <div>
        <div className='py-40'>
            <h1 className='text-3xl lg:text-4xl text-center lg:text-left lg:px-20 font-extrabold lg:font-bold  leading-[3.4rem]'>
                Why Strickk
            </h1>
        </div>
        <div className='flex flex-col  lg:flex-row gap-8 lg:justify-center'>
            {
                whystrickk && whystrickk.map((strick: whyProps) =>{
                    return <Onewhystrickk key={strick.heading} logo={strick.logo} background={strick.background} heading={strick.heading} text={strick.text}/>
                }) 
            }

        </div>
    </div>
  )
}

export default WhyStrickk 