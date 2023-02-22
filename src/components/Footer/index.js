import React from 'react';
import AngleIcon from '../../public/svgs/AngleIcon';
import CircleIcon from '../../public/svgs/CircleIcon';
import LineIcon from '../../public/svgs/LineIcon';
import Button from '../Button';
import Logo from '../Logo';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
      <div className='bg-lightblue lg:h-[537px] h-auto mt-20'>
          <div className='md:flex hidden justify-between'>
              <CircleIcon />
              <AngleIcon />
          </div>
          <div className='lg:px-44 px-0'>
               <div className='md:flex block justify-between relative'>
              <LineIcon />
                  <div className='lg:absolute mx-auto flex justify-center w-full -top-20'>
                      <div>
                          <h1 className='text-[48px] leading-tight font-bold text-coregray font-inter mb-3'><span className='text-primaryblue'>Need</span> help with <br /> Adopting a pet?</h1>
                      <Button
                              w="w-[155px]"
                              h="h-[48px]"
                          name="View a Post"
                      />
                      </div>
              </div>
              <CircleIcon />
          </div>
          </div>
          <div className='lg:px-24 px-5 mt-4 lg:flex items-center justify-between'>
              <Logo />
              <div className='flex space-x-10'>
                  <BsFacebook size={18} color="#58667E" />
                  <BsInstagram size={18} color="#58667E" />
                  <BsTwitter size={18} color="#58667E" />
                  <BsLinkedin size={18} color="#58667E" />
              </div>
              <div className='flex space-x-10 text-sm text-coregray'>
                  <p>Terms of use.</p>
                  <p>Privacy Policy</p>
              </div>
          </div>
          <div className='text-center mt-5 text-sm text-coregray'>Copyright © 2023 Petly. All rights reserved.</div>
    </div>
  )
}

export default Footer