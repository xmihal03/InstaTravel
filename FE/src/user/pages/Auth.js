import React, { useState, useContext } from 'react'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { Caption, Authentication } from './styles'
import { useForm } from '../../shared/hooks/form-hook'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
} from '../../shared/util/validators'
import { AuthContext } from '../../shared/context/auth-context'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'

const Auth = () => {
  const auth = useContext(AuthContext)
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: '', isValid: false },
      password: { value: '', isValid: false },
    },
    false
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [error, setError] = useState()

  const authSubmitHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (isLoginMode) {
      try {
        const res = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        })
        const responseDate = await res.json()
        if (!res.ok) {
          throw new Error(responseDate.message)
        }
        setIsLoading(false)
        auth.login()
      } catch (err) {
        console.error(err)
        setIsLoading(false)
        setError(err.message || 'Something went wrong.')
      }
    } else {
      try {
        const res = await fetch('http://localhost:5000/api/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        })
        const responseDate = await res.json()
        if (!res.ok) {
          throw new Error(responseDate.message)
        }
        setIsLoading(false)
        auth.login()
      } catch (err) {
        console.error(err)
        setIsLoading(false)
        setError(err.message || 'Something went wrong.')
      }
    }
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      )
    } else {
      setFormData(
        { ...formState.inputs, name: { value: '', isValid: false } },
        false
      )
    }
    setIsLoginMode((prevMode) => !prevMode)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
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
