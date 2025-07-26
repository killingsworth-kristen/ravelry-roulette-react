import "../css/HistoryCard.css"

export default function HistoryCard ({name, link, thumb}) {
    // const title = `title #`;
    // const link = "https://ravelry.com";
    return (
        <div className="history-card">
            <img className="pattern-thumb" src={thumb == null ? "placeholder link" : thumb} alt="thumbnail imported from Ravelry; description not available"/>
            <div className="history-card-text">
                <h3 className="pattern-name">{name}</h3>
                <a 
                    href={link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pattern-link-anchor">
                        <h3 className="pattern-link-text">View on Ravelry</h3>
                </a>
            </div>
        </div>
    )
}