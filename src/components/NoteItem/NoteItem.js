import React, {useContext, useEffect, useState} from 'react';
import './NoteItem.scss';
import AppContext from "../../context/AppContext";

const NoteItem = ({note}) => {
    const {showNote, currentNoteId, setIsTextareaDisable} = useContext(AppContext);
    const [noteTitle, setNoteTitle] = useState('');

    useEffect(() => {
        editNoteTitle();
    }, [note.note])

    const onNoteItemClick = () => {
        showNote(note.id);
        setIsTextareaDisable(false);

    }

    function editNoteTitle() {
        if (note.note) {
            if (note.note.length > 20) {
                setNoteTitle(note.note.slice(0, 20) + "...")
            } else setNoteTitle(note.note)
        } else setNoteTitle("New Note")
    }


    return (
        <>
            <div className={'noteItem' + (currentNoteId === note.id ? ' active' : '')} onClick={onNoteItemClick}>
                <h3>{noteTitle}</h3>
                <span>{note.date.toLocaleTimeString()}</span>
            </div>
            <hr />
        </>
    );
};

export default NoteItem;