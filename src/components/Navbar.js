import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/Navbar.css';

export default function Navbar () {
    const navigate = useNavigate()
    let temp = window.location.pathname;
    const [currentPath, setCurrentPath] = useState()
    useEffect(()=>{
        setCurrentPath(temp);
    },[temp])

    return (
        <>
        <div className="navbar">
            <h1>Ravelry Roulette!</h1>
            <div className='nav-link-container'>

                <a href='https://www.ravelry.com' target='_blank' className='rav-link'>
                    <img src='./images/ravelry-logo.svg' alt='link to Ravelry'></img>
                </a>
                <button className={currentPath !== "/" ? "nav-button" : "nav-button active"} onClick={()=> navigate('/')}>Home</button>
                <button className={currentPath !== "/history" ? "nav-button" : "nav-button active"}  onClick={()=> navigate('/history')}>History</button>
                <button className={currentPath !== "/about"  ? "nav-button" : "nav-button active"}  onClick={()=> navigate('/about')}>About</button>
            </div>
        </div>
        </>
    )
}