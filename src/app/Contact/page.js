import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import contact from'../Assets/contact.webp'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Map1 from '../components/Map1'
import Map2 from '../components/Map2'
import Map3 from '../components/Map3'
const page = () => {
  return (
    <>
    <Header/>
      <Image src={contact} alt="" className='w-full h-96'/>
      <main className='container'>
        <h1 className="font-semibold text-3xl mb-7 text-center my-8 ">contact us</h1>
      <div className="  flex  w-full  flex-col md:flex-row justify-between  ">
        <div className="flex items-center gap-4 font-medium text-lg  my-2  md:w-1/2 md:justify-center">
          <FontAwesomeIcon icon={faPhone} className="text-2xl" />
          <h2 className="">+971 50 435 9237</h2>{" "}
        </div>
        <div className="flex items-center gap-4 font-medium text-lg  my-2 md:w-1/2 md:justify-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
          <h2 className="">gala.mohamed@carrier-atc.ae</h2>
        </div>
      </div>
<Map1/>
<Map2/>
<Map3/>
      </main>
    <Footer/>
    </>
  )
}

export default page
