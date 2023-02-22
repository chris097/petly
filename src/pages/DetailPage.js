import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DogIcon from '../public/svgs/DogIcon';
import Button from '../components/Button';
import useQueryApi from '../hooks/useQueryApi';
import { useParams } from 'react-router-dom';
import { GrLocation } from "react-icons/gr";
import GotoTopPage from '../components/GotoTopPage';
import DetailSkeleton from '../components/Skeleton/DetailSkeleton';

const DetailPage = () => {
  //states
  const [currentIndex, setCurrentIndex] = useState(0);
  //routes
  const { petId } = useParams();
  //query
  const { data, isLoading } = useQueryApi('pets', `pets?id=${petId}`)
 
  return (
    <>
      <div>
        <Header />
        {isLoading ? <DetailSkeleton /> : <div className='md:w-1/2 w-[90%] flex justify-center font-inter mx-auto mt-16 flex-col'>
          <div className='flex justify-between items-center'>
            <div className='flex space-x-4 items-center'>
              <div className='w-[80px] h-[80px] rounded-full bg-nextgray flex justify-center items-center text-[36px] font-inter font-medium'>{data?.pets[0]?.name.charAt(0)}</div>
              <div>
                <h1 className='md:text-4xl text-xl font-medium text-darkpurple'>{data?.pets[0]?.name}</h1>
                <p className='text-corepurple capitalize'>{data?.pets[0]?.breed} {data?.pets[0]?.animal}</p>
              </div>
            </div>
            <div>
              <div><DogIcon /></div>
            </div>
          </div>
          <div className='bg-lightblue w-full mt-7 p-5'>
            <h2 className='text-xl text-coregray'>{data?.pets[0]?.name} Pictures</h2>
            <div className='h-[277px] bg-white mt-6 p-3 rounded-md shadow-coreshadow'>
              <img src={data?.pets[0]?.images[currentIndex]} alt={`${data?.pets[0]?.name} images`} className="h-full w-full bg-cover bg-no-repeat object-fill" />
            </div>
            <div className='flex justify-between mt-1 flex-wrap cursor-pointer'>
              {data?.pets[0]?.images?.map((image, index) => (
                <img onClick={() => setCurrentIndex(index)} src={image} alt={`${data?.pets[0]?.name} images`} className="w-[158px] h-[97px] mt-4 rounded-md" />
              ))}
            </div>
            <div className='bg-white w-full h-auto py-6 rounded mt-5 p-8'>
              <h1 className='text-coregray text-xl'>Description</h1>
              <p className='mt-3 text-coregray text-[13px] font-light'>{data?.pets[0]?.description}</p>
              <div className='w-[147px] bg-nextgray mt-4 h-[41px] space-x-2 flex justify-center items-center text-sm text-primaryblue'>
                <div className='text-primaryblue'>
                  <GrLocation color='blue' opacity={0.9} />
                </div>
                <p>{data?.pets[0]?.city}, {data?.pets[0]?.state}</p>
              </div>
            </div>
            <div className='my-7'>
              <Button w="w-full" h="h-[48px]" name={`Adopt ${data?.pets[0]?.name}`} />
            </div>
          </div>
        </div> }
        <Footer />
      </div>
      <GotoTopPage />
    </>
  )
};


export default DetailPage