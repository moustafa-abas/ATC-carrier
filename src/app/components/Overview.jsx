import React from 'react'
import view1 from'../Assets/view1.webp'
import view2 from'../Assets/view2.jpeg'
import Image from 'next/image'
import Link from 'next/link'
const Overview = () => {
  return (
    <main className="overView py-16 flex  justify-between flex-col gap-10 sm:gap-0 sm:flex-row ">
    <aside className="left flex  sm:w-1/2 mt-10 w-full sm:mr-10 ">
        <Image className="w-full sm:w-1/2 h-64" src={view1} alt="" />
        <Image className="w-1/2 h-64 hidden sm:block" src={view2} alt="" />

    </aside>
    <main className="right sm:w-1/2 w-full ">
        <h1 className="font-semibold text-2xl text-center mb-5 text-blue-800">ATC Air-conditioning </h1>
        <h2 className="">ATC, established in 2018, brings over 23 years of experience in
providing and installing solutions for HVAC (Heating, Ventilation,
and Air Conditioning) systems. ATC has gained a reputation as
a trusted distributor for Carrier, a leading brand in the HVAC
industry.<br/> <br/>
With a focus on reliability, quality, and innovation, ATC offers a
comprehensive range of HVAC solutions tailored to meet the
diverse needs of its clientele. Whether it's designing systems for
large commercial complexes .......
</h2>
<Link href='/About' >
<button className="my-8 border   border-blue-800 rounded-3xl   h-14 hover:bg-blue-800 hover:text-white transition-all duration-500 w-40"> 
read more
</button>
</Link>
    </main>

</main>
  )
}

export default Overview
