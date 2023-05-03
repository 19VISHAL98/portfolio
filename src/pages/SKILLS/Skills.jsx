import React from 'react'
import './skills.css'
import '../about/about.css'
import data from './skill-data'
const Skills = () => {
  return (
    <>
     <div className='main-skill'>
     <div className='skill-1'>
      <p className='about-us'>MY SPECIALTY</p>
      <h3 className='h2'>MY SKILLS </h3>
      <div>
        <p className='p3'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
      </div>
      </div>
      <div className='skill-2'>
      {
data.d.map((el,i)=>(
 <div className='box-content'>
 <div>{el.icon}</div>
 <div className='box'>
 {/* <h3 className='pln'>{el.h}</h3> */}
 <div style={data.s} >
       <div style={el.b} ></div>
      </div>
    </div>
 </div>

))
      }
     
      </div>
     
     <div className='skill-2'></div>
      
    </div>
    </>
  )
}

export default Skills
