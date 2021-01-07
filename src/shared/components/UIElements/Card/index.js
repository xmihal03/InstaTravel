import React from 'react'

import { Wrapper } from './styles'

const Card = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

export default Card
