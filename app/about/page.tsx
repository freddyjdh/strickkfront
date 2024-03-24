import React from 'react'
import Partners from '../components/partners';

type Props = {}

const page = (props: Props) => {
  return (
    <div className={"h-100vh py-20"}>
     <div  className={'pt-12 lg:pt-[15vh]'}>
            <h1 className={' text-3xl lg:text-4xl text-center lg:px-20 font-extrabold lg:font-bold  leading-[3.4rem]' }>
           About Us
            </h1>
        </div>
      <div className={'px-[20vw] lg:px-[33vw] py-5'}>
        <p className={'text-center'}>
        Benefit from top-tier security, risk-free liquidity pools, and instant payouts,
ensuring a seamless journey to financial growth in the crypto space.
        </p>
      </div>
      <Partners/>

    <div className="px-[5vw] lg:px-[13vw] py-[8vh]">
      <p className='text-center'>
      Our transition is more than a change in name; it represents a strategic move towards enhancing your investment experience. Strickk is driven by a dedicated team of experts who understand the nuances of the crypto market. With a wealth of knowledge, we navigate the complexities, ensuring your financial success remains at the forefront of our mission.
At Strickk, security is not just a feature; it's a foundation. Our top-tier security measures guarantee a safe environment for your investments. We introduce risk-free liquidity pools and promise instant payouts, offering you a seamless and rewarding investment journey.
As we embark on this exciting chapter, we invite you to be part of the Strickk community, where precision meets prosperity. Trust us to be your steadfast partner in navigating the dynamic world of crypto investments, providing you with a platform built on trust, innovation, and unwavering dedication.
      </p>
    </div>


    </div>
  )
}

export default page;