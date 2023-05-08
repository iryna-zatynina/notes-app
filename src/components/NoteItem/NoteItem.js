import React, {useContext, useEffect, useState} from 'react';
import './NoteItem.scss';
import AppContext from "../../context/AppContext";

const NoteItem = () => {
    const {date, textareaValue} = useContext(AppContext)
    const [noteTitle, setNoteTitle] = useState('');

    useEffect(() => {
        if (textareaValue) {
            if (textareaValue.length > 20) {
                setNoteTitle(textareaValue.slice(0, 20) + "...")
            } else setNoteTitle(textareaValue)
        } else setNoteTitle("New Note")
    }, [textareaValue])

    return (
        <div className="noteItem">
            <h3>{noteTitle}</h3>
            <span>{date.toLocaleTimeString()}</span>
            <span className="additional">No additional text</span>
        </div>
    );
};

export default NoteItem;