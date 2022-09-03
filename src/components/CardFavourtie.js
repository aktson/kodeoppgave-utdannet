import React from 'react';
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function CardFavourtie({ user }) {
    return (

        <div className="text-slate-900 flex items-center p-3 justify-center shadow-xl border-l-2 border-teal-500"  >
            <figure>
                <img className="object-cover h-36 w-36 rounded-full mx-auto top-20 right-0 left-0 shadow-lg" src={user.picture.large} />
            </figure>
            <div className='p-5 flex flex-col  row-span-2 gap-1 mt-3'>
                <h3 >{user.name.first} {user.name.last}</h3>
                <p>Age: {user.dob.age},</p>
                <p className='flex items-center gap-2'><FaMapMarkerAlt />{user.location.city}</p>
                <p className='flex items-center gap-2'><FaEnvelope />{user.email}</p>
            </div>
        </div>

    )
}

export default CardFavourtie