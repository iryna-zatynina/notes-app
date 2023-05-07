import React, {useContext} from 'react';
import './NoteItem.scss';
import AppContext from "../../context/AppContext";

const NoteItem = () => {
    const {date} = useContext(AppContext)

    return (
        <div className="noteItem">
            <h3>New Note</h3>
            <span>{date.toLocaleTimeString()}</span>
            <span className="additional">No additional text</span>
        </div>
    );
};

export default NoteItem;