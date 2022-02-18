import React from 'react'
import { skills } from '../yourdata'
import { PageProps } from 'gatsby'

const Skills: React.FC<PageProps> = (): JSX.Element => {
  return (
    <div className='section'>
      <div className='container'>
        <div className='skills-container'>
          <h1>Skills</h1>
          <div className='skills-grid'>
            {skills.map((skill, index) => (
              <div className='skill' key={index}>
                <img src={skill.img.toString()} alt='css'></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
