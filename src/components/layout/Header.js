import React from 'react'
import Navigation from './Navigation'


function Header() {
    return (
        <header className='flex bg-slate-800 relative p-4 justify-center items-center'>
            <Navigation />
        </header>
    )
}

export default Header