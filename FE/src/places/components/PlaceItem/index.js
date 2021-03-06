import React, { useState, useContext } from 'react'

import Modal from '../../../shared/components/UIElements/Modal'
import Button from '../../../shared/components/FormElements/Button'
import Card from '../../../shared/components/UIElements/Card'
import { StyledLi, Info, StyledImage, Actions, StyledMap } from './styles'
import Map from '../../../shared/components/UIElements/Map'
import { AuthContext } from '../../../shared/context/auth-context'

const PlaceItem = (props) => {
  const auth = useContext(AuthContext)
  const [showMap, setShowMap] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const openMapHandler = () => setShowMap(true)
  const closeMapHandler = () => setShowMap(false)

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true)
  }

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false)
  }

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false)
    console.log('DELETING ...')
  }

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
        <StyledMap>
          <Map center={props.coordinates} zoom={16} />
        </StyledMap>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>Do you want to procees and delete this place?</p>
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
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </Actions>
        </Card>
      </StyledLi>
    </>
  )
}

export default PlaceItem