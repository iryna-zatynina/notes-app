import React, {useContext} from 'react';
import './Sidebar.scss';
import NoteItem from "../NoteItem/NoteItem";
import AppContext from "../../context/AppContext";

const Sidebar = ({notes}) => {
    const {isSidebarOpened} = useContext(AppContext);
    return (
        <div className={"sidebar" + (isSidebarOpened ? " opened" : "")}>
            {notes.length !== 0 ? notes.map((n) => <NoteItem key={n.id} note={n}/>) : <span className="empty">No Notes</span>}
        </div>
    );
};

export default Sidebar;