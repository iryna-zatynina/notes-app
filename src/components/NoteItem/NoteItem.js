import React, {useCallback, useContext, useEffect, useState} from 'react';
import './NoteItem.scss';
import AppContext from "../../context/AppContext";

const NoteItem = ({note}) => {
    const {showNote, currentNoteId, setIsTextareaDisable, setIsSidebarOpened} = useContext(AppContext);
    const [noteTitle, setNoteTitle] = useState('');

    const editNoteTitle = useCallback(() => {
        if (note.note) {
            if (note.note.length > 20) {
                setNoteTitle(note.note.slice(0, 15) + "...")
            } else setNoteTitle(note.note)
        } else setNoteTitle("New Note")
    }, [note.note])

    useEffect(() => {
        editNoteTitle();
    }, [note.note, editNoteTitle])

    const onNoteItemClick = () => {
        showNote(note.id);
        setIsTextareaDisable(false);
        setIsSidebarOpened(false)
    }


    return (
        <>
            <div className={'noteItem' + (currentNoteId === note.id ? ' active' : '')} onClick={onNoteItemClick}>
                <h4>{noteTitle}</h4>
                <span>{note.date.toLocaleTimeString()}</span>
            </div>
            <hr/>
        </>
    );
};

export default NoteItem;