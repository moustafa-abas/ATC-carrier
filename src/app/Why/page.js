import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Feature3 from '../components/Feature3'
import Feature4 from '../components/Feature4'
const page = () => {
return (
<>
    <Header/>
<main className='container '>
    <h1 className='text-center my-5 text-5xl capitalize'>why <span className='uppercase text-blue-900 font-semibold'> atc </span> ..?</h1>
<Feature1/>
<Feature2/>
<Feature3/>
<Feature4/>
    </main>
    <Footer/>
    </>

)
}

export default page
