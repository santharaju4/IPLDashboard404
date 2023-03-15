import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  console.log(teamDetails)
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card-link ">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="teamImageUrl" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
