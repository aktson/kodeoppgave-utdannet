import React from 'react'
import Hero from './Hero'
import Nav from './Nav'

function Header() {
    return (
        <header className=' flex flex-col justify-center'>
            <Nav />
            <Hero />
        </header>
    )
}

export default Header