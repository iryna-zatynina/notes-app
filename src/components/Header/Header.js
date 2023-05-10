import React, {useContext} from 'react';
import './Header.scss';
import {ReactComponent as AddIcon} from '../../icons/add.svg';
import {ReactComponent as DeleteIcon} from '../../icons/delete.svg';
import {ReactComponent as EditIcon} from '../../icons/edit.svg';
import {ReactComponent as Arrow} from '../../icons/arrow.svg';
import Search from "../Search/Search";
import AppContext from "../../context/AppContext";

const Header = () => {
    const {
        handleAddNewNote,
        currentNote,
        sortedNotes,
        setIsTextareaDisable,
        textareaRef,
        setModalShow,
        setIsSidebarOpened,
        isSidebarOpened
    } = useContext(AppContext);

    const onEditClick = () => {
        setIsTextareaDisable(false)
        textareaRef.current?.focus();
    }

    return (
        <div className="header">
            <button
                className="arrow"
                onClick={() => setIsSidebarOpened(!isSidebarOpened)}
            >
                <Arrow className={isSidebarOpened ? "turn" : ""}/>
            </button>
            <button
                onClick={handleAddNewNote}
                disabled={currentNote.note === ''}
            >
                <AddIcon/>
            </button>
            <button
                onClick={() => setModalShow(true)}
                disabled={sortedNotes.length === 0}
            >
                <DeleteIcon/>
            </button>
            <button
                onClick={onEditClick}
                disabled={sortedNotes.length === 0}
            >
                <EditIcon/>
            </button>
            <Search className="search"/>
        </div>
    );
};

export default Header;