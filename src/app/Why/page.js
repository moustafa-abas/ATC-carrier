import React from 'react'
import Header from '../components/Header'
import img1 from'../Assets/design.jpg'
import img2 from'../Assets/mangment.webp'
import img3 from'../Assets/test.webp'
import img4 from'../Assets/call.webp'
import Image from 'next/image'
import Footer from '../components/Footer'
const page = () => {
return (
<>
    <Header/>
<div className='container '>
    <h1 className='text-center my-5 text-5xl capitalize'>why <span className='uppercase text-blue-900 font-semibold'> atc </span> ..?</h1>
      <div className='feature flex justify-between gap-10 my-10 shadow-xl shadow-black-200 flex-col-reverse md:h-64 md:flex-row rounded-lg'>
<div className='left md:w-1/3 w-full'>
    <Image src={img2} alt="" className=' w-full h-full rounded-lg'  />
    </div>
<div className='right md:w-2/3 w-full '>
<h1 className='text-blue-800 md:font-semibold font-medium text-xl md:text-3xl xl:mb-10 pl-4 '>Project Management</h1>
<p className='xl:pr-24 tracking-wide leading-8 ml-10 '>A competent team of project managers,
construction managers, MEP coordinators,
project engineers, site engineers with skilled
technicians and workmen.
</p>
</div>
      </div>


      <div className='feature flex justify-between gap-10 my-10 shadow-xl shadow-black-200 flex-col md:h-64 md:flex-row rounded-lg'>
<div className='left md:w-2/3 w-full'>
<h1 className='text-blue-800 md:font-semibold font-medium text-xl md:text-3xl xl:mb-10 pl-4 '>Design & Engineering</h1>
<p className='xl:pr-24 tracking-wide leading-8 ml-10 '>An in-house team of technical engineering
professionals, focusing on all aspects of
design and implementation.
</p>
    </div>
<div className='right md:w-1/3 w-full '>
    <Image src={img1} alt="" className=' w-full h-full rounded-lg'  />
</div>
      </div>
      <div className='feature flex justify-between gap-10 my-10 shadow-xl shadow-black-200 flex-col-reverse md:h-64 md:flex-row rounded-lg'>
<div className='left md:w-1/3 w-full'>
    <Image src={img4} alt="" className=' w-full h-full rounded-lg'  />
    </div>
<div className='right md:w-2/3 w-full '>
<h1 className='text-blue-800 md:font-semibold font-medium text-xl md:text-3xl xl:mb-10 pl-4 '> After-sales Support</h1>
<p className='xl:pr-24 tracking-wide leading-8 ml-10 '>An experienced team geared up to manage
and support the client with after-sales service
requirements.
</p>
</div>
      </div>

      <div className='feature flex justify-between gap-10 my-10 shadow-xl shadow-black-200 flex-col md:h-64 md:flex-row rounded-lg'>
<div className='left md:w-2/3 w-full'>
<h1 className='text-blue-800 md:font-semibold font-medium text-xl md:text-3xl xl:mb-10 pl-4 '>Testing & Commissioning
</h1>
<p className='xl:pr-24 tracking-wide leading-8 ml-10 '>Complete testing and commissioning services
covering water and air-balancing,
pressure testing, chiller commissioning, and
ELV integration.

</p>
    </div>
<div className='right md:w-1/3 w-full '>
    <Image src={img3} alt="" className=' w-full h-full rounded-lg'  />
</div>
      </div>
    </div>
    <Footer/>
    </>

)
}

export default page
