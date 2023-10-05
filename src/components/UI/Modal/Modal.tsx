import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ModalProps } from 'modules/ModuleTypes'
import classes from './Modal.module.css'

const Backdrop = (props: ModalProps) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props: React.PropsWithChildren) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const portalElement = document.getElementById('overlays')

const Modal: React.FC<ModalProps> = (props) => {
  if (!portalElement) {
    // Handle the case where 'overlays' element is not found
    return null; 
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal
