import React from 'react'
import { header, promo } from '../yourdata'

const Header = () => {
  return (
    <div className='section' id='home'>
      <div className='container'>
        <div className='header-wrapper'>
          <h2>
            Hi, I'm {header.name}{' '}
            <span role='img' aria-label='Emoji'>
              👋
            </span>
          </h2>
          <div className='heading-wrapper'>
            <h1>
              {header.headerTagline[0]
                ? header.headerTagline[0]
                : 'Building digital'}
            </h1>
            <h1>
              {' '}
              {header.headerTagline[1]
                ? header.headerTagline[1]
                : 'products, brands'}
            </h1>
            <h1>
              {' '}
              {header.headerTagline[2]
                ? header.headerTagline[2]
                : 'and experience'}
            </h1>
          </div>
          <p>{header.headerParagraph}</p>
          <a href={`mailto:${promo.contactEmail}`} className='primary-btn'>
            CONNECT WITH ME
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
