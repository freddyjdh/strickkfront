import React from 'react';
import Dragonet from '@/public/Group 144.png';
import Drakon from '@/public/Group 144.png';
import Wyrm from '@/public/Group 144.png';
import Dragonlord from '@/public/Group 146.png';
import { PlanProps } from './oneplan';
import Oneplan from './oneplan';

type Props = {}

const availablePlans = [
    {
        logo: Dragonet,
        name: "Strickk Dragonet Plan",
        percentage: "10%",
        duration: "1 Month"
    },
    {
        logo: Drakon,
        name: "Strickk Drakon Plan",
        percentage: "16%",
        duration: "3 Months"
    },
    {
        logo: Wyrm,
        name: "Strickk Wyrm Plan",
        percentage: "20%",
        duration: "6 Months"
    },
    {
        logo: Dragonlord,
        name: "Strickk Dragonlord Package",
        percentage: "30%",
        duration: "12 Months "
    },

]

const Plans = (props: Props) => {
  return (
    <div>
    <div className='py-40'>
        <h1 className='text-3xl lg:text-4xl text-center lg:text-left lg:px-20 font-extrabold lg:font-bold  leading-[3.4rem]'>
            AVAILABLE PLANS
        </h1>
        </div>

        <div className='flex flex-col gap-4  lg:flex-row lg:justify-center lg:overflow-x-scroll lg:pl-[27vw] lg:pr-[5vw] pb-16'>
        {
                availablePlans && availablePlans.map((plan: PlanProps ) =>{
                    return <Oneplan key={plan.name} logo={plan.logo} name={plan.name} percentage={plan.percentage} duration={plan.duration}/>
                }) 
            }


        </div>
    </div>
  )
}

export default Plans