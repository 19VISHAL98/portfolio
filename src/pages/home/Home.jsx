import React from "react";
import bg from '../../image/img_bg_2.jpg.webp'
import { TypeAnimation } from 'react-type-animation';
import './home.css'
const Home = () => {
     const data2 =[
      'MERN Developer', 
      3000,
      'Node Developer', 
      3000,
      'React Developer',
      3000
     ]
  return (
    <div className="slider-box">
      <div className='box'>
      <div className='sub-box'>
      <h2 className='am'>I'am a <br/>
       <span> <TypeAnimation sequence={data2} wrapper="span" cursor={true} repeat={Infinity} speed={4} deletionSpeed={5} />
       </span>
         </h2>
      </div>
           <img src={bg} alt=''/>
      </div>
    </div>
  )
}

export default Home
