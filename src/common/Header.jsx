
import React, { useEffect, useState } from 'react';
import navLogo from '../assets/images/webp/nav-logo.webp';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };
    useEffect(() => {

        const toggleMenu = () => {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = !isMenuOpen ? "" : "hidden";
            }
            else {
                document.body.style.overflow = "";
            }
        }


        toggleMenu();
        window.removeEventListener("resize", toggleMenu);
        return () => {
            window.removeEventListener("resize", toggleMenu);
            document.body.style.overflow = "";
        }
    }, [isMenuOpen])


    return (
        <div className="md:h-20 sm:h-16 h-14 flex w-full mx-auto items-center bg-transparent mt-4 py-3 relative z-20">
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <a href=""><img src={navLogo} alt="nav-logo" className='md:max-w-[68px] md:h-[75px] max-w-[50px] h-12' /></a>
                    <div
                        onClick={toggleMenu}
                        className='menuIcon relative max-sm:w-[30px] max-sm:h-[24px] max-lg:w-[38px] max-lg:h-[28px] z-[15] max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'
                    >
                        {isMenuOpen ? (
                            <>
                                <span className="h-[4px] absolute top-3 w-full bg-white transform rotate-45 transition duration-300"></span>
                                <span className="h-[4px] absolute top-3 w-full bg-white transform -rotate-45 transition duration-300"></span>
                            </>
                        ) : (
                            <>
                                <span className="h-[4px] w-full bg-white"></span>
                                <span className="h-[4px] w-full bg-white"></span>
                                <span className="h-[4px] w-full bg-white"></span>
                            </>
                        )}
                    </div>
                    <div className={`menuList ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'} z-10 gap-6 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-vibrantBlue max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`}>
                        <ul className='flex flex-col lg:flex-row gap-6 items-center lg:items-center z-10'>
                            <li onClick={toggleMenu}><a target='blank' className='font-raleway font-medium text-base leading-[18.78px] text-white relative after:absolute hover:after:bg-white hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#about">About</a></li>
                            <li onClick={toggleMenu}><a target='blank' className='font-raleway font-medium text-base leading-[18.78px] text-white relative after:absolute hover:after:bg-white hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="/hlo">IBO Event</a></li>
                            <li onClick={toggleMenu}><a target='blank' className='font-raleway font-medium text-base leading-[18.78px] text-white relative after:absolute hover:after:bg-white hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#tokenomics">EEFI Tokenomics</a></li>
                            <li onClick={toggleMenu}><a target='blank' className='font-raleway font-medium text-base leading-[18.78px] text-white relative after:absolute hover:after:bg-white hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#team">Team</a></li>
                            <li onClick={toggleMenu}><a target='blank' className='font-raleway font-medium text-base leading-[18.78px] text-white relative after:absolute hover:after:bg-white hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="/hlo">Partners</a></li>
                            <li onClick={toggleMenu}><a target='blank' className='font-raleway font-medium text-base leading-[18.78px] text-white relative after:absolute hover:after:bg-white hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#roadmap">Roadmap</a></li>
                            <li className="relative">
                                <a
                                    onClick={toggleDropdown}
                                    className='font-normal relative lg:text-base text-lg leading-5 2xl:text-vibrantBlue text-white flex items-center space-x-1 cursor-pointer after:absolute hover:after:bg-white hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300'
                                    href="#"
                                >
                                    More
                                    <span>
                                        <svg
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        >
                                            <path
                                                d="M11.8027 6.20992C11.6712 6.06997 11.5037 6 11.3004 6C11.0972 6 10.9297 6.06997 10.7982 6.20992L8 9.18702L5.20179 6.20992C5.07025 6.06997 4.90284 6 4.69955 6C4.49626 6 4.32885 6.06997 4.19731 6.20992C4.06577 6.34987 4 6.52799 4 6.74427C4 6.96056 4.06577 7.13867 4.19731 7.27862L7.49776 10.7901C7.56951 10.8664 7.64723 10.9206 7.73094 10.9527C7.81465 10.9847 7.90433 11.0005 8 11C8.09566 11 8.18535 10.984 8.26906 10.9519C8.35277 10.9198 8.43049 10.8659 8.50224 10.7901L11.8027 7.27862C11.9342 7.13867 12 6.96056 12 6.74427C12 6.52799 11.9342 6.34987 11.8027 6.20992Z"
                                                fill="white" className='2xl:fill-vibrantBlue'
                                            />
                                        </svg>
                                    </span>
                                    {isDropdownOpen && (
                                        <span className="absolute left-0 top-3 mt-2 w-32 bg-white rounded-lg shadow-lg z-30">
                                            <span className="block px-2 py-1 text-sm 2xl:text-blue text-gray-700 hover:bg-mediumBlue hover:text-vibrantBlue rounded-lg">
                                                Service 1
                                            </span>
                                            <span className="block px-2 py-1 text-sm 2xl:text-blue text-gray-700 hover:bg-mediumBlue hover:text-vibrantBlue rounded-lg">
                                                Service 2
                                            </span>
                                        </span>
                                    )}
                                </a>
                            </li>
                                <a href="#" className='lg:hidden block relative rounded-lg border border-vibrantBlue font-raleway transition duration-300 text-base leading-[18.78px] bg-white py-3 px-8 font-medium text-vibrantBlue z-10 hover:bg-vibrantBlue hover:text-white hover:border hover:border-white'>Enter App</a>
                        </ul>
                       
                    </div>
                    <a href="#_" className="rounded-lg border border-vibrantBlue py-3 bg-white px-8 lg:block hidden overflow-hidden relative group cursor-pointer font-medium text-vibrantBlue z-10">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-vibrantBlue top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative font-raleway text-vibrantBlue transition duration-300 group-hover:text-white ease text-base leading-[18.78px]">Enter App</span>
                    </a>
                </div>
            </div>
        </div>

    );
};
export default Header;





