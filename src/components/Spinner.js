import { useNavigate } from "react-router-dom"; 

import wheel from "../images/rav-roulette-wheel.svg";
import "../css/Spinner.css";

export default function Spinner () {
    const navigate = useNavigate();
    const getRandomPage = async () => {
        let maxPage = await getPaginator();
        let randomPage = Math.floor(Math.random() * (maxPage - 1 + 1)) + 1;
        return randomPage;
    }

    const getPaginator = () => {
        const headers = new Headers();
        // const debugFunction = this.debugFunction;
        // This is the HTTP header that you need add in order to access api.ravelry.com with a read only API key
        // `btoa` will base 64 encode a string: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
        
        // TODO: send queryState to localStorage so that the same params can be used to run query again from result page
        headers.set('Authorization', 'Basic ' + btoa(process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD));
        
        return fetch("https://api.ravelry.com/patterns/search.json", { method: 'GET', headers: headers }).then(function(response) {
          return response.json();
        }).then(function(json) { 
          return json.paginator.last_page; 
        });
    }

    const handleRavSearch = async () => {
        navigate("/loading");
        let randomPage = await getRandomPage();

        const headers = new Headers();
        // const debugFunction = this.debugFunction;
        // This is the HTTP header that you need add in order to access api.ravelry.com with a read only API key
        // `btoa` will base 64 encode a string: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
        
        // TODO: send queryState to localStorage so that the same params can be used to run query again from result page
        headers.set('Authorization', 'Basic ' + btoa(process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD));

        let queryString = "https://api.ravelry.com/patterns/search.json?page=" + randomPage;
        
        return fetch(queryString, { method: 'GET', headers: headers }).then(function(response) {
          return response.json();
        }).then(function(json) { 
            
            let randomPatternNum = Math.floor(Math.random() * (json.patterns.length - 1 + 1)) + 1;
            console.log(randomPatternNum);
            let randomPattern = json.patterns[randomPatternNum-1]
            
            handleHistory(randomPattern);
            navigate("/result");
          // if (debugFunction) debugFunction(json);
          return json; 
        });
      };

    // THIS IS A TEMPORARY FUNCTION TO BUILD/TEST HISTORY FUNCTIONALITY
    const handleHistory = (patternObj) => {
        let count = 1;
        let historyArray = [];

        if (localStorage.getItem("historyArray") !== null) {
            count = JSON.parse(localStorage.getItem("historyArray")).length + 1;
        }

        console.log(localStorage.getItem("historyArray"));

        if (localStorage.getItem("historyArray") === null) {
            historyArray = localStorage.setItem("historyArray", JSON.stringify([patternObj]));
        } else {
            historyArray = JSON.parse(localStorage.getItem("historyArray"));
            historyArray = [patternObj].concat(historyArray);
            console.log(historyArray);
            localStorage.setItem("historyArray", JSON.stringify(historyArray));
        }     
    }

    return (
        <div className="submit-btn-container">
                <button className="submit-btn" onClick={handleRavSearch} style={{backgroundImage:`url(${wheel})`}}></button>
        </div>
    )
}