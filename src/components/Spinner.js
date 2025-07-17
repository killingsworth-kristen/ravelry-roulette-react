import wheel from "../images/rav-roulette-wheel.svg";
import "../css/Spinner.css";





export default function Spinner () {
    const handleRavSearch = function() {
        const headers = new Headers();
        // const debugFunction = this.debugFunction;
        // This is the HTTP header that you need add in order to access api.ravelry.com with a read only API key
        // `btoa` will base 64 encode a string: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
        
        // TODO: Add ENV file for local dev on this computer bc not in git as is proper
        // TODO: send queryState to localStorage so that the same params can be used to run query again from result page
        headers.set('Authorization', 'Basic ' + btoa(process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD));
        
        return fetch("https://api.ravelry.com/patterns/search.json", { method: 'GET', headers: headers }).then(function(response) {
          return response.json();
        }).then(function(json) { 
            console.log(json);
          // if (debugFunction) debugFunction(json);
          return json; 
        });
      };
    
    // THIS IS A TEMPORARY FUNCTION TO BUILD/TEST HISTORY FUNCTIONALITY
    const handleHistoryTest = () => {
        let count = 1;
        let historyArray = [];

        if (localStorage.getItem("historyArray") !== null) {
            count = JSON.parse(localStorage.getItem("historyArray")).length + 1;
        }

        const testObj = [{title: `test title ${count}`, link: 'https://ravelry.com', thumb: 'https://placehold.co/400x400'}];

        console.log(localStorage.getItem("historyArray"));

        if (localStorage.getItem("historyArray") === null) {
            historyArray = localStorage.setItem("historyArray", JSON.stringify(testObj));
        } else {
            historyArray = JSON.parse(localStorage.getItem("historyArray"));
            historyArray = historyArray.concat(testObj);
            console.log(historyArray);
            localStorage.setItem("historyArray", JSON.stringify(historyArray));
        }     
    }

    return (
        <div className="submit-btn-container">
                <button className="submit-btn" onClick={handleHistoryTest} style={{backgroundImage:`url(${wheel})`}}></button>
        </div>
    )
}