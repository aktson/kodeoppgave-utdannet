import React from 'react'
import Hero from './Hero'
import Navigation from './Navigation'


function Header() {
    return (
        <header className='flex flex-col justify-center'>
            <Navigation />
        </header>
    )
}

export default Header