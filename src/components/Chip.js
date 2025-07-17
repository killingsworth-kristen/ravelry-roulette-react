import "../css/Chip.css";

export default function Chip ({text, required, field}) {
    const handleShowRequired = (e) => {
        const options = document.getElementsByClassName("required-options")[0];
        options.classList.toggle("hidden");
    }

    const handleReplaceRequired = (e) => {
        const id = e.target.id;
        const string = e.target.innerText;
        const chipText = document.getElementsByClassName("chip-text")[0];
        chipText.innerText = string;
        const options = document.getElementsByClassName("required-options")[0];
        options.classList.toggle("hidden");
    }

    return (
        <>
            <div className="chip" id={field} key={field}>
                <p className="chip-text">{text}</p>
                <button className={required ? "hidden" : "delete-chip-btn"}> X </button>
                <button onClick={handleShowRequired} className={required ? "required-chip-btn" : "hidden"}> + </button>
            </div>
            <div className={required ? "required-options hidden" : "hidden"}>
                {/* sort=created, name, randomize, popularity, projects, favorites, queues, date, rating, difficulty, yarn */}
                <p onClick={handleReplaceRequired} id="recently-popular">DEFAULT: Sort by="Hot Right Now"</p>
                <p onClick={handleReplaceRequired} id="created">Sort by="New to Ravelry"</p> 
                <p onClick={handleReplaceRequired} id="name">Sort by="Name (A-Z)"</p>
                <p onClick={handleReplaceRequired} id="randomize">Sort by="Random"</p>
                <p onClick={handleReplaceRequired} id="popularity">Sort by="Most Popular"</p>
                <p onClick={handleReplaceRequired} id="projects">Sort by="Most Projects"</p>
                <p onClick={handleReplaceRequired} id="favoruites">Sort by="Most Favorites"</p>
                <p onClick={handleReplaceRequired} id="queues">Sort by="Most Queued"</p>
                <p onClick={handleReplaceRequired} id="date">Sort by="Publication Date"</p>
                <p onClick={handleReplaceRequired} id="rating">Sort by="Rating"</p>
                <p onClick={handleReplaceRequired} id="difficulty">Sort by="Difficulty"</p>
                <p onClick={handleReplaceRequired} id="yarn">Sort by="Yarn Required"</p>
                <p onClick={handleReplaceRequired} id="best">Sort by="Best Match" (requires other parameters)</p> 
            </div>
        </>
    )
}