import React, {useContext, useState} from 'react';
import './Search.scss';
import AppContext from "../../context/AppContext";

const Search = () => {
    const {searchNote} = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');

    function onSearchChange(e)  {
        setSearchValue(e.target.value)
        searchNote(e.target.value);
    }



    return (
        <div className="search">
            <input
                type="text"
                placeholder='Search'
                value={searchValue}
                onChange={onSearchChange}
            />
        </div>
    );
};

export default Search;