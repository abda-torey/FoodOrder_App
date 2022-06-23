import classes from './Modal.module.css';
import { Fragment } from 'react';
import react from 'react';
import ReactDom from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}
const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div>
                {props.children}
            </div>
        </div>
    )
}
const portalElement = document.getElementById('overlays')

const Modal = props => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClick = {props.onClose} />,portalElement)}
            {ReactDom.createPortal(<ModalOverlay>
                {props.children}
            </ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal