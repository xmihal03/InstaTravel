import React, { useState } from 'react'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { AuthForm, Caption, Authentication } from './styles'
import { useForm } from '../../shared/hooks/form-hook'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
} from '../../shared/util/validators'
const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: { value: '', isValid: false },
      password: { value: '', isValid: false },
    },
    false
  )
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitHandler = () => {
    setIsLoading(true)
    console.log(formState.inputs)
  }
  return (
    <Authentication>
      <Caption>Login Required</Caption>
      <hr />
      <form onSubmit={onSubmitHandler}>
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
          Login
        </Button>
      </form>
    </Authentication>
  )
}

export default Auth
