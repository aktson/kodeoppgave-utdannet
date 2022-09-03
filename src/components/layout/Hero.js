import React from 'react';
import Reveal from "react-reveal/Reveal"

function Hero() {
    return (
        <Reveal>
            <section className='flex items-center  hero'   >
                <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-items-center items-center text-slate-50  max-w-5xl container p-4'>
                    <h1 className='heading-hero'>Random User Generator</h1>
                </div>
            </section >
        </Reveal>
    )
}

export default Hero

