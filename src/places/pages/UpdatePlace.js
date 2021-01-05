import React from 'react'
import { useParams } from 'react-router-dom'

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators'
import { PlaceForm } from './styles'
import { useForm } from '../../shared/hooks/form-hook'

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

const UpdatePlace = () => {
  const placeId = useParams().placeId
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId)

  const [formState, inputHandler] = useForm(
    {
      title: { value: identifiedPlace.title, isValid: true },
      description: { value: identifiedPlace.description, isValid: true },
    },
    true
  )

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formState.inputs)
  }

  if (!identifiedPlace) {
    return (
      <div>
        <h2>Could not find place!</h2>
      </div>
    )
  }
  return (
    <PlaceForm onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      ></Input>
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description min 5 characters."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      ></Input>
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </PlaceForm>
  )
}
export default UpdatePlace
