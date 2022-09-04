import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaHeart, FaInfo } from "react-icons/fa"

function MobileNav() {

    const navigate = useNavigate();
    const location = useLocation();
    return (
        <nav className='h-auto absolute  -bottom-56 bg-slate-600  z-10 w-full transition-all  items-center'>
            <ul className='gap-3 sm:hidden flex flex-col   '>
                <li onClick={() => navigate("/")} className="nav-list"><FaHome className={location.pathname === "/" ? "active nav-icons" : "nav-icons"} />Home</li>
                <li onClick={() => navigate("/about")} className="nav-list"><FaInfo className={location.pathname === "/about" ? "active nav-icons" : "nav-icons"} />About</li>
                <li onClick={() => navigate("/favourite")} className="nav-list"><FaHeart className={location.pathname === "/favourite" ? "active nav-icons" : "nav-icons"} />Favourite</li>
            </ul>
        </nav>
    )
}

export default MobileNav