import React, {useState} from "react";
import "./BubbleRow.css";
import Bubble from "./Bubble";

const BubbleRow = ({number}) => {
    const [selectedChoice, setChoice] = useState(null);
    const choices = ["A", "B", "C", "D"];
    const handleOnChange = e => {
        console.log(`${number}. ${e.target.value}`);
        setChoice(e.target.value);
    }

    return (
        <div onChange={e => handleOnChange(e)}>
            <span className={"question-number"}>{number}.</span>
            {choices.map(choice => <Bubble letter={choice}
                                           key={choice}
                                           isSelected={selectedChoice === choice}
                                           number={number}
                                    />)}
        </div>

    )

}

export default BubbleRow;