import React from 'react';
import './Sidebar.scss';
import NoteItem from "../NoteItem/NoteItem";

const Sidebar = ({notes}) => {

    return (
        <div className="sidebar">
            {notes.length !== 0 ? notes.map((n) => <NoteItem key={n.id} note={n}/>) : <span className="empty">No Notes</span>}

        </div>
    );
};

export default Sidebar;