import React from "react";
import { useState } from "react";

import wheel from "../images/rav-roulette-wheel.svg";
import "../css/Home.css";

export default function Home () {

    const [advOptHidden, setAdvOptHidden ] = useState(true);
    const [expandIcon, setExpandIcon ] = useState("+");

    const handleAdvOptHidden = () => {
        console.log("clicked")
        if (advOptHidden === true) {
            setExpandIcon(<code>&#8212;</code>);
            setAdvOptHidden(false);
        } else {
            setExpandIcon("+")
            setAdvOptHidden(true);
        }
    }

    const handleRavSearch = function() {
        const headers = new Headers();
        // const debugFunction = this.debugFunction;
        // This is the HTTP header that you need add in order to access api.ravelry.com with a read only API key
        // `btoa` will base 64 encode a string: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
        
        headers.set('Authorization', 'Basic ' + btoa(process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD));
        
        return fetch("https://api.ravelry.com/patterns/search.json", { method: 'GET', headers: headers }).then(function(response) {
          return response.json();
        }).then(function(json) { 
            console.log(json);
          // if (debugFunction) debugFunction(json);
          return json; 
        });
      };

    return (
        <main>
            <form className="search-form">
                <div className="submit-btn-container">
                    <div onClick={handleAdvOptHidden}>
                        <h4 className="adv-opt-h4">Advanced Options {expandIcon}</h4>
                    </div>
                    <div className={advOptHidden === true ? "hidden advanced-options" : "advanced-options"}>
                        <label htmlfor="keywords">Keywords:</label>
                        <input type="text" id="keywords" name="keywords" style={{marginBottom:"16px"}}></input><br/>

                        <label htmlfor="craft">Craft (Select all that apply):</label>
                        <select id="craft" name="craft" multiple className="select-multi">
                            <option value={"crochet"}>Crochet</option>
                            <option value={"knitting"}>Knitting</option>
                            <option value={"machine-knitting"}>Machine Knitting</option>
                            <option value={"loom-knitting"}>Loom Knitting</option>
                        </select><br/>

                        <label htmlfor="availabilty">Availabilty  (Select all that apply):</label>
                        <select id="availabilty" name="availabilty" multiple className="select-multi">
                            <option value={"free"}>Free</option>
                            <option value={"online"}>Purchase Online</option>
                            <option value={"inprint"}>Purchase in Print</option>
                            <option value={"ravelry"}>Ravelry Download</option>
                            <option value={"discontinued"}>Discontinued</option>
                        </select><br/>

                        <label htmlfor="photos">Must have photos!</label>
                        <input type="checkbox" id="photos" name="photos"></input><br/>
                    </div> {/* advanced-options */}

                    <h4>Spin that wheel!</h4>
                    <button className="submit-btn" onSubmit={handleRavSearch} style={{backgroundImage:`url(${wheel})`}}></button>
                </div> {/* submit-btn-container */}
            </form>
        </main>
    )
}
