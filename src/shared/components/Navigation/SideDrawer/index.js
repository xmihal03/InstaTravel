import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { Drawer } from './styles'

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <Drawer onClick={props.onClick}>{props.children}</Drawer>
    </CSSTransition>
  )

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default SideDrawer
