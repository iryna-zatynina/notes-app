import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import './homePage.scss';

const HomePage = () => {
    return (
        <div className="homePage">
            <Header className="header"/>
            <Sidebar />
        </div>
    );
};

export default HomePage;