import React from 'react'
import { Link } from 'react-router-dom'
import { Title, Button } from './styles'
import MainHeader from '../MainHeader'
import NavLinks from '../NavLinks'

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <Button>
        <span />
        <span />
        <span />
      </Button>
      <Title>
        <Link to="/">YourPlaces</Link>
      </Title>
      <NavLinks />
    </MainHeader>
  )
}
export default MainNavigation
