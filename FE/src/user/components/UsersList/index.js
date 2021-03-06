import React from 'react'

import { NoUsers, UserList } from './styles'
import UserItem from '../UserItem'
import Card from '../../../shared/components/UIElements/Card'

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <NoUsers>
        <Card>
          <h2>No Users Found.</h2>
        </Card>
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
          placeCount={user.places.length}
        />
      ))}
    </UserList>
  )
}

export default UsersList
