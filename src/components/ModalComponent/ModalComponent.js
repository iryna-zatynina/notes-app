import Modal from 'react-bootstrap/Modal';
import './ModalComponent.scss';
import {useContext} from "react";
import AppContext from "../../context/AppContext";

export default function ModalComponent(props) {
    const { handleGetNotes} = useContext(AppContext);

    const onClickHandler = () => {
        props.onHide();

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modalComponent"
        >
            <Modal.Body className="body">
                <h1>Welcome to Notes</h1>
                <button onClick={onClickHandler}>GET STARTED</button>
            </Modal.Body>
        </Modal>
    );
}

