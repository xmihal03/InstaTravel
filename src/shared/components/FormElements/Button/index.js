import React from 'react'

import { CustomButton, CustomAnchor, CustomRouterLink } from './styles'

const Button = (props) => {
  if (props.href) {
    return (
      <CustomAnchor
        buttonsize={props.buttonsize}
        customclass={props.customclass}
        href={props.href}
      >
        {props.children}
      </CustomAnchor>
    )
  }
  if (props.to) {
    return (
      <CustomRouterLink
        to={props.to}
        exact={props.exact}
        buttonsize={props.buttonsize}
        customclass={props.customclass}
      >
        {props.children}
      </CustomRouterLink>
    )
  }
  return (
    <CustomButton
      buttonsize={props.buttonsize}
      customclass={props.customclass}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </CustomButton>
  )
}

export default Button
