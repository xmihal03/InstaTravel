import React from 'react'
import ReactDOM from 'react-dom'

import { Drawer } from './styles'

const SideDrawer = (props) => {
  const content = <Drawer>{props.children}</Drawer>

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default SideDrawer
