import React, { useState } from 'react'

import Modal from '../../../shared/components/UIElements/Modal'
import Button from '../../../shared/components/FormElements/Button'
import Card from '../../../shared/components/UIElements/Card'
import { StyledLi, Info, StyledImage, Actions, Map } from './styles'

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false)

  const openMapHandler = () => setShowMap(true)
  const closeMapHandler = () => setShowMap(false)

  return (
    <>
      <Modal
        show={showMap}
        onClose={closeMapHandler}
        header={props.address}
        contentClass="noPadding"
        footerClass="alignRight"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <Map>
          <h2>The MAP!</h2>
        </Map>
      </Modal>
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
            <Button customclass="inverse" onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button customclass="danger">DELETE</Button>
          </Actions>
        </Card>
      </StyledLi>
    </>
  )
}

export default PlaceItem
