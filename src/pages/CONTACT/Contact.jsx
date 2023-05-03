import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsFillPhoneVibrateFill} from 'react-icons/bs'
import {RiUserLocationFill} from 'react-icons/ri'
const Contact = () => {
  return (
    <>
       <div className='contact-main'>
      <div>
        <p className='about-us'>GET IN TOUCH</p>
        <h3 className='h2'>CONTACT</h3>
    </div>

    <div className='contact-container'>
      <div className='contact-box'>
        <div className='info-flex'>
          <div className='info-box'> <p><MdEmail/></p> </div>
          <p className='info-para'>info@domain.com</p>
        </div>

        <div className='info-flex'>
        <div className='info-box'> <p><RiUserLocationFill/></p> </div>
        <input type='email' id='email' placeholder='noida secter 63 C - block C76' />
        </div>
        
        <div className='info-flex'>
        <div className='info-box'> <p><BsFillPhoneVibrateFill/></p> </div>
        <p className='info-para'>+123 456 7890</p>
        </div>
      </div>

      <div className='info-form-container'>
      <div ><iframe width="100%" height="380" title='k' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>
      </div>
    </div>
    </div>
    
    </>
    
  )
}

export default Contact
