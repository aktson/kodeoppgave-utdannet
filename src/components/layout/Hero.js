import React from 'react';

import SearchInput from '../SearchInput';
import Sort from '../Sort';

function Hero() {
    return (
        <section className='flex p-4 container mx-auto max-w-4xl gap-3 my-6 shadow-lg bg-indigo-100'  >
            {/* <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-items-center items-center text-indigo-50  max-w-5xl container p-4'>

                <div className='p-4  rounded-3xl'>
                    <h1>Welcome to Random user Generator</h1>
                </div>
                <figure> <img src={peopleImg} alt="random people" className='w-96' /></figure>
            </div> */}
            <SearchInput />
            <Sort />
        </section >
    )
}

export default Hero

// style={{ background: `url("${peopleImg}") no-repeat center`, height: "20vh", backgroundSize: "cover" }}