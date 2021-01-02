import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import Backdrop from '../Backdrop'
import { Content, Footer, CustomModal, Header } from './styles'

const ModalOverlay = (props) => {
  const content = (
    <CustomModal customclass={props.className} style={props.style}>
      <Header customclass={props.headerClass}>
        <h2>{props.header}</h2>
      </Header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <Content customclass={props.contentClass}>{props.children}</Content>
        <Footer customclass={props.footerClass}>{props.footer}</Footer>
      </form>
    </CustomModal>
  )
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200}>
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  )
}
export default Modal
