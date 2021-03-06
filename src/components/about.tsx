import * as React from 'react'
import { about } from '../yourdata'
import { PageProps } from 'gatsby'
import SelfPortrait from '../images/selfportrait.jpg'

const About: React.FC<PageProps> = (): JSX.Element => {
  return (
    <div className='section' id='about'>
      <div className='container'>
        <div className='about-section'>
          <div className='content'>
            <h1>About Me</h1>
            <p>
              {about.aboutParaOne}
              <br />
              <br />
              {about.aboutParaTwo}
              <br />
              <br />
              {about.aboutParaThree}
            </p>
          </div>
          <div className='image-wrapper'>
            <img src={SelfPortrait} alt='about' width={334} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
