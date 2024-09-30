import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import contact from'../Assets/contact.webp'
import logo from'../Assets/logo.webp'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const page = () => {
  return (
    <>
    {/* <div className="mapouter"><div className="gmap_canvas"><iframe src="" frameBorder="0" scrolling="no" style={{ width: 490, height: 400 }} /><style>{`.mapouter{display:table;}.gmap_canvas{overflow:hidden;position:relative;height:400px;width:490px;background:#fff;}`}</style><style>{`.gmap_canvas iframe{position:relative !important;z-index:2 !important;} */}
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
      <div className='map flex sm:gap-20 gap-8 my-14 flex-col sm:flex-row'>
        <aside className='sm:w-1/3  w-full text-center sm:text-start'>
          <Image src={logo} alt="" className='w-1/2 mx-auto ' />
          <h1 className="font-semibold text-3xl mb-5 text-blue-900">Headquarter</h1>
          <p className='text-xl'>bin Kamel Center, Al Wehda St, Industrial 4, Sharjah</p>
        </aside>
        <main className='sm:w-2/3 w-full'>
  <div className="gmap_canvas w-full h-96">
    <iframe className='w-full h-full' src="https://maps.google.com/maps?q=atc%20carrier%20Sharjah&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"  />
    <style>{`.gmap_canvas{overflow:hidden;position:relative;background:#fff;}`}</style>
    <a href="https://www.taxuni.com/earned-income-credit-eic-calculator/">EIC Calculator</a>
        <style>{`.gmap_canvas iframe{position:relative !important;z-index:2 !important;}.gmap_canvas a{color:#fff !important;position:absolute !important;top:0 !important;left:0 !important;z-index:0 !important;}`}
    </style>
    </div>
        </main>
      </div>
      <div className='map flex sm:gap-20 gap-8 my-14 flex-col sm:flex-row'>
        <aside className='sm:w-1/3  w-full text-center sm:text-start'>
          <Image src={logo} alt="" className='w-1/2 mx-auto ' />
          <h1 className="font-semibold text-3xl mb-5 text-blue-900">Umm Al Quwain</h1>
          <p className='text-xl'>Al Khairan Building, King Faisal St, Al Ras 2, Umm Al Quwain</p>
        </aside>
        <main className='sm:w-2/3 w-full'>
  <div className="gmap_canvas w-full h-96">
    <iframe className='w-full h-full' src="https://maps.google.com/maps?q=atc%20carrier%20Al%20Khairan%20Building&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"  />
    <style>{`.gmap_canvas{overflow:hidden;position:relative;background:#fff;}`}</style>
    <a href="https://www.taxuni.com/mission-square-retirement/">Mission Square Retirement</a>
        <style>{`.gmap_canvas iframe{position:relative !important;z-index:2 !important;}.gmap_canvas a{color:#fff !important;position:absolute !important;top:0 !important;left:0 !important;z-index:0 !important;}`}
    </style>
    </div>
        </main>
      </div>
      <div className='map flex sm:gap-20 gap-8 my-14 flex-col sm:flex-row'>
        <aside className='sm:w-1/3  w-full text-center sm:text-start'>
          <Image src={logo} alt="" className='w-1/2 mx-auto ' />
          <h1 className="font-semibold text-3xl mb-5 text-blue-900">Fujairah</h1>
          <p className='text-xl'>  FUJAIRAH BR - Al Ghaleelah - Fujairah</p>
        </aside>
        <main className='sm:w-2/3 w-full'>
  <div className="gmap_canvas w-full h-96">
    <iframe className='w-full h-full' src="https://maps.google.com/maps?q=atc%20carrier%20Fujairah&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"  />
    <style>{`.gmap_canvas{overflow:hidden;position:relative;background:#fff;}`}</style>
    <a href="https://www.taxuni.com/depreciation-recapture-calculator/">Depreciation Recapture Calculator</a>
        <style>{`.gmap_canvas iframe{position:relative !important;z-index:2 !important;}.gmap_canvas a{color:#fff !important;position:absolute !important;top:0 !important;left:0 !important;z-index:0 !important;}`}
    </style>
    </div>
        </main>
      </div>
      </main>
    <Footer/>
    </>
  )
}

export default page
