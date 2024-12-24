import React from "react";
import { useState, useEffect } from "react";

import "../css/History.css";

import HistoryCard from "../components/HistoryCard.js";

export default function History ({title, link}) {
    // const [count, setSpinCount] = useState(0);
    const testArray = [{title: `test title 1`, link: 'link', thumb: 'thumbnail-link'},{title: `test title 3`, link: 'link', thumb: 'thumbnail-link'},{title: `test title 3`, link: 'link', thumb: 'thumbnail-link'}]
    useEffect(() => {
        // TODO: 
        // get results from local storage
        // setState of count
        // map through localStorage results and create history list
    },[])

    const handleClearHistory = () => {
        // TODO:
        // clear local storage
        // (optional) pop-up "are you sure? This action cannot be reversed"
    }

    return (
        <main>
            <h2 className="big-text">You have spun the wheel: {testArray.length} times!</h2>

            <div className="text-container">
                <button className="clear-btn">Clear History</button>
                
                {/* map through local storage object */}
                {/* TODO: Create history card/list/thing component */}
            </div>
            <div>
                {testArray.map((history) => {
                    return (<HistoryCard title={history.title} link={history.link} thumb={history.thumb}/>)
                })}
            </div>
        </main>
    )
}
