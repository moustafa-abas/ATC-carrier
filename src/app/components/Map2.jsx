import React from 'react'
import logo from'../Assets/logo.webp'
import Image from 'next/image'
const Map2 = () => {
  return (
    <main className='map flex sm:gap-20 gap-8 my-14 flex-col sm:flex-row'>
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
  </main>
  )
}

export default Map2
