import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/Navbar.css';

export default function Navbar () {
    const navigate = useNavigate()
    let temp = window.location.pathname;
    const [currentPath, setCurrentPath] = useState();
    const [navOpen, setNavOpen] = useState(false);

    useEffect(()=>{
        setCurrentPath(temp);
    },[temp])

    const handleOpenNav = (e) => {
        const menu = document.getElementsByClassName("nav-link-container")[0];
        const closeNavBtn = document.getElementsByClassName("close-hamburger")[0];
        const openNavBtn = document.getElementsByClassName("open-hamburger")[0];
        if (navOpen == false) {
            menu.classList.remove("closed");
            setNavOpen(true);
            closeNavBtn.classList.remove("closed");
            openNavBtn.classList.add("closed");
        } else {
            menu.classList.add("closed");
            setNavOpen(false);
            closeNavBtn.classList.add("closed");
            openNavBtn.classList.remove("closed");

        }
    }

    const handleNavRoute = (e) => {
        if (e.target.id === "home") {
            navigate('/');
        } else if (e.target.id === "history") {
            navigate('/history')
        } else if (e.target.id === "about") {
            navigate('/about')
        } 

        const menu = document.getElementsByClassName("nav-link-container")[0];
        const closeNavBtn = document.getElementsByClassName("close-hamburger")[0];
        const openNavBtn = document.getElementsByClassName("open-hamburger")[0];
        menu.classList.add("closed");
        setNavOpen(false);
        closeNavBtn.classList.add("closed");
        openNavBtn.classList.remove("closed");
    }

    return (
        <>
        <div className="navbar">
            <h1>Ravelry Roulette!</h1>
            <div className='nav-selection'>
                <button className='open-hamburger' onClick={handleOpenNav}> NAV </button>
                <div className='nav-link-container closed'>
                    <button className={'close-hamburger closed'} onClick={handleOpenNav}> X </button>
                    <a href='https://www.ravelry.com' target='_blank' className='rav-link'>
                        <img src='./images/ravelry-logo.svg' alt='link to Ravelry'></img>
                    </a>
                    <button className={currentPath !== "/" ? "nav-button" : "nav-button active"} onClick={handleNavRoute} id='home'>Home</button>
                    <button className={currentPath !== "/history" ? "nav-button" : "nav-button active"}  onClick={handleNavRoute} id='history'>History</button>
                    <button className={currentPath !== "/about"  ? "nav-button" : "nav-button active"}  onClick={handleNavRoute} id='about'>About</button>
                </div>
            </div>
        </div>
        </>
    )
}