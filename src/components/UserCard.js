import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useLocalStorage } from './useLocalStorage';


function UserCard({ user }) {

    const [itemsInStorage, setItemsInStorage] = useLocalStorage("users", [])

    const favouriteExist = itemsInStorage.find(favourite => favourite.login.uuid === user.login.uuid)

    const toggleFavourite = () => {
        const filterCurrentFavourite = itemsInStorage.filter(item => item.login.uuid !== user.login.uuid)
        setItemsInStorage(filterCurrentFavourite)
    }

    return (

        <div className=' relative'>
            <Link to={`/userspecific?id=${user.login.uuid}`} className="text-slate-900 hover:text-slate-800 card">
                <figure className="  relative w-full h-full border-b bg-slate-200">
                    <img className="object-cover h-36 w-36 rounded-full mx-auto absolute top-14 right-0 left-0 bottom-0 shadow-md" src={user.picture.large} />
                </figure>
                <div className='p-5 flex flex-col  row-span-2 gap-1 mt-3'>
                    <h3>{user.name.first} {user.name.last}</h3>
                    <p>Age: {user.dob.age},</p>
                    <p className='flex items-center gap-2'><FaMapMarkerAlt />{user.location.city}</p>
                    <p className='flex items-center gap-2'><FaEnvelope />{user.email}</p>
                </div>
            </Link>
            <button className={favouriteExist ? "heart text-red-500 cursor-pointer" : "heart cursor-default"} onClick={toggleFavourite}><FaHeart /></button>
        </div>

    )
}

export default UserCard