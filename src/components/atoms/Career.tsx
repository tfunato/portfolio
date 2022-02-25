import * as React from 'react'

type career = {
  corpName: string
  joinDate: string
  quitDate: string
  projects: string
  contents: string
  role: string
  technology: string
}
const Career: React.FC<career> = ({
  corpName,
  joinDate,
  quitDate,
  projects,
  contents,
  role,
  technology,
}): JSX.Element => {
  return (
    <li>
      <dl>
        <dt>Term</dt>
        <dd>
          {joinDate} - {quitDate}
        </dd>
        <dt>CorpName</dt>
        <dd> {corpName} </dd>
        <dt>Projects</dt>
        <dd>{projects}</dd>
        <dt>Contents</dt>
        <dd>{contents}</dd>
        <dt>Role</dt>
        <dd>{role}</dd>
        <dt>Technology</dt>
        <dd>{technology}</dd>
      </dl>
    </li>
  )
}

export default Career
