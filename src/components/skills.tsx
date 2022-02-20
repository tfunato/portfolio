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
            {console.log(skills)}
            {skills.map((skill, index) => (
              <div className='skill' key={index}>
                <img src={skill.img} alt='css' />
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
