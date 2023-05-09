import React, {useContext, useEffect} from 'react';
import './Header.scss';
import {ReactComponent as AddIcon} from './add.svg';
import {ReactComponent as DeleteIcon} from './delete.svg';
import {ReactComponent as EditIcon} from './edit.svg';
import Search from "../Search/Search";
import AppContext from "../../context/AppContext";

const Header = ({textareaRef}) => {
    const { handleAddNewNote, currentNote, handleDeleteNote, notes, setIsTextareaDisable} = useContext(AppContext);


    const onClick = () => {
        setIsTextareaDisable(false)
        textareaRef.current?.focus();
    }

return (
        <div className="header">
            <button
                onClick={handleAddNewNote}
                disabled={currentNote.note === ''}
            >
                <AddIcon />
            </button>
            <button
                onClick={handleDeleteNote}
                disabled={notes.length === 0}
            >
                <DeleteIcon />
            </button>
            <button
                onClick={onClick}
                disabled={notes.length === 0}
            >
                <EditIcon />
            </button>
            <Search className="search" />
        </div>
    );
};

export default Header;