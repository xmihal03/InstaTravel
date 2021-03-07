import React from 'react'

import Card from '../../../shared/components/UIElements/Card'
import { StyledUl } from './styles'
import PlaceItem from '../PlaceItem'
import Button from '../../../shared/components/FormElements/Button'

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <StyledUl customClass="center">
        <Card>
          <h2>No Places found!</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </StyledUl>
    )
  }
  return (
    <StyledUl>
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </StyledUl>
  )
}

export default PlaceList
