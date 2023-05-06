import React from 'react';
import './Header.scss';
import {ReactComponent as AddIcon} from './add.svg';
import {ReactComponent as DeleteIcon} from './delete.svg';
import {ReactComponent as EditIcon} from './edit.svg';

const Header = () => {
    return (
        <div className="header">
            <button><AddIcon /></button>
            <button><DeleteIcon /></button>
            <button><EditIcon /></button>
        </div>
    );
};

export default Header;