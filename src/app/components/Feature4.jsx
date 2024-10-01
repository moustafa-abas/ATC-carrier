import React from 'react'
import Image from 'next/image'
import img from'../Assets/test.webp'

const Feature4 = () => {
  return (
    <main className='feature flex justify-between gap-10 my-10 shadow-xl shadow-black-200 flex-col-reverse md:h-64 md:flex-row rounded-lg'>
    <section className='left md:w-2/3 w-full'>
    <h1 className='text-blue-800 md:font-semibold font-medium text-xl md:text-3xl xl:mb-10 pl-4 '>Testing & Commissioning
    </h1>
    <p className='xl:pr-24 tracking-wide leading-8 ml-10 '>Complete testing and commissioning services
    covering water and air-balancing,
    pressure testing, chiller commissioning, and
    ELV integration.
    
    </p>
        </section>
    <section className='right md:w-1/3 w-full '>
        <Image src={img} alt="" className=' w-full h-full rounded-lg'  />
    </section>
          </main>
  )
}

export default Feature4
