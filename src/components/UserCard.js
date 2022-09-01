import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"
import { getFromStorage } from './pages/UserSpecific';

function UserCard({ user }) {

    const usersInStorage = getFromStorage("users");

    const favourtieExist = usersInStorage.find(item => item.login.uuid === user.login.uuid)

    return (
        <Link to={`/userspecific?id=${user.login.uuid}`} className="text-indigo-900 hover:text-indigo-800">
            <div className='shadow-xl grid grid-rows-2 gap-2  cursor-pointer bg-white justify-content-center items-center hover:animate-pulse relative'>
                <div className="  relative w-full h-full border-b bg-slate-200">
                    <img className="object-cover h-36 w-36 rounded-full mx-auto absolute top-14 right-0 left-0 bottom-0 shadow-md" src={user.picture.large} />
                </div>
                <div className='p-5 flex flex-col  row-span-2 gap-1 mt-3'>
                    <h3>{user.name.first} {user.name.last}</h3>
                    <p>Age: {user.dob.age},</p>
                    <p className='flex items-center gap-2'><FaMapMarkerAlt />{user.location.city}</p>
                    <p className='flex items-center gap-2'><FaEnvelope />{user.email}</p>
                </div>
                {favourtieExist && <button className="heart text-red-500"><FaHeart /></button>}
            </div>
        </Link>
    )
}

export default UserCard