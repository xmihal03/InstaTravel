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
  const onSubmitHandler = () => {
    setIsLoading(true)
    console.log(formState.inputs)
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
      <form onSubmit={onSubmitHandler}>
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
