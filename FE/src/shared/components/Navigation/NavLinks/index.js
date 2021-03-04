import React, { useContext } from 'react'
import { AuthContext } from '../../../context/auth-context'
import { Links, CustomNavLink } from './styles'
const NavLinks = (props) => {
  const auth = useContext(AuthContext)
  return (
    <Links>
      <li>
        <CustomNavLink to="/" exact>
          ALL USERS
        </CustomNavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <CustomNavLink to="/u1/places">MY PLACES</CustomNavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <CustomNavLink to="/places/new">ADD PLACE</CustomNavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <CustomNavLink to="/auth">AUTHENTICATE</CustomNavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </Links>
  )
}

export default NavLinks
