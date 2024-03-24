import React from 'react'
import Dragonet from '@/public/Group 144.png';
import Drakon from '@/public/Group 144.png';
import Wyrm from '@/public/Group 144.png';
import Dragonlord from '@/public/Group 146.png';
import Oneplan from './oneplan';
import { planPageProps } from './oneplan';

const plans = [
    {
        icon: Dragonet,
        name: "Strickk Dragonet Plan",
        description: "Step into the world of crypto investments with the Strickk Dragonet Plan, guarded by the vigor of a young dragon.With an affordable entry point, this one-month plan provides a low to moderate-risk profile. Benefit from top-tier security, risk-free liquidity pools, and instant payouts as you lay the foundation for financial growth.",
        range: "$500- $5,000",
        duration: "1 Month",
        returns: "10%"
    },
    {
        icon: Drakon,
        name: "Strickk Drakon Plan",
        description: "Venture deeper into the crypto realm with the Strickk Drakon Plan, guarded by the watchful eyes of a mature dragon. This three-month plan balances risk and reward, providing higher potential returns and innovative features. Explore the dynamic landscape of crypto investments with this exciting and financially rewarding plan.",
        range: "$3000- $15,000",
        duration: "3 Months",
        returns: "16%"
    },
    {
        icon: Wyrm,
        name: "Strickk Wyrm Plan",
        description: "Ascend to new heights of financial security with the Strickk Wyrm Plan, guarded by the ancient wisdom of a wise dragon. This six-month plan prioritizes stability and consistent returns, combining low-risk investments with the benefits of risk-free liquidity pools. Enjoy a reliable income stream as you navigate the expansive crypto landscape.",
        range: "$5,000 -$20,000",
        duration: "6 Months",
        returns: "20%"
    },
    {
        icon: Dragonlord,
        name: "Strickk Dragonlord Package",
        description: "Unleash the full potential of the crypto market with the Strickk Dragonlord Package, guarded by the majestic presence of a dragon lord. This twelve-month plan, designed to be accessible and versatile, allows you to explore various investment opportunities. With top-tier security and instant payouts, the Strickk Dragonlord Package provides a formidable entry point to the vast and prosperous realm of crypto investments.",
        range: "$10,000 -$30,000",
        duration: " 12 Months",
        returns: "30%"
    },

]


type Props = {}

const page = () => {
  return (
    <div className='h-100vh py-20'>
        <div  className='pt-12 lg:pt-[15vh]'>
            <h1 className='hidden lg:block text-3xl lg:text-4xl text-center lg:px-20 font-extrabold lg:font-bold  leading-[3.4rem]' >
            Welcome to Strickk: Unveiling Your <br></br>Path to Crypto Prosperity with <br></br> Dragons 
            </h1>
            <h1 className='text-3xl text-center font-extrabold pt-16 '>Our Plans</h1>
        </div>
        <div className='flex justify-center pt-9 gap-14 flex-col'>
            {
                plans && plans.map((plan:planPageProps) => {  return <Oneplan key={plan.name} icon={plan.icon} name={plan.name} description={plan.description} range={plan.range} duration={plan.duration} returns={plan.returns}/>})
                }

        </div>

        <div className='px-[30vw] pt-[10vh]'>
            <p className='text-xs'>
            Unleash the full potential of the crypto market with the Strickk Dragonlord Package, 
guarded by the majestic presence of a dragon lord. This twelve-month plan, designed 
to be accessible and versatile, allows you to explore various investment opportunities. 
With top-tier security and instant payouts, the Strickk Dragonlord Package provides 
a formidable entry point to the vast and prosperous realm of crypto investments.
            </p>
        </div>
    </div>
  )
}

export default page