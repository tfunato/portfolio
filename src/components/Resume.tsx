import * as React from 'react'
import { resumes } from '../yourdata'
import Career from './atoms/Career'
import { PageProps } from 'gatsby'

const Resume: React.FC<PageProps> = (): JSX.Element => {
  return (
    <div className='section'>
      <div className='container'>
        <h1>Career</h1>
        <div className='resume-container'>
          <div className='timeline'>
            <h2>Now</h2>
            <ul>
              {resumes.map((career, index) => (
                <Career
                  key={index}
                  corpName={career.corpName}
                  joinDate={career.joinDate}
                  quitDate={career.quitDate}
                  projects={career.projects}
                  contents={career.contents}
                  role={career.role}
                  technology={career.technology}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
