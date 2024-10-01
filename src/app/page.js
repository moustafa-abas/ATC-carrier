"use client"
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";


import landing3 from'./Assets/landing1.webp'
import landing2 from'./Assets/landing2.webp'
import landing4 from'./Assets/landing3.webp'
import landing1 from'./Assets/landing4.webp'
import { useState } from "react";
import Overview from "./components/Overview";
import Auth from "./components/Auth";
import Services from "./components/Services";
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
    <p className="font-normal text-3xl md:text-5xl absolute -translate-y-1/2 top-1/2 sm:w-1/3 hidden sm:block">Beat the heat & Get comfortable</p>
<div className="flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-3">
<div className={`w-5 h-5 ${src===landing1?'bg-blue-900':'bg-gray-500'}  items-end rounded-full`}></div>
<div className={`w-5 h-5 ${src===landing2?'bg-blue-900':'bg-gray-500'}  items-end rounded-full`}></div>
<div className={`w-5 h-5 ${src===landing3?'bg-blue-900':'bg-gray-500'}  items-end rounded-full`}></div>
<div className={`w-5 h-5 ${src===landing4?'bg-blue-900':'bg-gray-500'}  items-end rounded-full`}></div>
</div>
        </div>
    </figure>

<main className="container">
<Overview/>
<Auth/>
<h1 className="text-center font-semibold text-4xl sm:text-5xl capitalize text-blue-800 mb-10">our services</h1>
<Services/>
 

</main>
<Footer/>
</>
  );
}
