import React, {useEffect, useRef, useState} from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './homePage.scss';
import WorkSpace from "../../components/WorkSpace/WorkSpace";
import AppContext from "../../context/AppContext";
import nextId from "react-id-generator";
import {addData, initDB, getStoreData, updateData} from "../../lib/db";

const HomePage = () => {
    const [textareaValue, setTextareaValue] = useState('');
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [isTextareaActive, setIsTextareaActive] = useState(true)
    const [currentNoteId, setCurrentNoteId] = useState('')
    const [currentNote, setCurrentNote] = useState('')


    useEffect(() => {
        setDate(new Date())

        const handleUpdateNote = async () => {
            try {
                if (currentNote.note !== textareaValue) {
                    const note = await updateData("notesStore", currentNoteId, {
                        note: textareaValue,
                        date: new Date(),
                        id: currentNoteId
                    });
                    setCurrentNote(note)
                    await handleGetNotes();
                }
            } catch (err) {
                throw err;
            }
        }
        handleUpdateNote()

    }, [textareaValue])


    window.onload = async () => {
        await initDB();
        const notes = await getStoreData("notesStore");
        setNotes(notes);

    };

    const showWholeNote = (id) => {
        notes.forEach((n) => {
            if (n.id === id) {
                setTextareaValue(n.note)
                setDate(n.date)
                setCurrentNoteId(n.id)
                setCurrentNote(n)
            }
        })
    };

    const id = nextId();

    const handleAddNewNote = async () => {
        setIsTextareaActive(true);
        setCurrentNoteId(id);
        setTextareaValue("");
        try {
            const note = await addData("notesStore", { note: "", date: new Date() , id: id });
            setCurrentNote(note)
            await handleGetNotes();
        } catch (err) {
            throw err;
        }
    };

    const handleGetNotes = async () => {
        const notes = await getStoreData("notesStore");
        setNotes(notes);
    };


    return (
        <AppContext.Provider
            value={{textareaValue, setTextareaValue,
                date, setDate, handleAddNewNote, showNote: showWholeNote,
                setIsTextareaActive, currentNoteId, currentNote}}
        >
            <div className="homePage">
                <Header className="header"/>
                <Sidebar notes={notes}/>
                <WorkSpace isTextareaActive={isTextareaActive}/>
            </div>
        </AppContext.Provider>
    );
};

export default HomePage;