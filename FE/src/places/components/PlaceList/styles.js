import styled, { css } from 'styled-components'

export const StyledUl = styled.ul`
  list-style: none;
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  max-width: 40rem;

  ${({ customClass }) =>
    customClass === 'center' &&
    css`
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`
