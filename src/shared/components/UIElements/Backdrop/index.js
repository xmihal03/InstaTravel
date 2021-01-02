import React from 'react'
import ReactDOM from 'react-dom'

import { Wrapper } from './styles'

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <Wrapper onClick={props.onClick}></Wrapper>,
    document.getElementById('backdrop-hook')
  )
}

export default Backdrop
