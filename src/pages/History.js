import React from "react";
import { useState, useEffect } from "react";

import "../css/History.css";

export default function History () {
    const [count, setCount] = useState(0);

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
            <h2 className="big-text">You have spun the wheel: {count} times!</h2>

            <div className="text-container">
                <button className="clear-btn">Clear History</button>
                {/* map through local storage object */}
                {/* TODO: Create history card/list/thing component */}
            </div>
        </main>
    )
}
