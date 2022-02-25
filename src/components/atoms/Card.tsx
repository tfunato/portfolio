import * as React from 'react'

type card = {
  heading: string
  paragraph: string
  imgUrl: string
  projectLink: string
}

const Card: React.FC<card> = ({
  heading,
  paragraph,
  imgUrl,
  projectLink,
}): JSX.Element => {
  return (
    <div
      className='card'
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(' +
          imgUrl +
          ')',
      }}
    >
      <div className='content'>
        <h1 className='header'>{heading}</h1>
        <p className='text'>{paragraph}</p>
        <a
          href={projectLink ? projectLink : '#'}
          target='_blank'
          rel='noopener noreferrer'
          className='btn'
        >
          Explore
        </a>
      </div>
    </div>
  )
}

export default Card
