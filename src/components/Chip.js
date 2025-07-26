import { useState } from "react";

import "../css/Chip.css";

import ChipOptions from "./ChipOptions.js";

export default function Chip ({text, required, field}) {
    const [expandIcon, setExpandIcon ] = useState("+");
    const [requiredHidden, setRequiredHidden] = useState(true);
    const [chipText, setChipText] = useState(text);

    const handleShowRequired = () => {
        if (requiredHidden === true) {
            setExpandIcon(<code>&#8212;</code>);
            setRequiredHidden(false);
        } else {
            setExpandIcon("+")
            setRequiredHidden(true);
        }
    }

    // const handleShowRequired = (e) => {
    //     const options = document.getElementsByClassName("required-options")[0];
    //     options.classList.toggle("hidden");
    // }

    // const handleReplaceRequired = (e) => {
    //     const id = e.target.id;
    //     const string = e.target.innerText;
    //     const chipText = document.getElementsByClassName("chip-text")[0];
    //     chipText.innerText = string;
    //     const options = document.getElementsByClassName("required-options")[0];
    //     options.classList.toggle("hidden");
    // }

    return (
        <>
            <div className="chip" id={field} key={field} onClick={handleShowRequired()}>
                <p className="chip-text">{text}</p>
                <button className={required ? "hidden" : "delete-chip-btn"}> X </button>
                <button className={required ? "required-chip-btn" : "hidden"}> {expandIcon} </button>
                <ChipOptions required={required} setChipText={setChipText}/>
            </div>
            
        </>
    )
}