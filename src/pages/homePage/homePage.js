import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './homePage.scss';
import WorkSpace from "../../components/WorkSpace/WorkSpace";
import AppContext from "../../context/AppContext";
import nextId from "react-id-generator";
import {addData, initDB, getStoreData} from "../../lib/db";

const HomePage = () => {
    const [textareaValue, setTextareaValue] = useState('');
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState('');


    useEffect(() => {
        setDate(new Date())
    }, [textareaValue])


    window.onload = async () => {
        await initDB();
        const notes = await getStoreData("notesStore");
        setNotes(notes);
        console.log(notes)
    };

    const showNote = (id) => {
        notes.forEach((n) => {
            if (n.id === id) {
                setTextareaValue(n.note)
                setDate(n.date)
            }
        })
    };

    const id = nextId();

    const handleAddNewNote = async () => {
        try {
            await addData("notesStore", { note: "", date: date, id: id });
            await handleGetNotes();
        } catch (err) {
            throw err;
        }
    };


    const handleUpdateNote = async () => {
        try {
            await addData("notesStore", { note: "", date: date, id: id });
            await handleGetNotes();
        } catch (err) {
            throw err;
        }
    }

    const handleGetNotes = async () => {
        const notes = await getStoreData("notesStore");
        setNotes(notes);
    };

    return (
        <AppContext.Provider value={{textareaValue, setTextareaValue, date, setDate,  handleAddNewNote, showNote}}>
            <div className="homePage">
                <Header className="header"/>
                <Sidebar notes={notes}/>
                <WorkSpace />
            </div>
        </AppContext.Provider>
    );
};

export default HomePage;