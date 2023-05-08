import React, {useContext, useEffect} from 'react';
import './Header.scss';
import {ReactComponent as AddIcon} from './add.svg';
import {ReactComponent as DeleteIcon} from './delete.svg';
import {ReactComponent as EditIcon} from './edit.svg';
import Search from "../Search/Search";
import AppContext from "../../context/AppContext";

const Header = () => {
    const { handleAddNewNote, setIsTextareaActive, handleUpdateNote, currentNote} = useContext(AppContext);


    console.log(currentNote.note)

return (
        <div className="header">
            <button
                className={currentNote.note === "" ? 'disabled' :  ''}
                onClick={handleAddNewNote}
                disabled={currentNote.note === ""}
            >
                <AddIcon />
            </button>
            <button onClick={handleUpdateNote}><DeleteIcon /></button>
            <button onClick={() => setIsTextareaActive(true)}><EditIcon /></button>
            <Search className="search" />
        </div>
    );
};

export default Header;