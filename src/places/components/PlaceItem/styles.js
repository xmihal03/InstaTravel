import styled from 'styled-components'

export const StyledLi = styled.li`
  margin: 1rem 0;
`

export const Info = styled.div`
  padding: 1rem;
  text-align: center;

  h2,
  h3,
  p {
    margin: 0 0 0.5rem 0;
  }
`

export const StyledImage = styled.div`
  width: 100%;
  height: 12.5rem;
  margin-right: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    height: 20rem;
  }
`

export const Actions = styled.div`
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ccc;

  button,
  a {
    margin: 0.5rem;
  }
`

export const Map = styled.div`
  height: 15rem;
  width: 100%;
`
