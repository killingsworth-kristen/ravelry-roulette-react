import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Chip from "../components/Chip.js";
import Spinner from "../components/Spinner.js";
import "../css/Home.css";

export default function Home ({queryState, setQueryState}) {
    const navigate = useNavigate();

    const [advOptHidden, setAdvOptHidden ] = useState(true);
    const [expandIcon, setExpandIcon ] = useState("+");
    const [tempCount, setTempCount] = useState(1);

    const handleAdvOptHidden = () => {
        if (advOptHidden === true) {
            setExpandIcon(<code>&#8212;</code>);
            setAdvOptHidden(false);
        } else {
            setExpandIcon("+")
            setAdvOptHidden(true);
        }
    }

    return (
        <main>   
            {/* <div className="search-param-container">
                <h3>Parameters</h3>
                <div className="chip-container">
                    <Chip text='DEFAULT: Sort by="Hot Right Now"' required={true} field="sort"/>
                </div>
            </div>
            <form className="search-form">
                <div className="submit-btn-container">
                    <div onClick={handleAdvOptHidden}>
                        <h4 className="adv-opt-h4">Add More Parameters {expandIcon}</h4>
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
                    </div>
                    TODO: figure out how loading screens work for suspense purposes
                </div>
            </form> */}
            <div className="submit-btn-container">
                <h4>Spin that wheel!</h4>
                <Spinner />
                {/* <button className="submit-btn" onClick={handleRavSearch} style={{backgroundImage:`url(${wheel})`}}></button> */}
            </div>
        </main>
    )
}
