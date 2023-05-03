import React from 'react'
import '../myExperience/myexperience.css'
import data from './myExperience_Data'
const MyExperience = () => {
  return (
    <>
    <div className='experience-main'>
    <p className='about-us'>EXPERIENCE</p>
        <h3 className='h2'>WORK EXPERIENCE</h3>
    </div>
    <div>
    {data.map((e ,i)=>(
      <div className='container-exe'>
        <div className='border-line'>
          <div className='gola' style={e.s} ><p> {e.id} </p></div>
          <div className='line-height'></div>
        </div>
        <div className='side-box'>
          <h1 className='side-h1'>{e.h} <span>{e.d}</span></h1>
          <p className='side-para'>{e.P}</p>
        </div>
      </div>
      ))}
    </div>
    </>
  )
}

export default MyExperience
