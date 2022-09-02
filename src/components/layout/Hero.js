import React from 'react';
import peopleImg from "../../assets/people-using-smartphones.jpg";
import peopleImg2 from "../../assets/peoplePassport.png"

function Hero() {
    return (
        <section className='flex items-center justify-center hero'   >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-items-center items-center text-slate-50  max-w-5xl container p-4'>
                <h1 className='heading-hero'>Random User Generator</h1>
            </div>
        </section >
    )
}

export default Hero

// style={{ background: `url("${peopleImg}") no-repeat center`, height: "20vh", backgroundSize: "cover" }}