import React, {useContext, useEffect, useState} from 'react';
import './NoteItem.scss';
import AppContext from "../../context/AppContext";

const NoteItem = ({note}) => {
    const {showNote} = useContext(AppContext);
    const [noteTitle, setNoteTitle] = useState('');

    useEffect(() => {
        if (note.note) {
            if (note.note.length > 20) {
                setNoteTitle(note.note.slice(0, 20) + "...")
            } else setNoteTitle(note.note)
        } else setNoteTitle("New Note")
    }, [note.note])

    const onNoteItemClick = () => {
        showNote(note.id)
    }

    return (
        <div className="noteItem" onClick={onNoteItemClick}>
            <h3>{noteTitle}</h3>
            <span>{note.date.toLocaleTimeString()}</span>
            <span className="additional">No additional text</span>
        </div>
    );
};

export default NoteItem;