import React from 'react';
import './Sidebar.scss';
import NoteItem from "../NoteItem/NoteItem";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <NoteItem />
        </div>
    );
};

export default Sidebar;