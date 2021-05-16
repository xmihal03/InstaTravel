import React, { useState, useContext } from 'react'

import Modal from '../../../shared/components/UIElements/Modal'
import Button from '../../../shared/components/FormElements/Button'
import Card from '../../../shared/components/UIElements/Card'
import { StyledLi, Info, StyledImage, Actions, StyledMap } from './styles'
import Map from '../../../shared/components/UIElements/Map'
import { AuthContext } from '../../../shared/context/auth-context'
import { useHttpClient } from '../../../shared/hooks/http-hook'
import ErrorModal from '../../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner'

const PlaceItem = (props) => {
  const auth = useContext(AuthContext)
  const [showMap, setShowMap] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const openMapHandler = () => setShowMap(true)
  const closeMapHandler = () => setShowMap(false)
  const { isLoading, clearError, error, sendRequest } = useHttpClient()

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true)
  }

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false)
  }

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false)
    try {
      await sendRequest(
        `http://localhost:5000/api/places/${props.id}`,
        'DELETE'
      )
      props.onDelete(props.id)
    } catch (err) {}
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
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
          {isLoading && <LoadingSpinner asOverlay />}
          <StyledImage>
            <img
              src={`http://localhost:5000/${props.image}`}
              alt={props.title}
            />
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
            {auth.userId === props.creatorId && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.userId === props.creatorId && (
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
