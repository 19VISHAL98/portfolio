import React from 'react'
import './services.css'
import data from './data'
import Card from '../../utils/card/Card'
const Services = () => {
  return (
    <>
      <div className='services-main'>
        <div className='services-1'>
          <p className='about-us'>WHAT I DO?</p>
          <h3 className='h2'> HERE ARE SOME OF MY EXPERTISE</h3>
        </div>
        <div><Card data = {data}/></div>
      <div className='services-3-box'>
        <div className='number'>
          <h2>309</h2>
          <p>CUPS OF COFFEE  </p> 
          </div>
        <div className='number'>
          <h2>356</h2>
          <p>PROJECTS</p>
        </div>
        <div className='number'>
        <h2>30</h2>
          <p>CLIENTS</p>
        </div>
        <div className='number'>
        <h2>10</h2>
          <p>PARTNERS</p>
        </div>
      </div>

    </div >
    </>

  )
}

export default Services
