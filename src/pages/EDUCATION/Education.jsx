import React ,{useState} from 'react'
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai'
import './Education.css'
import data from './education-data'
import '../about/about.css'
const Education = () => {
  const [index , setIndex]= useState(-1)
  const handleClick=(i)=>{
 setIndex(i===index ? -1 : i)
  }
  return (
    <>
    <div className='main-education'>
     <div className='education-1'>
      <p className='about-us'>EDUCATION</p>
      <h3 className='h2'>EDUCATION</h3>
      <div className='education-2'>
      {
         data.map((e , i )=>(
       <div className='education-box'>
      <div className={`education-data ${index===i?"education-data-active":""}`} onClick={()=>handleClick(i)}>
      <p className='para'>{e.h}</p>
      <p> {i===index ?  <AiOutlineMinus />:  <AiOutlinePlus />}   </p>
      </div>
        { i=== index && ( <div className='education-detail'> <p className='para'>{e.p}</p></div>)}
        </div>
         ))
      }
      </div>
     </div>
    </div>
    </>
  )
}

export default Education
