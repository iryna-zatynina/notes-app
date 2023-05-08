import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './homePage.scss';
import WorkSpace from "../../components/WorkSpace/WorkSpace";
import AppContext from "../../context/AppContext";
import nextId from "react-id-generator";
import {addData, initDB} from "../../lib/db";

const HomePage = () => {
    const [textareaValue, setTextareaValue] = useState('');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setDate(new Date())
    }, [textareaValue])

    window.onload = async () => {
        await initDB();
    };

    const id = nextId();

    const handleAddData = async () => {
        try {
            await addData("notesStore", { note: textareaValue, date: date, id: id });
        } catch (err) {
            throw err;
        }
    };

    return (
        <AppContext.Provider value={{textareaValue, setTextareaValue, date, setDate, handleAddData}}>
            <div className="homePage">
                <Header className="header"/>
                <Sidebar />
                <WorkSpace />
            </div>
        </AppContext.Provider>
    );
};

export default HomePage;