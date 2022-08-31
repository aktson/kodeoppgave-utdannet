import React from 'react';
import peopleImg from "../../assets/people.jpg"

function Hero() {
    return (
        <section className='bg-indigo-500 flex justify-center '  >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-items-center items-center text-indigo-50  max-w-5xl container p-4'>

                <div className='p-4  rounded-3xl'>
                    <h1>Welcome to Random user Generator</h1>
                </div>
                {/* <figure> <img src={peopleImg} alt="random people" className='w-96' /></figure> */}
            </div>

        </section >
    )
}

export default Hero

// style={{ background: `url("${peopleImg}") no-repeat center`, height: "20vh", backgroundSize: "cover" }}