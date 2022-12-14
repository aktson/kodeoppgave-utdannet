import React from 'react';
import people from "../../assets/people.jpg";
import Fade from "react-reveal/Fade"

function About() {
    return (
        <section className='flex flex-col justify-center items-center gap-2 ' style={{ minHeight: "70vh" }} >

            <Fade>
                <div className='container grid grid-cols-1 md:grid-cols-3 max-w-5xl shadow-xl bg-white p-4'>
                    {/* grid item 1  */}
                    <div className="grid grid-rows-2 p-4 items-center ">
                        <h1 className='mb-4'>Om Appen</h1>
                        <p>Random User Generator appen henter tilfeldige brukere fra api som genererer falske brukere </p>
                        <p>Ved å trykke på individuell bruker, meir informasjon blir vist fram om bruker og appen gir  mulighet til lagre/sette brukere som favourite også. </p>
                        <p>Appen er utviklet med Reactjs og tailwindCss for å style. React-reveal pakken for animasjoner or React-toastify for toast meldingen.</p>
                    </div>
                    {/* end of grid item */}

                    {/* grid item 2 */}
                    <figure className='col-span-2  '>
                        <img src={people} alt="random people" className='about-img' />
                    </figure>
                    {/* end of grid item */}
                </div>
            </Fade>


        </section >
    )
}

export default About