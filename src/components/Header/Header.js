import React, {useContext, useEffect} from 'react';
import './Header.scss';
import {ReactComponent as AddIcon} from './add.svg';
import {ReactComponent as DeleteIcon} from './delete.svg';
import {ReactComponent as EditIcon} from './edit.svg';
import Search from "../Search/Search";
import AppContext from "../../context/AppContext";

const Header = () => {
    const { handleAddNewNote} = useContext(AppContext);



return (
        <div className="header">
            <button onClick={handleAddNewNote}>
                <AddIcon />
            </button>
            <button>
                <AddIcon />
            </button>
            <button><DeleteIcon /></button>
            <button><EditIcon /></button>
            <Search className="search" />
        </div>
    );
};

export default Header;