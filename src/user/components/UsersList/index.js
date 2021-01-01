import React from 'react'
import { NoUsers, UserList } from './styles'
import UserItem from '../UserItem'

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <NoUsers>
        <h2>No Users Found.</h2>
      </NoUsers>
    )
  }

  return (
    <UserList>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </UserList>
  )
}

export default UsersList
