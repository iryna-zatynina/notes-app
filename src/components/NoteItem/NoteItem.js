import React, {useEffect, useState} from 'react';
import './NoteItem.scss';

const NoteItem = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setDate(new Date())
    }, [])

    return (
        <div className="noteItem">
            <h3>New Note</h3>
            <span>{date.toLocaleTimeString()}</span>
            <span className="additional">No additional text</span>
        </div>
    );
};

export default NoteItem;