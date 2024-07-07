import React from "react";

import "../Util"

export default function Home () {

    const url = "https://api.ravelry.com"

    const handleRavSearch = function() {
        const headers = new Headers();
        // const debugFunction = this.debugFunction;
        // This is the HTTP header that you need add in order to access api.ravelry.com with a read only API key
        // `btoa` will base 64 encode a string: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
        
        headers.set('Authorization', 'Basic ' + btoa(process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD));
        
        return fetch("https://api.ravelry.com/pattern_sources/search.json", { method: 'GET', headers: headers }).then(function(response) {
            console.log(response);
          return response.json();
        }).then(function(json) { 
            console.log(json);
          // if (debugFunction) debugFunction(json);
          return json; 
        });
      };

    handleRavSearch();

    return (
        <main>
            <button onClick={handleRavSearch()}>I'm Feeling Lucky!</button>
        </main>
    )
}
