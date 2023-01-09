import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 430,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0.5,
};

export default function MUIDeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    function handleDeleteList(event) {
        store.deleteMarkedList();
        store.unmarkListForDeletion();
    }
    function handleCloseModal(event) {
        store.unmarkListForDeletion();
    }

    let buttonStyle = { color:"white", fontWeight:'bold', fontFamily:'Raleway', backgroundColor:'#cb997e', 
        '&:hover':{ backgroundColor:'gray' }, margin:1 }

    return (
        <Modal
            open={store.listMarkedForDeletion !== null}
        >
            <Box sx={style}>
            <div className="modal-dialog">
                <header className="dialog-header">
                    Delete Playlist?
                </header>
                <div className="modal-center">
                    <div className="modal-center-content modal-text">
                        Are you sure you want to delete the "{name}" playlist?
                    </div>
                </div>
                <div id="confirm-cancel-container">
                    <Button
                        id="dialog-yes-button"
                        className="modal-button"
                        onClick={handleDeleteList}
                        sx={buttonStyle}
                    >Confirm</Button>
                    <Button
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCloseModal}
                        sx={buttonStyle}
                    >Cancel</Button>
                </div>
            </div>
            </Box>
        </Modal>
    );
}