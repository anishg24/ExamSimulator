import React from "react";
import './BubbleRow.css';


const Bubble = ({letter, isSelected, number}) => {
    return (
        <label >
            <input type={"radio"}
                   name={`question-${number}`}
                   value={letter}
                   id={number}
                   className={`bubble ${isSelected ? "selected" : ""}`}
            />
            <span>{letter}</span>
        </label>
    )
}

export default Bubble;