import React from 'react';
import ReactDOM from 'react-dom';
import { useLocalStorage } from './useLocalStorage';
import { ToastContainer, toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaHeart, FaHourglassHalf, FaPhoneVolume, FaBirthdayCake, FaUserMinus } from "react-icons/fa";
import moment from "moment";
import Bounce from 'react-reveal/Bounce';
import DownloadBtn from './DownloadBtn';


function CardUserSpecific({ open, onClose, passedId, user, setIsFavourite }) {

    const [id, setId] = React.useState(user.id.name);

    const [itemsInStorage, setItemsInStorage] = useLocalStorage("users", [])

    const findExistingUser = itemsInStorage.find(user => user.login.uuid === passedId)

    if (!open) return null;

    // Add favourite to localtorage and ui
    const addTofavourite = () => {

        const findExistingUser = itemsInStorage.find(user => user.login.uuid === passedId)

        if (!findExistingUser) {
            setItemsInStorage([...itemsInStorage, user])
            setIsFavourite(true)
            toast.success("Added to favourite")

        } else {
            const filterCurrentFavourite = itemsInStorage.filter(user => user.login.uuid !== user)
            setItemsInStorage(filterCurrentFavourite)
        }
    }

    // click event to remove item from localstorage and ui
    const removeFavourite = () => {
        const filterCurrentFavourite = itemsInStorage.filter(item => item.login.uuid !== passedId)
        setItemsInStorage(filterCurrentFavourite)
        setIsFavourite(false)
        toast.warning("Removed from favourite")

    }

    const dob = new Date(user.dob.date).toLocaleDateString('da-DK', { month: 'long', day: 'numeric', year: 'numeric' })
    const firstRegistered = new Date(user.registered.date).toLocaleDateString('da-DK', { month: 'long', day: 'numeric', year: 'numeric' })

    const timeUntilNextBirthday = getNextBirthday(dob);
    const timeSinceRegistered = moment(user.registered.date).fromNow();


    return ReactDOM.createPortal(
        <section className='flex flex-col justify-center items-center gap-2 ' style={{ minHeight: "60vh" }} id="my-modal">
            {/* modal overlay */}
            <div className="w-full h-full" id="overlay" onClick={onClose}></div>
            <ToastContainer autoClose={2000} />

            {/* modal body grid Container*/}
            <Bounce top >
                <div className='container grid grid-cols-1 md:grid-cols-3 max-w-4xl shadow-xl p-4 bg-white z-10'>
                    {/* grid item 1  */}
                    <div className="grid grid-rows-2 p-4 items-center ">
                        <div style={{ background: `url(${user.picture.large}) no-repeat center`, backgroundSize: "cover", width: "100%", height: "100%" }}  ></div>
                        <div className='grid grid-rows-3 gap-2 mt-6'>
                            <a href={`mailto:${user.email}`} rel="noreferrer" className="flex items-center gap-2 btn justify-center w-full ">
                                <FaEnvelope />Send Email</a>
                            {!findExistingUser && <button className="btn " onClick={addTofavourite}><FaHeart />Add to favourite</button>}
                            {findExistingUser && <button className="btn bg-red-500" onClick={removeFavourite}><FaUserMinus />Remove Favourite</button>}
                            <DownloadBtn user={user} />
                        </div>
                    </div>
                    {/* end of grid item */}

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
                                    <p className='text-teal-600 '>{id ? id : setId("Not available")}</p>
                                </div>
                                <div className='flex flex-col shadow-lg p-3 gap-2  items-center'>
                                    <span>Date of birth</span>
                                    <p className='text-teal-600 '>{dob}</p>
                                </div>
                                <div className='flex flex-col shadow-lg p-3 gap-2  items-center'>
                                    <span>First-registered</span>
                                    <p className='text-teal-600 '>{firstRegistered}</p>
                                </div>
                                <div className='flex flex-col shadow-lg p-3 gap-2 items-center'>
                                    <span>Country</span>
                                    <p className='text-teal-600 '>{user.location.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of grid item */}
                </div>
                {/* end og grid Container*/}
                <div className=' w-full max-w-4xl z-10 '>
                    <div className='grid grid-cols-3 gap-2  text-center text-slate-800'>
                        <div className='flex flex-col shadow-lg p-3 bg-white gap-3 items-center justify-around'>
                            <FaHourglassHalf className='text-3xl text-teal-600' />
                            <span>Time Since Registered</span>
                            <p className='text-teal-700'>{timeSinceRegistered}</p>
                        </div>
                        <div className='flex flex-col shadow-lg p-3 bg-white gap-3 items-center justify-around '>
                            <FaBirthdayCake className='text-3xl text-teal-600 ' />
                            <span>Days until next Birthday</span>
                            <p className='text-teal-700'>{timeUntilNextBirthday}</p>

                        </div>
                        <div className='flex shadow-lg flex-col p-3 bg-white gap-3 justify-around items-center '>
                            <FaPhoneVolume className='text-3xl text-teal-600 ' />
                            <span>Telephone</span>
                            <p className='text-teal-700'>{user.cell}</p>
                        </div>
                    </div>
                </div>
            </Bounce >
        </section >,
        document.getElementById("portal")
    )
}

export default CardUserSpecific;

// function to get time until next birthday

function getNextBirthday(dob) {
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
        return nextBirthday.diff(today, 'days');
    }

}

