import React from 'react'
import './card.css'

const Card = ({data}) => {
  return (
        <>
          <div className="portfolio-container">
                {
                    data.map((el, i) => (
                        <div className="portfolio-box" key={i} style={el.s}>
                            <img src={el.img} alt="" />
                            <div className="portfolio-layer" style={el.s1}>
                            <h3 className='card-h'>{el.h}</h3>
                             <p className='card-p'>{el.p}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
    </>
  
   
  )
}

export default Card
