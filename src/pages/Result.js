// import { useEffect, useState } from "react";

import "../css/Result.css";
import wheel from "../images/rav-roulette-wheel.svg";

import Spinner from "../components/Spinner.js";

export default function Result () {
    let result = JSON.parse(localStorage.getItem("historyArray"))[0];
    console.log(result);
    
    // TODO: Grab queryState from local storage and rerun query

    return (
        <>
        <div className="" id="result-output">
            <h2 className="big-text">You have landed on:</h2>
            {/* I could iframe rav link instead? */}
            <h3 className="result-pattern-name">{result.name} by {result.designer.name}</h3>
             <div className="result-pattern-link-container">
                <a href={"https://www.ravelry.com/patterns/library/" + result.permalink} target="_blank" rel="noopener noreferrer" className="result-pattern-link"><h3>View on Ravelery</h3></a>
            </div>
            <div className="result-pattern-thumb-container">
                <img className="result-pattern-thumb" src={result.first_photo.medium_url}/>
            </div>
           
            <div id="spin-again-container">
                <h3>Spin Again!</h3>
                <Spinner/>
                <a href="./"><button id="change-settings-btn">I want to change my settings...</button></a>
                {/* two buttons - use same params or select new parameters  */}
            </div>
        </div>
        </>
    )
}