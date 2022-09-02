import React from 'react';
import { ToastContainer } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import moment from "moment"

function CardUserSpecific({ user, addTofavourite, removeFavourite, id, setId, findExistingUser }) {

    const dob = new Date(user.dob.date).toLocaleDateString('da-DK', { month: 'long', day: 'numeric', year: 'numeric' })
    const firstRegistered = new Date(user.registered.date).toLocaleDateString('da-DK', { month: 'long', day: 'numeric', year: 'numeric' })


    function getNextBirthday() {
        const birthday = moment(dob);
        const today = moment().format("YYYY-MM-DD");

        // calculate age of the person
        const age = moment(today).diff(birthday, 'years');
        moment(age).format("YYYY-MM-DD");

        let nextBirthday = moment(birthday).add(age, 'years');
        moment(nextBirthday).format("YYYY-MM-DD");

        /* added one more year in case the birthday has already passed to calculate date till next one. */
        if (nextBirthday.isSame(today)) {
            return 'Cake!!';
        } else {
            nextBirthday = moment(birthday).add(age + 1, 'years');
            return 'Days until next birthday' + ' ' + nextBirthday.diff(today, 'days');
        }

    }
    const timeUntilNextBirthday = getNextBirthday();
    const timeSinceRegistered = moment(user.registered.date).fromNow();


    return (
        <section className='flex  justify-center items-center' style={{ minHeight: "60vh" }}>
            <ToastContainer autoClose={2000} />
            <div className='container grid grid-cols-1 md:grid-cols-3 max-w-4xl shadow-xl p-4'>
                {/* grid item 1  */}
                <div className="grid grid-rows-2 p-4 items-center s">
                    <div style={{ background: `url(${user.picture.large}) no-repeat center`, backgroundSize: "cover", width: "100%", height: "100%" }}  >    </div>
                    <div className='grid grid-rows-2 gap-2 mt-6'>
                        <a href={`mailto:${user.email}`} rel="noreferrer" className="flex items-center gap-2 btn justify-center w-full ">
                            <FaEnvelope />Send Email</a>
                        {!findExistingUser && <button className="flex items-center gap-2 btn justify-center w-full " onClick={addTofavourite}><FaHeart />Add to favourite</button>}
                        {findExistingUser && <button className="btn bg-red-500" onClick={removeFavourite}>Remove Favourite</button>}

                    </div>
                </div>

                {/* grid item 2 */}
                <div className='p-6 flex flex-col gap-2 md:col-span-2 relative'>
                    <h2 >{user.name.title}. {user.name.first} {user.name.last} <span className='text-lg'>Age: {user.dob.age}</span></h2>
                    <div className='flex-col gap-4 flex'>
                        <p className='flex items-center gap-4 '>
                            <FaMapMarkerAlt />{user.location.street.name}, {user.location.street.number}, {user.location.city} {user.location.postcode}
                        </p>
                        <p className='flex items-center gap-4 '><FaEnvelope />{user.email}</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex flex-col shadow-lg p-3 gap-2  items-center  '>
                                <span>User Id</span>
                                <p className='text-slate-600 '>{id ? id : setId("Not available")}</p>
                            </div>
                            <div className='flex flex-col shadow-lg p-3 gap-2  items-center'>
                                <span>Date of birth</span>
                                <p className='text-slate-600 '>{dob}</p>
                            </div>
                            <div className='flex flex-col shadow-lg p-3 gap-2  items-center'>
                                <span>First-registered</span>
                                <p className='text-slate-600 '>{firstRegistered}</p>
                            </div>
                            <div className='flex flex-col shadow-lg p-3 gap-2 items-center'>
                                <span>Country</span>
                                <p className='text-slate-600 '>{user.location.country}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default CardUserSpecific