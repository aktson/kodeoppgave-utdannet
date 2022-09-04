import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaUserMinus } from "react-icons/fa";
import Bounce from "react-reveal/Bounce"
import HeadShake from "react-reveal/HeadShake"
import { useLocalStorage } from './useLocalStorage';
import { toast, ToastContainer } from "react-toastify";


function CardFavourite({ user }) {

    const [itemsInStorage, setItemsInStorage] = useLocalStorage("users", []);
    const [isFavouriteExist, setIsFavouriteExist] = React.useState(false)

    function checkFavouriteExists() {
        const favouriteExist = itemsInStorage.find(favourite => favourite.login.uuid === user.login.uuid);

        if (favouriteExist) {
            setIsFavouriteExist(true)
        }
    }
    React.useEffect(() => {
        checkFavouriteExists()
    }, [])

    // click event to remove item from localstorage and ui
    const removeFavourite = () => {
        const filterCurrentFavourite = itemsInStorage.filter(item => item.login.uuid !== user.login.uuid)
        setItemsInStorage(filterCurrentFavourite)
        setIsFavouriteExist(false)
        toast.warning("Removed from favourite")

    }

    if (isFavouriteExist) {
        return (

            <Bounce>

                <div className="text-slate-900 flex items-center p-3 justify-center shadow-xl border-l-2 border-teal-500"  >
                    <ToastContainer />
                    <figure>
                        <img className="object-cover h-36 w-36 rounded-full mx-auto top-20 right-0 left-0 shadow-lg" src={user.picture.large} />
                    </figure>
                    <div className='p-5 flex flex-col  row-span-2 gap-1 mt-3'>
                        <h3 >{user.name.first} {user.name.last}</h3>
                        <p>Age: {user.dob.age},</p>
                        <p className='flex items-center gap-2'><FaMapMarkerAlt />{user.location.city}</p>
                        <p className='flex items-center gap-2'><FaEnvelope />{user.email}</p>
                        <button className="btn bg-red-500 mt-2" onClick={removeFavourite}><FaUserMinus />Remove Favourite</button>
                    </div>
                </div>
            </Bounce>
        )
    }
    else {
        return (
            <section className='flex justify-center items-center my-6 col-span-3'>
                {itemsInStorage.length === 0 && <HeadShake>  <div className='px-8 py-5 shadow-lg bg-teal-600 text-xl text-white '>Nothing left here now..</div></HeadShake>}
            </section>
        )
    }


}

export default CardFavourite