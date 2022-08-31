import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function UserCard({ user }) {

    return (
        <div className='shadow-xl grid grid-rows-2 gap-2  cursor-pointer bg-white justify-content-center items-center hover:animate-pulse '>
            {/* <div style={{ background: `url(${user.picture.large}) no-repeat center`, backgroundSize: "cover", width: "150px", height: "150px" }} className="object-fill" ></div> */}
            <div className="  relative w-full h-full border-b bg-slate-50">
                <img className="object-cover h-36 w-36 rounded-full mx-auto absolute top-10 right-0 left-0 bottom-0 shadow-md" src={user.picture.large} />
            </div>
            <div className='p-5 flex flex-col   row-span-2 gap-1'>
                <h3>{user.name.first}</h3>
                <p>Age: {user.dob.age},</p>
                <p className='flex items-center gap-2'><FaMapMarkerAlt />{user.location.city}</p>
                <p className='flex items-center gap-2'><FaEnvelope />{user.email}</p>
            </div>
        </div>
    )
}

export default UserCard