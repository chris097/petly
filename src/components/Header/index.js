import React from 'react';
import Logo from '../Logo';
import { FaSun } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";

const Header = () => {
  return (
      <div className='h-20 bg-white shadow flex justify-between items-center px-5 lg:px-20'>
          <div className='flex flex-1'>
              <Logo />
                  <ul className='lg:flex w-full hidden items-center space-x-14 font-roboto text-coregray text-sm justify-end'>
                    <li className='cursor-pointer whitespace-nowrap'>Find a pet to Adopt</li>
                    <li className='cursor-pointer whitespace-nowrap'>Report a missing pet</li>
                  </ul>
          </div>
          <div className='flex-1 w-full flex justify-end'>
              <div className='flex p-1.5 border border-lightblue w-[109px] h-[46px] rounded-[10px]'>
                  <div className='bg-lighterblue cursor-pointer flex-1 w-full h-full flex rounded-sm justify-center items-center'>
                      <FaSun color='#0D75FF' size={22} />
                  </div>
                  <div className='flex-1 flex ml-5 w-full h-full items-center'>
                      <BsMoonStars color='#AEB2C5' size={20} />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Header