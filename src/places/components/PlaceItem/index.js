import React from 'react'

import Card from '../../../shared/components/UIElements/Card'
import { StyledLi, Info, StyledImage, Actions } from './styles'

const PlaceItem = (props) => {
  return (
    <StyledLi>
      <Card>
        <StyledImage>
          <img src={props.image} alt={props.title} />
        </StyledImage>
        <Info>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </Info>
        <Actions>
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETEP</button>
        </Actions>
      </Card>
    </StyledLi>
  )
}

export default PlaceItem
