import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FaEnvelope, FaMapMarkerAlt, FaHeart, FaBirthdayCake, FaIdCard } from "react-icons/fa";
import UsersContext from '../../context/UsersContext';
import Loader from '../Loader';
import { useLocalStorage } from "../useLocalStorage";


function UserSpecific() {

    const { users, isLoading } = React.useContext(UsersContext);

    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const userId = params.get("id");

    const receivedUser = users.find(user => user.login.uuid === userId);

    const [id, setId] = React.useState(receivedUser.id.name);

    const [itemsInStorage, setItemsInStorage] = useLocalStorage("users", [])

    const findExistingUser = itemsInStorage.find(user => user.login.uuid === userId)


    // Add to local to storage and favourite
    const addTofavourite = () => {

        const findExistingUser = itemsInStorage.find(user => user.login.uuid === userId)

        if (!findExistingUser) {
            setItemsInStorage([...itemsInStorage, receivedUser])
            toast.success("Added to favourite")


        } else {
            const filterCurrentFavourite = itemsInStorage.filter(user => user.login.uuid !== receivedUser)
            setItemsInStorage(filterCurrentFavourite)

        }
    }
    const removeFavourite = () => {

        const filterCurrentFavourite = itemsInStorage.filter(item => item.login.uuid !== userId)
        setItemsInStorage(filterCurrentFavourite)
        toast.warning("Removed from favourite")

    }


    if (!isLoading) {
        return (
            <section className='flex  justify-center items-center' style={{ minHeight: "60vh" }}>
                <ToastContainer autoClose={2000} />
                <div className='container grid grid-cols-1 md:grid-cols-3 max-w-4xl shadow-xl p-4'>
                    {/* grid item 1  */}
                    <div className="grid grid-rows-2 p-4 items-center s">
                        <div style={{ background: `url(${receivedUser.picture.large}) no-repeat center`, backgroundSize: "cover", width: "100%", height: "100%" }}  >    </div>
                        <div className='grid grid-rows-2 gap-2 mt-6'>
                            <a href={`mailto:${receivedUser.email}`} rel="noreferrer" className="flex items-center gap-2 btn bg-indigo-700 justify-center w-full ">
                                <FaEnvelope />Send Email</a>
                            {!findExistingUser && <button className="flex items-center gap-2 btn bg-indigo-700 justify-center w-full " onClick={addTofavourite}><FaHeart />Add to favourite</button>}
                            {findExistingUser && <button className="btn bg-red-500" onClick={removeFavourite}>Remove Favourite</button>}

                        </div>
                    </div>

                    {/* grid item 2 */}
                    <div className='p-6 flex flex-col gap-2 md:col-span-2 relative'>
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
                    </div>
                </div>
            </section >
        )

    } else {
        return <Loader />
    }

}

export default UserSpecific;

