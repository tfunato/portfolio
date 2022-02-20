import * as React from 'react'
import { promo } from '../yourdata'
import { PageProps } from 'gatsby'

const Promotion: React.FC<PageProps> = (): JSX.Element => {
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
