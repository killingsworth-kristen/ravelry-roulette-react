import React from "react";
import { useState, useEffect } from "react";

import "../css/History.css";

import HistoryCard from "../components/HistoryCard.js";

export default function History () {

    const [historyArray, setHistoryArray] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("historyArray") !== null) {
            setHistoryArray(JSON.parse(localStorage.getItem("historyArray")));
        }
    },[])

    const handleClearHistory = () => {
        localStorage.clear("historyArray");
        setHistoryArray([]);
    }

    const handleHistoryInfo = () => {
        const historyInfo = document.getElementById("history-info");
        historyInfo.classList.toggle("hidden");
    }

    return (
        <main>
            <h2 className="big-text">You have spun the wheel: {historyArray.length} times!</h2>

            <div className="text-container">
                <button className="clear-btn" onClick={handleClearHistory}>Clear History</button>
                <button className="info-btn" onClick={handleHistoryInfo}><img alt="information" src="/images/help_icon.svg" /></button>
            </div>
            <div id="history-info" className="hidden"> 
                <div id="history-info-header">
                    <h3>How is my data stored?</h3>
                    <button onClick={handleHistoryInfo} id="close-history-info-btn"> X </button>
                </div>
                <p><b><u>Your data is NOT stored on any database!</u></b> This website uses "local storage" in order to keep track of your history which saves to your web browser. If you use a private browser or "incognito" mode, your history will not persist after the private browser is closed. Clicking the "Clear History" button clears this web browser storage which can also be done manually with a broswer specific keyboard shortcut (for example Google Chrome's is Ctrl+Shift+Del/⌘+Shift+Del) or through your browser's settings menu.</p>
            </div>
            <div>
                {historyArray.map((history) => {
                    return (<HistoryCard key={history.name} name={history.name} link={"https://www.ravelry.com/patterns/library/" + history.permalink} thumb={history.first_photo.small_url}/>)
                })}
            </div>
           
        </main>
    )
}
