import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({ show, setShow, userName, handleDeleteUser }) {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure</Modal.Title>
                </Modal.Header>
                <Modal.Body>You want to delete user { userName }</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                    <Button variant="danger" onClick={ () => handleDeleteUser() }>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;