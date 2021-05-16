import React, { useState, useContext } from 'react'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { Caption, Authentication } from './styles'
import { useForm } from '../../shared/hooks/form-hook'
import { useHttpClient } from '../../shared/hooks/http-hook'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
} from '../../shared/util/validators'
import { AuthContext } from '../../shared/context/auth-context'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import ImageUpload from '../../shared/components/FormElements/ImageUpload'
const Auth = () => {
  const auth = useContext(AuthContext)
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: '', isValid: false },
      password: { value: '', isValid: false },
    },
    false
  )
  const [isLoginMode, setIsLoginMode] = useState(true)
  const { isLoading, error, sendRequest, clearError } = useHttpClient()

  const authSubmitHandler = async (e) => {
    e.preventDefault()

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/login',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          { 'Content-Type': 'application/json' }
        )
        auth.login(responseData.user.id)
      } catch (err) {}
    } else {
      try {
        const formData = new FormData()
        formData.append('email', formState.inputs.email.value)
        formData.append('name', formState.inputs.name.value)
        formData.append('password', formState.inputs.password.value)
        formData.append('image', formState.inputs.image.value)
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/signup',
          'POST',
          formData
        )

        auth.login(responseData.user.id)
      } catch (err) {}
    }
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined, image: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      )
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: { value: '', isValid: false },
          image: { value: null },
        },
        false
      )
    }
    setIsLoginMode((prevMode) => !prevMode)
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Authentication>
        {isLoading && <LoadingSpinner asOverlay />}
        <Caption>Login Required</Caption>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name"
              onInput={inputHandler}
            />
          )}
          {!isLoginMode && (
            <ImageUpload
              center
              id="image"
              onInput={inputHandler}
              errorText="Please provide an image"
            />
          )}
          <Input
            placeholder="Your email"
            element="input"
            id="email"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            errorText={'Incorrect email format.'}
            onInput={inputHandler}
            type="email"
            label="E-mail"
          />
          <Input
            placeholder="password"
            element="input"
            id="password"
            validators={[
              VALIDATOR_REQUIRE(),
              VALIDATOR_MINLENGTH(6),
              VALIDATOR_MAXLENGTH(24),
            ]}
            errorText={'Incorrect password format.'}
            onInput={inputHandler}
            type="password"
            label="Password"
          />
          <Button center disabled={!formState.isValid || isLoading}>
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </Authentication>
    </>
  )
}

export default Auth
