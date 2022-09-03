import React, { useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { useLocalStorage } from './useLocalStorage';
import CardUserSpecific from './CardUserSpecific';
import Zoom from 'react-reveal/Zoom';



function UserCard({ user }) {

    const [itemsInStorage, setItemsInStorage] = useLocalStorage("users", [])
    const [isFavourite, setIsFavourite] = React.useState(false)

    function checkFavouriteExists() {
        const favouriteExist = itemsInStorage.find(favourite => favourite.login.uuid === user.login.uuid);

        if (favouriteExist) {
            setIsFavourite(true)
        }
    }
    useEffect(() => {
        checkFavouriteExists()
    }, [])

    // Modal open aand closs state
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    };


    return (
        <Zoom>
            <div className=' relative'>
                <div className="text-slate-900 hover:text-slate-800 card" onClick={openModal} >
                    <figure className=" relative w-full h-full border-b bg-slate-200" >
                        <img className="object-cover h-36 w-36 rounded-full mx-auto absolute top-14 right-0 left-0 bottom-0 shadow-md" src={user.picture.large} />
                    </figure>
                    <div className='p-5 flex flex-col  row-span-2 gap-1 mt-3'>
                        <h3 >{user.name.first} {user.name.last}</h3>
                        <p>Age: {user.dob.age},</p>
                        <p className='flex items-center gap-2'><FaMapMarkerAlt />{user.location.city}</p>
                        <p className='flex items-center gap-2'><FaEnvelope />{user.email}</p>
                    </div>
                </div>
                {isOpen && (<CardUserSpecific key={user.login.uuid} onClose={closeModal} passedId={user.login.uuid} user={user} open={isOpen} setIsFavourite={setIsFavourite} />)}
                {isFavourite && < button className={`heart text-red-500 `}><FaHeart /></button>}

            </div>
        </Zoom >

    )
}

export default UserCard