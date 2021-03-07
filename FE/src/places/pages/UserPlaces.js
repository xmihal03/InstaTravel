import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList'
import { useHttpClient } from '../../shared/hooks/http-hook'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'

const UserPlaces = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient()
  const [loadedPlaces, setLoadedPlaces] = useState()

  const userId = useParams().userId
  useEffect(() => {
    const iife = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`
        )
        setLoadedPlaces(responseData.places)
      } catch (err) {}
    }
    iife()
  }, [sendRequest, userId, setLoadedPlaces])

  const placeDeleteHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    )
  }
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner />}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeleteHandler} />
      )}
    </>
  )
}

export default UserPlaces
