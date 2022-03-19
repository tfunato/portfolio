import * as React from 'react'
import Career from './atoms/Career'
import { StaticQuery, graphql, PageProps } from 'gatsby'

const Resume: React.FC<PageProps> = (): JSX.Element => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMicrocmsCareer {
            edges {
              node {
                id
                careerId
                contents
                corpName
                joinDate
                quitDate
                role
                technology
                projects
              }
            }
          }
        }
      `}
      render={data => (
        <div className='section'>
          <div className='container'>
            <h1>Career</h1>
            <div className='resume-container'>
              <div className='timeline'>
                <h2>Now</h2>
                <ul>
                  {data.allMicrocmsCareer.edges.map((career, index) => (
                    <Career
                      key={index}
                      corpName={career.node.corpName}
                      joinDate={career.node.joinDate}
                      quitDate={career.node.quitDate}
                      projects={career.node.projects}
                      contents={career.node.contents}
                      role={career.node.role}
                      technology={career.node.technology}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default Resume
