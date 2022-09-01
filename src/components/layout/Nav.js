import React from 'react';
import { useNavigate, useLocation } from "react-router-dom"

function Nav() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className=' p-4 bg-indigo-800  flex  justify-center'>
            <div className='container flex justify-around items-center'>
                <a href='/' className='logo text-slate-50 text-2xl'>Random user Generator</a>

                <ul className='flex gap-3 text-indigo-50'>
                    <li onClick={() => navigate("/")} className={location.pathname === "/" ? "active nav-list" : "nav-list"}>Home</li>
                    <li onClick={() => navigate("/about")} className={location.pathname === "/about" ? "active nav-list" : "nav-list"}>About</li>
                    <li onClick={() => navigate("/favourite")} className={location.pathname === "/favourite" ? "active nav-list" : "nav-list"}>Favourite</li>
                </ul>
            </div>
        </nav >
    )
}

export default Nav