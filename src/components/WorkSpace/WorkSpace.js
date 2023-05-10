import React, {forwardRef, useContext} from 'react';
import './WorkSpace.scss';
import AppContext from "../../context/AppContext";

const WorkSpace = forwardRef((props, ref) => {
    const {textareaValue, setTextareaValue, date, isTextareaDisable, handleUpdateNote} = useContext(AppContext);

    const onChange = (e) => {
        setTextareaValue(e.target.value)
        handleUpdateNote(e.target.value)
    }

    return (
        <div className="workSpace">
            <p className="date">{date.toDateString()} {date.toLocaleTimeString()}</p>
            <textarea
                autoFocus
                className="textarea"
                value={textareaValue}
                onChange={onChange}
                disabled={isTextareaDisable}
                ref={ref}
            >
            </textarea>
        </div>
    );
});

export default WorkSpace;