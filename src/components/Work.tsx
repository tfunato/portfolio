import * as React from 'react'
import Card from './atoms/Card'
import { projects } from '../yourdata'
import { PageProps } from 'gatsby'

const Work: React.FC<PageProps> = (): JSX.Element => {
  return (
    <div className='section' id='work'>
      <div className='container'>
        <div className='work-wrapper'>
          <h1>Work</h1>

          <div className='grid'>
            {projects.map((project, index) => (
              <Card
                key={index}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
