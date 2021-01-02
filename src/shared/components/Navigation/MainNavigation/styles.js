import styled from 'styled-components'

export const Button = styled.div`
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  cursor: pointer;

  span {
    display: block;
    width: 3rem;
    height: 2.5px;
    background: white;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const Title = styled.div`
  color: white;
  font-size: 1.8rem;
  a {
    text-decoration: none;
    color: white;
  }
`

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export const NavDrawer = styled.nav`
  height: 100%;
`
