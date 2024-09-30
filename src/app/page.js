"use client"
import Image from "next/image";
import Link from "next/link";

import Header from "./components/Header";
import Footer from "./components/Footer";
import view1 from'./Assets/view1.webp'
import view2 from'./Assets/view2.jpeg'
import install from'./Assets/install.webp'
import supply from'./Assets/supply.webp'
import carrier from'./Assets/Carrier.webp'
import landing1 from'./Assets/landing1.webp'
import landing2 from'./Assets/landing2.webp'
import landing3 from'./Assets/landing3.webp'
import landing4 from'./Assets/landing4.webp'
import { useState } from "react";
export default function Home() {
  const [src, setSrc] = useState(landing1);
setTimeout(() => {
  if(src===landing1){
  setSrc(landing2)
  }
  if(src===landing2){
  setSrc(landing3)
  }
  if(src===landing3){
  setSrc(landing4)
  }
  if(src===landing4){
  setSrc(landing1)
  }
}, 4000);


return (
<>
  
<Header/>
<figure className="landing block relative ">
  <Image src={src} alt="" className="h-full w-full"/>
        <div className="container ">
    <p className="font-normal text-3xl md:text-5xl absolute top-1/3 sm:top-1/2 md:w-1/3">Beat the heat & Get comfortable</p>
<div className="flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-3">
<div className={`w-5 h-5 ${src===landing1?'bg-blue-900':'bg-gray-500'}  items-end rounded-full`}></div>
<div className={`w-5 h-5 ${src===landing2?'bg-blue-900':'bg-gray-500'}  items-end rounded-full`}></div>
<div className={`w-5 h-5 ${src===landing3?'bg-blue-900':'bg-gray-500'}  items-end rounded-full`}></div>
<div className={`w-5 h-5 ${src===landing4?'bg-blue-900':'bg-gray-500'}  items-end rounded-full`}></div>
</div>
        </div>
    </figure>

<main className="container">
    <section className="overView py-16 flex  justify-between flex-col gap-10 sm:gap-0 sm:flex-row ">
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

</section>
<section className="flex justify-between items-center flex-col-reverse sm:flex-row my-20"> 
<p className="capitalize text-3xl w-full sm:w-1/2">we are the <span className="font-bold text-blue-900 text-5xl"> 1</span>st distributor of Carrier products in the uae</p>
<Image src={carrier} alt="" className=" w-full mb-10 sm:mb-0 sm:w-1/4 "/>
 </section>
<h1 className="text-center font-semibold text-4xl sm:text-5xl capitalize text-blue-800 mb-10">our services</h1>
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
 

</main>
<Footer/>
</>
  );
}
