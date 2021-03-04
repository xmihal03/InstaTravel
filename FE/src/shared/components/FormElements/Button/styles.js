import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// const PrimaryLink = PrimaryButton.withComponent('a');
const sharedStyle = css`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #ff0055;
  border-radius: 4px;
  background: #ff0055;
  color: white;
  cursor: pointer;
  margin-right: 1rem;
  text-decoration: none;
  display: inline-block;

  :focus {
    outline: none;
  }

  :hover,
  :active {
    background: #ff4382;
    border-color: #ff4382;
  }

  :disabled,
  :hover:disabled,
  :active:disabled {
    background: #ccc;
    color: #979797;
    border-color: #ccc;
    cursor: not-allowed;
  }

  ${({ inverse, danger, center }) =>
    (inverse &&
      css`
        background: transparent;
        color: #ff0055;

        :hover,
        :active {
          color: white;
          background: #ff0055;
        }
      `) ||
    (danger &&
      css`
        background: #830000;
        border-color: #830000;

        :hover,
        :active {
          background: #f34343;
          border-color: #f34343;
        }
      `) ||
    (center &&
      css`
        display: block;
        margin: 0 auto;
      `)}

  font-size: ${({ buttonsize }) =>
    (buttonsize === 'small' && '0.8rem') ||
    (buttonsize === 'big' && '1.5rem') ||
    'default'}
`

export const CustomAnchor = styled.a`
  ${sharedStyle}
`

export const CustomButton = styled.button`
  ${sharedStyle}
`

export const CustomRouterLink = styled(Link)`
  ${sharedStyle}
`
