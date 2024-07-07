import background from "../images/rav-roulette-wheel.svg";
import "../css/Spinner.css";

export default function Spinner () {
    return (
        <>
            <div className="loader" style={{ backgroundImage: `url(${background})` }}></div>
        </>
    )
}