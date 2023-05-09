import React, {useContext, useEffect} from 'react';
import './Header.scss';
import {ReactComponent as AddIcon} from './add.svg';
import {ReactComponent as DeleteIcon} from './delete.svg';
import {ReactComponent as EditIcon} from './edit.svg';
import Search from "../Search/Search";
import AppContext from "../../context/AppContext";

const Header = () => {
    const { handleAddNewNote, currentNote, handleDeleteNote, notes, handleUpdateNote} = useContext(AppContext);


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
                onClick={handleUpdateNote}
                disabled={notes.length === 0}
            >
                <EditIcon /> save note
            </button>
            <Search className="search" />
        </div>
    );
};

export default Header;