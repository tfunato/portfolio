import * as React from 'react'
import { socials, contact } from '../yourdata'
import { PageProps } from 'gatsby'

const Footer: React.FC<PageProps> = (): JSX.Element => {
  return (
    <div className='section' id='contact'>
      <div className='container'>
        <div className='footer-container'>
          <h1>Contact</h1>
          <h2>{contact.contactSubHeading}</h2>
          <a className='email-link' href={`mailto:${contact.contactEmail}`}>
            {contact.contactEmail}
          </a>
          <div className='social-icons'>
            {socials.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={socialLink.img} alt='icons' />
              </a>
            ))}
          </div>
          <span>
            Made With by <a href='https://www.canetrash.jp/'>Takashi Funato</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
