import React from "react";
import PropTypes from 'prop-types';
import { Modal,ModalHeader,ModalBody,Button } from "react-bootstrap";

import '../Style/Components.css'

function ModalWindow(props) {
    const show = props.show
    const oneEvent = props.oneEvent

    function CloseModal() {
        props.closeModal()
    }
    
    return (
        <Modal show={show}>
            <ModalHeader>
                <div></div>
                {oneEvent.theme}</ModalHeader>
            <ModalBody>
                {oneEvent}
            </ModalBody>
            <Modal.Footer>
                <Button onClick={CloseModal}>
                    Close
                </Button>
                
            </Modal.Footer>
        </Modal>
    )
}

ModalWindow.propTypes = {
    show: PropTypes.bool,
    closeModal: PropTypes.func.isRequired
}

export default ModalWindow