import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Title, Button, Nav, NavDrawer } from './styles'
import MainHeader from '../MainHeader'
import NavLinks from '../NavLinks'
import SideDrawer from '../SideDrawer'
import Backdrop from '../../UIElements/Backdrop'

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavDrawer>
          <NavLinks />
        </NavDrawer>
      </SideDrawer>
      <MainHeader>
        <Button onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </Button>
        <Title>
          <Link to="/">YourPlaces</Link>
        </Title>
        <Nav>
          <NavLinks />
        </Nav>
      </MainHeader>
    </>
  )
}
export default MainNavigation
