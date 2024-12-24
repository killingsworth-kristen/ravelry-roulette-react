import "../css/HistoryCard.css"

export default function HistoryCard ({title, link, thumb}) {
    // const title = `title #`;
    // const link = "https://ravelry.com";

    return (
        <div className="history-card">
            <img className="pattern-thumb" src={thumb == null ? "placeholder link" : thumb} />
            <div className="history-card-text">
                <h3 className="pattern-name">{title}</h3>
                <a href={link} className="pattern-link-anchor"><h3 className="pattern-link-text">View on Ravelry</h3></a>
            </div>
        </div>
    )
}