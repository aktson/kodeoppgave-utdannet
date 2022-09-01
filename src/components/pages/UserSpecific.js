import React, { useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaHeart, FaBirthdayCake, FaIdCard } from "react-icons/fa";
import UsersContext from '../../context/UsersContext';
import Loader from '../Loader';


function UserSpecific() {

    const { users, isLoading } = React.useContext(UsersContext);

    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const userId = params.get("id");

    const receivedUser = users.find(user => user.login.uuid === userId);

    const [id, setId] = React.useState(receivedUser.id.name);

    const [isfavourite, setIsfavourite] = React.useState(false)

    let usersInStorage = getFromStorage("users")

    const findExistingUser = usersInStorage.find(user => user.login.uuid === userId)

    // Add to local to storage and favourite
    const addTofavourite = () => {

        if (!findExistingUser) {
            usersInStorage.push(receivedUser)
            saveToStorage("users", usersInStorage)
            setIsfavourite(true)

        } else {
            const filterCurrentFavourite = usersInStorage.filter(user => user.login.uuid !== receivedUser)
            saveToStorage("users", filterCurrentFavourite)
            setIsfavourite(false)
        }

    }

    const removeFavourite = () => {

        const getFavouriteFromStorage = getFromStorage("users");

        const filterFavourtes = getFavouriteFromStorage.filter(favourite => favourite.login.uuid !== userId)
        saveToStorage("users", filterFavourtes);

    }



    if (!isLoading) {
        return (
            <section className='flex my-5 justify-center'>

                <div className='grid grid-cols-1 md:grid-cols-3 max-w-4xl container gap-4 '>
                    {/* grid item 1  */}
                    <div style={{ background: `url(${receivedUser.picture.large}) no-repeat center`, backgroundSize: "cover", width: "100%", height: "100%" }} className="rounded-xl" ></div>

                    {/* grid item 2 */}
                    <div className='p-6 flex flex-col gap-2 md:col-span-2 shadow-lg relative'>
                        <h2 >{receivedUser.name.title}. {receivedUser.name.first} {receivedUser.name.last} <span className='text-lg'>Age: {receivedUser.dob.age}</span></h2>
                        <div className='flex-col gap-4 flex'>
                            <p className='flex items-center gap-4 '>
                                <FaMapMarkerAlt />{receivedUser.location.street.name}, {receivedUser.location.street.number}, {receivedUser.location.city} {receivedUser.location.postcode}
                            </p>
                            <p className='flex items-center gap-4 '><FaEnvelope />{receivedUser.email}</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                <div className='flex flex-col shadow-lg p-3 gap-2  items-center'>
                                    <span>User Id</span>
                                    <p className='text-indigo-600 '>{id ? id : setId("Not available")}</p>
                                </div>
                                <div className='flex flex-col shadow-lg p-3 gap-2  items-center'>
                                    <span>Date of birth</span>
                                    <p className='text-indigo-600 '>{receivedUser.dob.date}</p>
                                </div>
                                <div className='flex flex-col shadow-lg p-3 gap-2  items-center'>
                                    <span>First-registered</span>
                                    <p className='text-indigo-600 '>{receivedUser.registered.date}</p>
                                </div>
                                <div className='flex flex-col shadow-lg p-3 gap-2 items-center'>
                                    <span>Country</span>
                                    <p className='text-indigo-600 '>{receivedUser.location.country}</p>
                                </div>

                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-2 py-4'>
                            <a href={`mailto:${receivedUser.email}`} rel="noreferrer" className="flex items-center gap-2 btn bg-indigo-700 justify-center w-full ">
                                <FaEnvelope />Send Email</a>
                            {isfavourite && <button className="heart text-red-500" ><FaHeart /></button>}
                            {isfavourite && <button className="btn bg-red-500" onClick={removeFavourite}>Remove Favourite</button>}
                            {!isfavourite && <button className="flex items-center gap-2 btn bg-indigo-700 justify-center w-full " onClick={addTofavourite}><FaHeart />Add To favourite</button>}
                        </div>
                    </div>
                </div>
            </section >
        )

    } else {
        return <Loader />
    }

}

export default UserSpecific

// Storage functions
export function getFromStorage(key) {

    const item = localStorage.getItem(key);

    if (!item) {
        return [];
    } else {
        return (JSON.parse(item));
    }

}
function saveToStorage(key, value) {

    localStorage.setItem(key, JSON.stringify(value))

};