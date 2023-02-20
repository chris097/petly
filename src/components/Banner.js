import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { GrLocation } from "react-icons/gr";
import dog1 from '../public/images/dog1.png';
import dog2 from '../public/images/dog2.png';
import dog3 from '../public/images/dog3.png';
import dog4 from '../public/images/dog4.png';

const Banner = () => {
  return (
    <div className='bg-coreblue h-[770px] flex space-x-5 px-5 lg:px-20 relative'>
      <div className='absolute bottom-0 right-0'>
        <div className='flex'>
          <div className='bg-[#245997] w-[60px] h-[49px]' />
          <div className='bg-[#E1AB21] w-[60px] h-[49px]' />
        </div>
        <div className='flex'>
          <div className='bg-[#D21A30] w-[60px] h-[49px]' />
          <div className='bg-coreblue w-[60px] h-[49px]' />
        </div>
        <div className='flex'>
          <div className='bg-coreblue w-[60px] h-[49px]' />
          <div className='bg-[#7C97B6] w-[60px] h-[49px]' />
        </div>
      </div>
      <div className='flex-1 font-inter mt-28'>
        <p className='text-primaryblue'>FIND SPECIAL PETS</p>
        <h1 className='text-darkpurple text-5xl font-medium mt-3'>Think you Love Pets? <br /> <span className='text-corered leading-snug'>Adopt One.</span></h1>
        <p className='text-darkpurple text-base mt-3'>Pet Adoption is quickly becomingthe preferred way to find a new dog, puppy, cat or kitten</p>
        <div className='h-[250px] bg-white absolute w-3/5 mt-24 p-6 rounded'>
          <div className='bg-lighterblue h-[64px] w-full rounded-full flex items-center'>
            <div className='w-full pl-6 flex space-x-2 items-center'>
              <GrLocation color='#8588A3' />
              <select className='bg-transparent text-corepurple w-3/5 outline-none'>
                <option value="">Location</option>
              </select>
            </div>
            <div className='w-full pl-6 flex space-x-2 items-center'>
              <GrLocation color='#8588A3' />
              <select className='bg-transparent text-corepurple w-3/5 outline-none'>
                <option value="">Location</option>
              </select>
            </div>
            <div className='w-full pl-6 flex space-x-2 items-center'>
              <GrLocation color='#8588A3' />
              <select className='bg-transparent text-corepurple w-3/5 outline-none'>
                <option value="">Location</option>
              </select>
            </div>
            <div className='flex justify-end w-full h-full'>
              <button className='bg-primaryblue w-[80px] flex justify-center items-center rounded-tr-full rounded-br-full'>
                <IoSearchOutline color='white' size={24} />
              </button>
            </div>
          </div>
          <p className='text-coregray text-lg font-light mt-5'>You may be looking for</p>
          <div className='w-[79px] h-[45px] bg-coreblue flex space-x-2 items-center justify-center rounded-lg mt-5'>
            <p className='text-primaryblue font-roboto'>Dog</p>
            <AiOutlineCloseCircle color='#0D75FF' size={18} />
          </div>
        </div>
      </div>
      <div className='flex-1 mt-20'>
        <div className='flex justify-center'>
          <div>
            <div className='w-[227px] h-[215px]'>
              <img src={dog1} className="w-full h-full bg-cover bg-no-repeat object-fill" alt='dog 1' />
            </div>
            <div className='w-[227px] h-[215px]'>
              <img src={dog3} className="w-full h-full bg-cover bg-no-repeat object-fill" alt='dog 2' />
            </div>
          </div>
          <div>
            <div className='w-[227px] h-[215px]'>
              <img src={dog2} className="w-full bg-cover bg-no-repeat object-fill h-full" alt='dog 3' />
            </div>
            <div className='w-[227px] h-[215px]'>
              <img src={dog4} className="w-full h-full bg-cover bg-no-repeat object-fill" alt='dog 4' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


export default Banner