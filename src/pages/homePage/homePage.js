import React, {useEffect, useRef, useState} from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './homePage.scss';
import WorkSpace from "../../components/WorkSpace/WorkSpace";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import AppContext from "../../context/AppContext";
import nextId from "react-id-generator";
import {addData, initDB, getStoreData, updateData, deleteData} from "../../lib/db";

const HomePage = () => {
    const [notes, setNotes] = useState('');
    const [sortedNotes, setSortedNotes] = useState('')
    const [textareaValue, setTextareaValue] = useState('');
    const [date, setDate] = useState(new Date());
    const [currentNoteId, setCurrentNoteId] = useState('')
    const [currentNote, setCurrentNote] = useState('')
    const [modalShow, setModalShow] = useState(true);
    const [isTextareaDisable, setIsTextareaDisable] = useState(false)
    const [searchValue, setSearchValue] = useState();
    const id = nextId();
    const textareaRef = useRef();

    useEffect( () => {
        setDate(new Date())
    }, [textareaValue])


    window.onload = async () => {
        await initDB();
        const notes = await getStoreData("notesStore");
        setSortedNotes(notes);
        setNotes(notes);
    };

    const showWholeNote = (id) => {
        sortedNotes.forEach((n) => {
            if (n.id === id) {
                setTextareaValue(n.note)
                setDate(n.date)
                setCurrentNoteId(n.id)
                setCurrentNote(n)
            }
        })
    };

    const handleAddNewNote = async () => {
        setIsTextareaDisable(false);
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
        setSortedNotes(notes);
    };

    const handleUpdateNote = async (value) => {
        try {
            if (currentNote.note !== value) {
                const note = await updateData("notesStore", currentNoteId, {
                    note: value,
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

    const handleDeleteNote = async () => {
        try {
            await deleteData("notesStore", currentNoteId);
            await handleGetNotes();
            setTextareaValue('')
        } catch (err) {
            throw Error
        }
    };

    const searchNote = (term) => {
        if (term.length === 0) {
            setSortedNotes(notes);
        }

        const filteredNotes = notes.filter(item => {
            return item.note.indexOf(term) !== -1
        })
        setSortedNotes(filteredNotes)
    }


    return (
        <AppContext.Provider
            value={{textareaValue, setTextareaValue,
                date, notes, setDate, handleAddNewNote, showNote: showWholeNote,
                currentNoteId, currentNote, handleDeleteNote, handleGetNotes,
                handleUpdateNote, searchNote, searchValue, setSearchValue,
                isTextareaDisable, setIsTextareaDisable}}
        >
            <div>
                <div className="homePage">
                    <Header textareaRef={textareaRef} className="header"/>
                    <Sidebar notes={sortedNotes}/>
                    <WorkSpace ref={textareaRef}/>
                </div>
                <ModalComponent show={modalShow}
                                onHide={() => setModalShow(false)}/>
            </div>
        </AppContext.Provider>
    );
};

export default HomePage;