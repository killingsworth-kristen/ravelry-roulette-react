import { useState } from "react";

export default function ChipOptions ({required, setChipText}) {
    // const [optionText, setOptionText] = useState(text);

    const handleReplaceText = (e) => {
        let newText = e.target.innerText;
        setChipText(newText);
    }

    return (
        <>
            <div className={required ? "required-options hidden" : "hidden"}>
                {/* sort=created, name, randomize, popularity, projects, favorites, queues, date, rating, difficulty, yarn */}
                <p className="first-chip-list" onClick={handleReplaceText} id="recently-popular">DEFAULT: Sort by="Hot Right Now"</p>
                <p onClick={handleReplaceText} id="created">Sort by="New to Ravelry"</p> 
                <p onClick={handleReplaceText} id="name">Sort by="Name (A-Z)"</p>
                <p onClick={handleReplaceText} id="randomize">Sort by="Random"</p>
                <p onClick={handleReplaceText} id="popularity">Sort by="Most Popular"</p>
                <p onClick={handleReplaceText} id="projects">Sort by="Most Projects"</p>
                <p onClick={handleReplaceText} id="favoruites">Sort by="Most Favorites"</p>
                <p onClick={handleReplaceText} id="queues">Sort by="Most Queued"</p>
                <p onClick={handleReplaceText} id="date">Sort by="Publication Date"</p>
                <p onClick={handleReplaceText} id="rating">Sort by="Rating"</p>
                <p onClick={handleReplaceText} id="difficulty">Sort by="Difficulty"</p>
                <p onClick={handleReplaceText} id="yarn">Sort by="Yarn Required"</p>
                <p className="last-chip-list" onClick={handleReplaceText} id="best">Sort by="Best Match" (requires other parameters)</p> 
            </div>
        </>
    )
}