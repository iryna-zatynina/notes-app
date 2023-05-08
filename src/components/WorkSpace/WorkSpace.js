import React, { useContext} from 'react';
import './WorkSpace.scss';
import AppContext from "../../context/AppContext";

const WorkSpace = ({isTextareaActive} ) => {
    const {date, textareaValue, setTextareaValue} = useContext(AppContext);

    return (
        <div className="workSpace">
            <p className="date">{date.toDateString()} {date.toLocaleTimeString()}</p>
            {isTextareaActive &&
                <textarea
                    autoFocus
                    className="textarea"
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                >
            </textarea>}
        </div>
    );
};

export default WorkSpace;