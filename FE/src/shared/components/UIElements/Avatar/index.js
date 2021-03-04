import React from 'react'

import { Wrapper } from './styles'

const Avatar = ({ image, alt }) => {
  return (
    <Wrapper>
      <img src={image} alt={alt} />
    </Wrapper>
  )
}

export default Avatar
