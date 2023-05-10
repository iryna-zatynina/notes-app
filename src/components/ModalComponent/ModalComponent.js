import Modal from 'react-bootstrap/Modal';
import './ModalComponent.scss';
import {useContext} from "react";
import AppContext from "../../context/AppContext";

export default function ModalComponent(props) {
    const {handleDeleteNote} = useContext(AppContext);

    const onClickHandler = () => {
        props.onHide();
        handleDeleteNote();
    }

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modalComponent"
        >
            <Modal.Body className="body">
                <h1>Delete?</h1>
                <button onClick={onClickHandler}>Yes</button>
            </Modal.Body>
        </Modal>
    );
}

