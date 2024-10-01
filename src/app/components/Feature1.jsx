import React from 'react'
import img from'../Assets/mangment.webp'
import Image from 'next/image'

const Feature1 = () => {
  return (
    <main className='feature flex justify-between gap-10 my-10 shadow-xl shadow-black-200 flex-col md:h-64 md:flex-row rounded-lg'>
    <section className='left md:w-1/3 w-full'>
        <Image src={img} alt="" className=' w-full h-full rounded-lg'  />
        </section>
    <section className='right md:w-2/3 w-full '>
    <h1 className='text-blue-800 md:font-semibold font-medium text-xl md:text-3xl xl:mb-10 pl-4 '>Project Management</h1>
    <p className='xl:pr-24 tracking-wide leading-8 ml-10 '>A competent team of project managers,
    construction managers, MEP coordinators,
    project engineers, site engineers with skilled
    technicians and workmen.
    </p>
    </section>
          </main>
  )
}

export default Feature1
