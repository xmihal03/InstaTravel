import React from 'react'
import Avatar from '../../../shared/components/UIElements/Avatar'
import Card from '../../../shared/components/UIElements/Card'
import { UserImage, Info, User } from './styles'
import { Link } from 'react-router-dom'
const UserItem = ({ image, name, placeCount, id }) => {
  return (
    <User>
      <Card>
        <Link to={`/${id}/places`}>
          <UserImage>
            <Avatar image={`http://localhost:5000/${image}`} alt={name} />
          </UserImage>
          <Info>
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </Info>
        </Link>
      </Card>
    </User>
  )
}

export default UserItem
