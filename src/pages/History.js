import React from "react";
import { useState, useEffect } from "react";

import "../css/History.css";

import HistoryCard from "../components/HistoryCard.js";

export default function History () {

    const [historyArray, setHistoryArray] = useState([]);

    // const [count, setSpinCount] = useState(0);
    const testArray = [{title: `test title 1`, link: 'link', thumb: 'thumbnail-link'},{title: `test title 3`, link: 'link', thumb: 'thumbnail-link'},{title: `test title 3`, link: 'link', thumb: 'thumbnail-link'}]
    useEffect(() => {
        if (localStorage.getItem("historyArray") !== null) {
            setHistoryArray(JSON.parse(localStorage.getItem("historyArray")));
        }
    },[])

    const handleClearHistory = () => {
        localStorage.clear("historyArray");
        setHistoryArray([]);
    }

    return (
        <main>
            <h2 className="big-text">You have spun the wheel: {historyArray.length} times!</h2>

            <div className="text-container">
                <button className="clear-btn" onClick={handleClearHistory}>Clear History</button>
                
                {/* map through local storage object */}
                {/* TODO: Create history card/list/thing component */}
            </div>
            <div>
                {historyArray.map((history) => {
                    return (<HistoryCard key={history.title} title={history.title} link={history.link} thumb={history.thumb}/>)
                })}
            </div>
        </main>
    )
}
