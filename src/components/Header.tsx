import * as React from 'react'
import { header, promo } from '../yourdata'
import { PageProps } from 'gatsby'

const Header: React.FC<PageProps> = (): JSX.Element => {
  return (
    <div className='section' id='home'>
      <div className='container'>
        <div className='header-wrapper'>
          <h2>{header.name}'s personal website</h2>
          <div className='heading-wrapper'>
            <h1>
              {header.headerTagline[0]
                ? header.headerTagline[0]
                : 'Building digital'}
            </h1>
          </div>
          <p>{header.headerParagraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
