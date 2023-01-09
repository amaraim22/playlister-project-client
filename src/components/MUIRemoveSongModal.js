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

export default function MUIRemoveSongModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleConfirmRemoveSong () {
        store.addRemoveSongTransaction();
    }

    function handleCancelRemoveSong () {
        store.hideModals();
    }
    
    let songTitle = "";
    if (store.currentSong) {
        songTitle = store.currentSong.title;
    }

    let buttonStyle = { color:"white", fontWeight:'bold', fontFamily:'Raleway', backgroundColor:'#cb997e', 
        '&:hover':{ backgroundColor:'gray' }, margin:1 }

    return (
        <Modal
            open={store.currentSong !== null}
        >
            <Box sx={style}>
            <div className="modal-dialog">
                <header className="dialog-header">
                    Remove Song?
                </header>
                <div className="modal-center">
                    <div className="modal-center-content modal-text">
                        Are you sure you want to remove "{songTitle}" from the playlist?
                    </div>
                </div>
                <div id="confirm-cancel-container">
                    <Button
                        id="dialog-yes-button"
                        className="modal-button"
                        onClick={handleConfirmRemoveSong}
                        sx={buttonStyle}
                    >Confirm</Button>
                    <Button
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCancelRemoveSong}
                        sx={buttonStyle}
                    >Cancel</Button>
                </div>
            </div>
            </Box>
        </Modal>
    );
}