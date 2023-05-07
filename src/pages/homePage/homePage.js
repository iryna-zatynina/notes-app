import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './homePage.scss';
import WorkSpace from "../../components/WorkSpace/WorkSpace";
import AppContext from "../../context/AppContext";

const HomePage = () => {
    const [textareaValue, setTextareaValue] = useState('');
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setDate(new Date())
    }, [textareaValue])


    return (
        <AppContext.Provider value={{textareaValue, setTextareaValue, date, setDate}}>
            <div className="homePage">
                <Header className="header"/>
                <Sidebar />
                <WorkSpace />
            </div>
        </AppContext.Provider>
    );
};

export default HomePage;