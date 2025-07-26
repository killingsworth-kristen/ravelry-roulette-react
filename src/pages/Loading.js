import "../css/Loading.css"
import wheel from "../images/rav-roulette-wheel.svg";

export default function Loading () {
    return (
        <>
            <div className="loading-animation" id="loader">
                <button className="loading-spinner" style={{backgroundImage:`url(${wheel})`}}></button>
            </div>
        </>
    )
}