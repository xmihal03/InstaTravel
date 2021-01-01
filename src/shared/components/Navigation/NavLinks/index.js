import React from 'react'

import { Links, CustomNavLink } from './styles'
const NavLinks = (props) => {
  return (
    <Links>
      <li>
        <CustomNavLink to="/" exact>
          ALL USERS
        </CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/u1/places">MY PLACES</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/places/new">ADD PLACE</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="/auth">AUTHENTICATE</CustomNavLink>
      </li>
    </Links>
  )
}

export default NavLinks
