import React from 'react'
import Icon from '../common/Icon'
import tableImg from '../assets/images/webp/table-image.webp'
import smallImg from '../assets/images/webp/small-iamge.webp' 


const GameTheory = () => {
  return (
    <div className='bg-game-bg lg:pt-16 lg:pb-[83px] sm:py-14 pt-10 pb-[200px]'>  
      <div className='container'>
        <div className='flex items-center gap-10 lg:flex-row flex-col justify-between'>
          <div className='lg:max-w-[572px] w-full flex flex-col items-start'>
            <h2 className='neue_ultra font-extrabold xl:text-custom-xl xl:leading-custom-xl text-4xl sm:text-3xl text-[28px] leading-[33px] md:text-4xl text-white pb-1'>(E,E) Game Theory: An UPGRADE from (3,3)</h2>
            <p className='font-raleway text-white italic_style sm:pt-8 pt-4 xl:pt-10 font-normal text text-sm sm:text-base sm:leading-[25px] lg:max-w-[515px]'>Remember (3,3) At Its Core Was About Social Coordination. Or, People Working Together To Achieve A Common Outcome Or Goal. (E,E) Is The Same. But With (E,E) People Are Working Together Not To Grow A Robust Treasury That Would Back A Decentralized Stablecoin But Instead To Establish The First Ever decentralized amplified yield token… $EEFI. A Token that can produce yield in any market condition.</p>
            <p className='font-raleway text-white italic_style pt-2 font-normal text text-sm sm:text-base sm:leading-[25px] lg:max-w-[476px]'>To achieve this (E,E) has everyone work together by interacting with and supporting its ecosystem flywheel: Vaults, Bonds, Markets and other components. Interaction with the (E,E) Flywheel will help build a treasury of what we term high quality “growth assets”. Assets that are revenue bearing, interest bearing, Real Yield bearing or Rebase bearing. Where the ‘growth’ aka the yields of these assets are used to act as long term decentralized leverage on EEFI’s value. This is (E,E). This is sustainable. This is the UPGRADE.</p>
          </div>
          <div className='max-w-[530px] w-full mt-2 lg:mt-0 relative'>
            <div className='relative z-10'>
              <div className='mx-auto sm:max-w-[129.33px] max-w-[114px] p-[6px] sm:p-[7px] sm:h-[93px] bg-white rounded'>
                <div className='bg-vibrantBlue rounded sm:py-[15px] sm:px-[25px] p-[18px] sm:h-[80px]'>
                  <p className='font-extrabold text-xl leading-6 sm:text-2xl sm:leading-7 text-white neue_font text-center'>YOU</p>
                  <p className='font-raleway font-normal text-sm sm:leading-[22px] text-center text-white'>(Flywheel)</p>
                </div>
              </div>
              <div className='sm:mt-[76px] mt-16 flex gap-3 sm:gap-6 relative z-[2] items-start w-full justify-center'>
                <div className='sm:max-w-[160px] max-w-[103px] h-full custom-xl w-full px-2 pb-2 sm:min-h-[130px] min-h-[138px] bg-white pt-[18px] rounded-md flex flex-col items-center'>
                  <Icon iconName="bond" className='sm:w-[28px] sm:h-[27px] w-[24px] h-[23px]' />
                  <p className='neue_ultra font-extrabold sm:text-base sm:leading-[25px] text-sm leading-[22px] sm:mt-2 mt-1'>EEFI Bonds</p>
                  <p className='font-normal font-raleway text-sm leading-4 text-center max-w-[123px] mt-1'> Purchase. Lock up. Get Discount</p>
                </div>
                <div className='sm:max-w-[160px] max-w-[103px] h-full custom-xl w-full px-2 pb-2 sm:min-h-[130px] min-h-[138px] bg-white pt-[18px] rounded-md flex flex-col items-center'>
                  <Icon iconName="lock" className='sm:w-[29px] sm:h-[27px] w-[23px] h-[23px]' />
                  <p className='neue_ultra font-extrabold sm:text-base sm:leading-[25px] text-sm leading-[22px] sm:mt-2 mt-1'>Vault</p>
                  <p className='font-normal font-raleway text-sm leading-4 text-center mt-1'> Deposit + Earn</p>
                </div>
                <div className='sm:max-w-[160px] max-w-[103px] h-full custom-xl w-full px-2 pb-2 sm:min-h-[130px] min-h-[138px] bg-white pt-[18px] rounded-md flex flex-col items-center'>
                  <Icon iconName="farming" className='sm:w-[28px] sm:h-[29px] w-[24px] h-[24px]' />
                  <p className='neue_ultra font-extrabold sm:text-base sm:leading-[25px] text-sm leading-[22px] sm:mt-2 mt-1'>LP Positions</p>
                  <p className='font-normal font-raleway text-sm leading-4 text-center max-w-[123px] mt-1 '> Yield Farming</p>
                </div>
              </div>
              <div className='mt-9 flex gap-3 sm:gap-6 relative z-[2] items-start w-full justify-center'>
                <div className='sm:max-w-[160px] max-w-[103px] h-full custom-xl w-full px-2 pb-2 sm:min-h-[130px] min-h-[138px] bg-white pt-[18px] rounded-md flex flex-col items-center'>
                  <Icon iconName="funding" className='sm:w-[28px] sm:h-[28px] w-[24px] h-[23px]' />
                  <p className='neue_ultra font-extrabold sm:text-base sm:leading-[19px] text-sm sm:mt-2 mt-1 leading-4 max-w-[144px] text-center'>Funding raised acquires Growth assets</p>
                </div>
                <div className='sm:max-w-[160px] max-w-[103px] h-full custom-xl w-full px-2 pb-2 sm:min-h-[130px] min-h-[138px] bg-white pt-[18px] rounded-md flex flex-col items-center'>
                  <Icon iconName="treasury" className='sm:w-[28px] sm:h-[28px] w-[24px] h-[23px]' />
                  <p className='neue_ultra font-extrabold sm:text-base sm:leading-[19px] text-sm sm:mt-2 mt-1 leading-4 max-w-[131px] text-center'>OHM Treasury Strategy </p>
                  <p className='font-normal font-raleway text-sm leading-4 text-center mt-1'> Deposit + Earn</p>
                </div>
                <div className='sm:max-w-[160px] max-w-[103px] h-full custom-xl w-full px-2 pb-2 sm:min-h-[130px] min-h-[138px] bg-white pt-[18px] rounded-md flex flex-col items-center'>
                  <Icon iconName="market" className='sm:w-[28px] sm:h-[28px] w-[24px] h-[23px]' />
                  <p className='neue_ultra font-extrabold sm:text-base sm:leading-[25px] text-sm sm:mt-2 mt-1 leading-[22px]'>Markets</p>
                  <p className='font-normal font-raleway text-sm leading-4 text-center max-w-[123px] mt-1'> Trade + Arb (Fees)</p>
                </div>
              </div>
              <div className='mt-9 flex gap-3 sm:gap-6 relative z-[2] items-start w-full justify-center'>
                <div className='sm:max-w-[160px] max-w-[103px] h-full custom-xl w-full px-2 pb-2 sm:min-h-[130px] min-h-[138px] bg-white pt-[18px] rounded-md flex flex-col items-center'>
                  <Icon iconName="growth" className='sm:w-[29px] sm:h-[29px] w-[24px] h-[24px]' />
                  <p className='neue_ultra font-extrabold sm:text-base sm:leading-[19px] text-sm sm:mt-2 mt-1 leading-4 text-center max-w-[70px] sm:max-w-[106px]'>Yield From Growth Assets</p>
                </div>
                <div className='sm:max-w-[160px] max-w-[103px] h-full custom-xl w-full px-2 pb-2 sm:min-h-[130px] min-h-[138px] bg-white pt-[18px] rounded-md flex flex-col items-center'>
                  <Icon iconName="revenue" className='sm:w-[28px] sm:h-[28px] w-[24px] h-[23px]' />
                  <p className='neue_ultra font-extrabold sm:text-base sm:leading-[19px] text-sm sm:mt-2 mt-1 leading-4 text-center max-w-[82px] sm:max-w-[127px]'>Fees. Revenue. Yield to Treasury</p>
                </div>
                
              </div>
              <div className='mt-9 flex gap-3 sm:gap-6 relative z-[2] items-start w-full justify-center'>
                <div className='sm:max-w-[160px] max-w-[103px] h-full custom-xl w-full px-2 pb-2 sm:min-h-[130px] min-h-[138px] bg-white pt-[18px] rounded-md flex flex-col items-center'>
                  <Icon className='sm:w-[29px] sm:h-[28px] w-[24px] h-[23px]' iconName="furnace" />
                  <p className='neue_ultra font-extrabold sm:text-base sm:leading-[25px] text-sm sm:mt-2 mt-1 leading-[22px] text-center'>EEFI Furnace </p>
                  <p className='font-normal font-raleway text-sm leading-4 text-center max-w-[123px] mt-1'>Buy + Burn EEFI</p>
                </div>
              </div>
            </div>
            <img src={tableImg} alt="table-image" className='absolute top-0 sm:block hidden w-full h-[815px]' />
            <div className='flex justify-center sm:hidden mt-[-715px]'>
              <img src={smallImg} alt="small-image" className='max-w-[229px] h-[575px]' />
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default GameTheory


