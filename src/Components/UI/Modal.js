import ReactD0M from 'react-dom';
import { Fragment } from 'react';
import classes from './Modal.module.css';

function Backdrop(props){
    return <div className={classes.backdrop} onClick={props.onClose}> </div>
};

function ModalOverlay(props){
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

function Modal(props){

    return<Fragment>
        {ReactD0M.createPortal(< Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactD0M.createPortal(< ModalOverlay>{props.children}</ ModalOverlay>, portalElement)}
    </Fragment>

};

export default Modal;