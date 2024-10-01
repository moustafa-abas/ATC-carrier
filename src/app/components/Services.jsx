import React from 'react'
import install from'../Assets/install.webp'
import supply from'../Assets/supply.webp'
import Image from 'next/image'
const Services = () => {
  return (
<section className="services flex w-full lg:w-2/3 mx-auto gap-20  mb-10 flex-col sm:flex-row ">
<figure className="w-full sm:w-1/2  rounded-md relative ">
   <Image src={install} alt="" className="w-full h-full rounded-md" />
   <div className= "overlay bg-gray-500 bg-opacity-60 xl:opacity-0 hover:opacity-100 hover:cursor-pointer duration-500 absolute top-0 bottom-0 left-0 right-0 rounded-md ">
<h1 className="  top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl capitalize">installation</h1>
   </div>
</figure>
<figure className="w-full sm:w-1/2  rounded-md relative ">
   <Image src={supply} alt="" className="w-full h-full rounded-md" />
   <div className= "overlay bg-gray-500 bg-opacity-60 xl:opacity-0 hover:opacity-100 hover:cursor-pointer duration-500 absolute top-0 bottom-0 left-0 right-0 rounded-md ">
<h1 className="  top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl capitalize">supply</h1>
   </div>
</figure>

</section>
  )
}

export default Services
