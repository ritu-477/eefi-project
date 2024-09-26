import React from 'react'
import blueVector from '../assets/images/webp/blue-vector.webp'
import heroImg from '../assets/images/webp/hero-main-image.webp'
import dotsImg from '../assets/images/svg/dots-svg.svg'

const Hero = () => {
  return (
    <div className='bg-hero-layer relative bg-cover bg-center bg-no-repeat' id='about'>
      <img src={blueVector} alt="blue-vector" className='xl:max-w-[1170px] 2xl:max-w-[1164px] lg:max-w-[975px] sm:h-[700px] lg:h-[900px] lg:mb-[100px] xl:mb-0 h-[600px] absolute top-[-80px] left-0 xl:h-[836px] max-lg:object-cover 2xl:hidden block' />
      <div className='absolute right-[36px] top-0 lg:flex hidden'>
        <img src={dotsImg} alt="dots-image" className='pointer-events-none' />
      </div>
      <div className='relative z-10 container'>
        <img src={blueVector} alt="blue-layer" className='absolute top-[-80px] 2xl:w-full 2xl:h-[900px] left-[-370px] 2xl:block hidden -z-10' />
        <div className='lg:flex lg:flex-row flex-col -mt-10'>
          <div className='lg:pt-40 sm:pt-28 pt-20'>
            <h1 className='font-medium sm:text-6xl sm:leading-[75px] text-4xl leading-[46px] max-sm:max-w-[330px] lg:text-custom-2xl lg:leading-[95.74px] text-white lg:max-w-[463px] neue_font'>BUILDING
              ELASTIC
              PROTOCOL</h1>
            <p className='text-base font-normal font-raleway leading-6 text-white max-w-[542px] py-3'>An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditions</p>
            <a href="" className='text-[18px] leading-[21px] border-b border-b-white text-white font-bold'>Audited by Omniscia</a>
          </div>
          <div className='flex justify-center relative pt-6 xl:translate-x-[25px] xl:translate-y-[-30px]'>
            <img src={heroImg} alt="hero-image" className='xl:max-w-[668px] sm:max-w-[536px] max-w-[335px] relative -z-10 pointer-events-none' />
          </div>
       </div>
        </div>
      </div>
  )
}

export default Hero