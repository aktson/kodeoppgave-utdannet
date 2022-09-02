import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaHeart, FaInfo } from "react-icons/fa"


function Navigation() {

    const navigate = useNavigate();
    const location = useLocation();


    return (
        <nav className='nav'>
            <a href='/' className='logo'>Random User Generator</a>
            <div className='container flex justify-around items-center'>
                <ul className='flex gap-3 '>
                    <li onClick={() => navigate("/")} className="nav-list"><FaHome className={location.pathname === "/" ? "active nav-icons" : "nav-icons"} />Home</li>
                    <li onClick={() => navigate("/about")} className="nav-list"><FaInfo className={location.pathname === "/about" ? "active nav-icons" : "nav-icons"} />About</li>
                    <li onClick={() => navigate("/favourite")} className="nav-list"><FaHeart className={location.pathname === "/favourite" ? "active nav-icons" : "nav-icons"} />Favourite</li>
                </ul>
            </div>
        </nav >
    )
}

export default Navigation;