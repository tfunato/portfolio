import * as React from 'react'
import { resume } from '../yourdata'
import { PageProps } from 'gatsby'

const Resume: React.FC<PageProps> = (): JSX.Element => {
  return (
    <div className='section'>
      <div className='container'>
        <div className='resume-container'>
          <h1>{resume.resumeHeading}</h1>
          <p>{resume.resumePara}</p>
        </div>
      </div>
    </div>
  )
}

export default Resume
