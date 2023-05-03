import React from 'react'
import './about.css'
import data from './about-data.js'
import Card from '../../utils/card/Card'
const About = () => {

  return (
    <>
      <div className='about-main'>
      <div className='about-box-1'>
        <p className='about-us'>ABOUT US</p>
        <h3 className='h2'>WHO AM I?</h3>
        <p className='p3'>
        <span>Hi I'm Jackson Ford</span>  On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been 
        rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text 
        should turn around and return to its own, safe country.
        </p>
        <p className='p3'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day 
           however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
      </div>
      <div><Card data = {data}/></div>
      <div className='about-box-3'>
        <h1>I am happy to know you<br></br> 
        that 300+ projects done sucessfully!</h1>
<button>HIRE ME</button>
      </div>
      
    </div>
    </>
   
  )
}

export default About
