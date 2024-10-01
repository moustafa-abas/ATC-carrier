import React from 'react'

const Table = () => {
  return (
<main className=' flex flex-col-reverse sm:flex-row justify-between my-7 bg-gradient-to-b from-blue-950 to-blue-500  sm:bg-gradient-to-r from-blue-950 via-blue-500 to-blue-300  rounded-lg text-white'>
<aside className='left p-10 w-full sm:w-1/2 '>
  <h1 className='text-center text-3xl uppercase font-medium mb-7 '>mission</h1>
<ol className='list-disc flex flex-col gap-7 leading-7 tracking-wide '>
  <li>To deliver innovative and reliable
HVAC solutions tailored to the
unique needs of our clients across
Commercial, Residential, Industrial,
and governmental sectors, utilizing
our extensive experience and
partnerships with Carrier and other
industry leaders.</li>
  <li>
  To uphold the highest standards of
professionalism, integrity, and
customer service in all operations,
fostering long-term relationships
built on trust and satisfaction
  </li>
  <li> To provide seamless integration of
HVAC systems through our
comprehensive supply and expert
installation services, ensuring
optimal comfort, efficiency, and
sustainability for our clients' projects.</li>
  <li> To contribute positively to the
communities we serve by promoting
energy-efficient and environmentally
sustainable HVAC practices, aligning
with our commitment to corporate
social responsibility.
</li>
</ol>
</aside>
<section className='right p-10 w-full sm:w-1/2 border-b sm:border-none'>
<h1 className='text-center text-3xl uppercase font-medium mb-7 '>vission</h1>
<p className='leading-7 tracking-wide'>Our vision at ATC is to be
the premier provider of
HVAC solutions in the UAE
and beyond, leveraging our
extensive experience and
partnerships with industry-leading brands like Carrier.
We aim to set the standard
for excellence in the supply
and installation of HVAC
systems for Commercial,
Residential, Industrial, and
governmental projects,
consistently delivering
superior quality and
unmatched customer
satisfaction</p>
</section>
</main>
  )
}

export default Table
