import React from 'react';
import dog5 from "../public/images/dog5.png";
import Button from './Button';
import { GrLocation } from "react-icons/gr";
import DogIcon from '../public/svgs/DogIcon';
import { Link } from 'react-router-dom';
import { urls } from '../utils/url';

const Card = ({name, breed, state, city, image, id}) => {
  return (
      <div className='mt-8 mr-8'>
          <div className='w-[327px] h-[323px] bg-white border border-nextgray p-5'>
              <img src={image} className="bg-cover rounded-xl h-[165px] w-full bg-no-repeat bg-center" alt="dog 5" />
              <div className='flex justify-between items-center mt-3'>
                  <div className='font-inter'>
                      <h2 className='text-coregray text-xl'>{name}</h2>
                      <p className='text-primarygray text-sm'>{breed}</p>
                  </div>
                  <div>
                      <DogIcon />
                  </div>
              </div>
              <div className='text-xs mt-3 flex justify-between items-center'>
                  <Link to={urls.PET_DETAILS(id)}>
                    <Button w="w-[121px]" h="h-[39px]" name="View Details" />
                  </Link>
                  <div className='flex space-x-3 items-center'>
                      <GrLocation color='gray' opacity={0.6} size={22} />
                      <p className='text-[#AFB6C1]'>{city}, {state}</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Card