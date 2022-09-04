import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaHeart, FaInfo, FaBars } from "react-icons/fa"
import MobileNav from './MobileNav';
import logo from "../../assets/logo.svg"


function Navigation() {

    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = React.useState(false);

    const openMobileNav = () => {
        if (!isOpen) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }


    return (
        <>
            <nav className=' p-2 flex justify-evenly items-center  container'>
                <a href='/' className='mr-auto'>
                    <img src={logo} alt='random user generator logo' className='w-56' />
                </a>
                <ul className='gap-3 hidden sm:flex  '>
                    <li onClick={() => navigate("/")} className="nav-list"><FaHome className={location.pathname === "/" ? "active nav-icons" : "nav-icons"} />Home</li>
                    <li onClick={() => navigate("/about")} className="nav-list"><FaInfo className={location.pathname === "/about" ? "active nav-icons" : "nav-icons"} />About</li>
                    <li onClick={() => navigate("/favourite")} className="nav-list"><FaHeart className={location.pathname === "/favourite" ? "active nav-icons" : "nav-icons"} />Favourite</li>
                </ul>
                <button onClick={openMobileNav}><FaBars className='text-teal-600 text-2xl block sm:hidden' /></button>
            </nav >
            {isOpen && <MobileNav />}
        </>
    )
}

export default Navigation;