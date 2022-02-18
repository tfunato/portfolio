import React from 'react'
import { promo } from '../yourdata'

const Promotion = () => {
  return (
    <div className='section'>
      <div className='container'>
        <div className='promotion-container'>
          <h1>{promo.promotionHeading}</h1>
          <p>{promo.promotionPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion
