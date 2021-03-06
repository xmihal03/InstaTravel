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

  const authSubmitHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (isLoginMode) {
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
        console.log(responseDate)
      } catch (err) {
        console.error(err)
      }
    }

    auth.login()
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

  return (
    <Authentication>
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
  )
}

export default Auth
