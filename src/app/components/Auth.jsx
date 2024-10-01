import React from 'react'
import carrier from'../Assets/Carrier.webp'
import Image from 'next/image'

const Auth = () => {
  return (
<section className="flex justify-between items-center flex-col-reverse sm:flex-row my-20 bg-gray-200 px-5 py-8 rounded-lg"> 
<p className="capitalize text-3xl w-full sm:w-1/2">we are the <span className="font-bold text-blue-900 text-5xl"> 1</span>st distributor of Carrier products in the uae</p>
<Image src={carrier} alt="" className=" w-full mb-10 sm:mb-0 sm:w-1/4 "/>
 </section>
  )
}

export default Auth
