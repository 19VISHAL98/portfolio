import React ,{useState} from 'react'
import './slidebar.css'
import Home from '../pages/home/Home';
import About from '../pages/about/About';

import about from '../image/about.jpg.webp';
import MyExperience from '../pages/myExperience/MyExperience';
import Services from '../pages/SERVICES/Services';
import Skills from '../pages/SKILLS/Skills';
import Education from '../pages/EDUCATION/Education';
import Contact from '../pages/CONTACT/Contact';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Sidebar = () => {
 const [index,setIndex] = useState(0)
const [open,setOpen] = useState(false)
  return (
    <div>
    <div className='blog'>
     <div className='links'>
       <div className='box-img'>
        <div className='box-img-1'><img src={about} alt=''/> </div>
        <div className='head-name'>
       <div>
       <h3 className='h3'>vishal bhai</h3>
        <p className='p1 p2'><span>UI/UX/DESIGNER</span> IN PHILIPPINES</p>
       </div>
        </div>
       </div>
       <div className='menu-icon'>
       {
        open ?    <AiOutlineClose onClick={()=>setOpen(false)}  style={{fontSize :'1.5rem'}} />: <AiOutlineMenu onClick={()=>setOpen(true)} 
           style={{fontSize :'1.5rem'}}
        />
       }
     
  
     </div>
      <div className={`links-1 ${open ? 'active-menu':''} `}>
      <div className='li-list'> <div className={`buttons ${index===0?"buttons-active":""}`} onClick={()=> setIndex(0) }> <p className='p1'>HOME</p>   </div> </div>
      <div className='li-list'><div className={`buttons ${index===1?"buttons-active":""}`} onClick={()=> setIndex(1) } > <p className='p1'>ABOUT</p>   </div></div>
      <div className='li-list'><div className={`buttons ${index===2?"buttons-active":""}`} onClick={()=> setIndex(2) } > <p className='p1'>SERVICES</p>   </div></div>
      <div className='li-list'><div className={`buttons ${index===3?"buttons-active":""}`} onClick={()=> setIndex(3) } > <p className='p1'>SKILLS</p>   </div></div>
      <div className='li-list'><div className={`buttons ${index===4?"buttons-active":""}`} onClick={()=> setIndex(4) } > <p className='p1'>EDUCATION</p>   </div></div>
      <div className='li-list'><div className={`buttons ${index===5?"buttons-active":""}`} onClick={()=> setIndex(5) } > <p className='p1'>EXPERIENCE</p>   </div></div>
      <div className='li-list'><div className={`buttons ${index===6?"buttons-active":""}`} onClick={()=> setIndex(6) } > <p className='p1'>CONTACT</p>   </div></div>
      <div>
      <p className='copy-para'>© Copyright ©2023 All rights reserved |<br/> This template is made with  by <span>Colorlib</span> <br/>
Demo Images: <span>Unsplash.com</span> </p>
      </div>
       </div>
    </div>
    <div className='data'>
        <div className= {`space ${index === 0?"active-space":""}`} onMouseEnter ={()=>{ setIndex(0); setOpen(false)  } }  > <Home />   </div>
        <div className= {`space ${index === 1?"active-space":""}`} onMouseEnter={()=> { setIndex(1); setOpen(false) }  } > <About/ >   </div>
        <div className= {`space ${index === 2?"active-space":""}`} onMouseEnter={()=> { setIndex(2); setOpen(false) }  } > <Services/>   </div>
        <div className= {`space ${index === 3?"active-space":""}`} onMouseEnter={()=> { setIndex(3); setOpen(false) }  } > <Skills/>   </div>
        <div className= {`space ${index === 4?"active-space":""}`} onMouseEnter={()=> { setIndex(4); setOpen(false) }  } > <Education/>   </div>
        <div className= {`space ${index === 5?"active-space":""}`} onMouseEnter={()=> { setIndex(5); setOpen(false) }  } > <MyExperience/>   </div>
        <div className= {`space ${index === 6?"active-space":""}`} onMouseEnter={()=> { setIndex(6); setOpen(false) }  } > <Contact/> </div>
    </div>
    </div>
  
    
    </div>

  )
}
export default Sidebar
