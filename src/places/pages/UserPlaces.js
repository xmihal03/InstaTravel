import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'A Building',
    description: 'A tall building',
    imageUrl:
      'https://images.pexels.com/photos/4652004/pexels-photo-4652004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    address:
      'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India',
    location: { lat: 27.1752669, lng: 78.0399835 },
    creatorId: 'u1',
  },
  {
    id: 'p2',
    title: 'A Building',
    description: 'A tall building',
    imageUrl:
      'https://images.pexels.com/photos/4652004/pexels-photo-4652004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    address:
      'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India',
    location: { lat: 27.1752669, lng: 78.0399835 },
    creatorId: 'u2',
  },
]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorId === userId
  )
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
