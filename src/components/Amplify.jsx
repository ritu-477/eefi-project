import React from 'react'
import bullImg from '../assets/images/webp/bull-image.webp'
import bearImg from '../assets/images/webp/bear-image.webp'
import menImg from '../assets/images/webp/men-image.webp'
import bottomLayer from '../assets/images/webp/layer-amplify.webp'

const Amplify = () => {
  return (
    <div className='bg-amplify-bg bg-cover bg-no-repeat bg-center lg:mt-[90px]  relative lg:pt-5 xl:h-[850px] lg:h-[800px] md:h-[710px] sm:h-[540px] h-[435px] xl:mt-[-50px]' id='tokenomics'>
      <div className='bg-black py-12 2xl:flex hidden w-full absolute top-0 left-0'></div>
      <div className='container relative'>
      <div className='flex justify-center lg:pt-0 md:pt-5 sm:pt-3 pt-2 2xl:relative 2xl:z-10'>
        <h2 className='font-plusJakarta font-extrabold text-white xl:text-custom-xxl xl:leading-custom-xxl text-center lg:text-5xl md:text-4xl sm:text-[26px] sm:leading-8 text-xl leading-7'>Amplify and STRETCH GAINS</h2>
        </div>
        <div className='flex justify-center lg:hidden mt-12 mb-2'>
          <p className='text-center font-normal text-xs font-raleway text-white max-w-[554px] drop-shadow-[2px_2px_2px_black]'>We take a different balanced approach to finding and creating yield opportunities in the everchanging crypto market. Our yield strategies help users stay protected and hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous techniques.</p>
        </div>
        <div className='absolute top-[54%] z-10 left-[24%] lg:flex hidden'>
          <p className='text-center font-normal leading-[22px] text-sm font-raleway text-white max-w-[554px] drop-shadow-[2px_2px_2px_black]'>We take a different balanced approach to finding and creating yield opportunities in the everchanging crypto market. Our yield strategies help users stay protected and hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous techniques.</p>
        </div>
        <div className='flex justify-center relative items-center z-[1] max-sm:pt-8 mt-[-10px]'>
          <img src={bullImg} className='xl:max-w-[649px] lg:max-w-[600px] md:max-w-[380px] sm:max-w-[300px] max-w-[200px] xl:h-[676px] lg:h-[610px] md:h-[440px] sm:h-[320px] h-[180px] pointer-events-none' alt="bull-image" />
          <img src={bearImg} alt="bear-image" className='xl:max-w-[549px] lg:max-w-[480px] md:max-w-[364px] sm:max-w-[200px] max-w-[160px] xl:h-[656px] lg:h-[630px] md:h-[452px] sm:h-[300px] h-[165px] md:mt-12 sm:mt-8 mt-4 lg:mt-16 xl:-ms-28 w-full pointer-events-none' />
          <img src={menImg} className='absolute bottom-[-20px] sm:[-40px] md:bottom-[10px] lg:bottom-[15px] xl:bottom-[30px] right-[42%] sm:right-[40%] md:right-[46%] lg:max-w-[100px] sm:max-w-[80px] max-w-[60px] w-full' alt="men" />
        </div>
      </div>
      <div>
      </div>
        <img src={bottomLayer} alt="bottom-layer" className='2xl:h-[280px] xl:h-[233px] md:h-[190px] w-full max-w-[1920px] right-0 absolute 2xl:bottom-[-135px] xl:bottom-[-95px] lg:bottom-[-80px] md:bottom-[-88px] sm:bottom-[-45px] bottom-[-24px] left-0 bottom_45' />
    </div>
  )
}

export default Amplify