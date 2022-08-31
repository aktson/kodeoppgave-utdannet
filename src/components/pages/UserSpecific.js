import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaHeart, FaBirthdayCake, FaIdCard } from "react-icons/fa";
import people from "../../assets/people.jpg";
import { useParams } from "react-router-dom";
import UsersContext from '../../context/UsersContext';

function UserSpecific() {

    const { users, isLoading } = React.useContext(UsersContext);
    const params = useParams();


    return (
        <section className='flex my-5 justify-center'>

            <div className='grid grid-cols-1 md:grid-cols-3 max-w-4xl container gap-4 '>
                {/* grid item 1  */}
                <div style={{ background: `url(${people}) no-repeat center`, backgroundSize: "cover", width: "100%", height: "100%" }} className="rounded-xl" ></div>

                {/* grid item 2 */}
                <div className='p-6 flex flex-col gap-2 md:col-span-2 shadow-lg relative'>
                    <h2 >Ankit soni <span className='text-lg'>Age: 33</span></h2>
                    <div className='flex-col gap-4 flex'>
                        <p className='flex items-center gap-4 '><FaMapMarkerAlt />Hardangerfjordvegen 50, 5600 Norheimsund</p>
                        <p className='flex items-center gap-4 '><FaEnvelope />ankit@gmail.com</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex flex-col shadow-lg p-3 gap-2  items-center'>
                                <span>User Id</span>
                                <p className='text-indigo-600 '>48345437846</p>
                            </div>
                            <div className='flex flex-col shadow-lg p-3 gap-2  items-center'>
                                <span>Date of birth</span>
                                <p className='text-indigo-600 '>DOB: 01-07-1986</p>
                            </div>
                            <div className='flex flex-col shadow-lg p-3 gap-2  items-center'>
                                <span>First-registered</span>
                                <p className='text-indigo-600 '>  48345437846</p>
                            </div>
                            <div className='flex flex-col shadow-lg p-3 gap-2 items-center'>
                                <span>Email</span>
                                <p className='text-indigo-600 '>ankit@gmail.com</p>
                            </div>

                        </div>


                    </div>
                    <button className='absolute right-3 top-3 text-2xl'><FaHeart /></button>
                    <a href="mailto:ankitnsoni@outlook.com" rel="noreferrer" className='flex items-center gap-2 btn bg-indigo-700 justify-center w-36 my-5'>
                        <FaEnvelope className="social-icons" />Send Email</a>
                </div>
            </div>
        </section >
    )
}

export default UserSpecific