import Image from 'next/image'
import React from 'react'

const One = (data) => {
    const Data=data.data
  return (
    <div className='feature flex justify-between gap-10 my-10 shadow-xl shadow-black-200 flex-col-reverse md:h-fit lg:h-80 md:flex-row rounded-lg' key={Data.title}>
    <div className='left md:w-1/3 w-full'>
        <Image src={Data.img.src} alt="" className=' w-full h-full rounded-lg' width={100} height={100}  />
        </div>
    <div className='right md:w-2/3 w-full '>
    <h1 className='text-blue-800 md:font-semibold font-medium text-xl md:text-3xl xl:mb-10 pl-4 '>{Data.title}</h1>
    <p className='xl:pr-24 tracking-wide leading-8 ml-10 '>{Data.info}    </p>
    </div>
          </div>
    
  )
}

export default One
