import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FaEnvelope, FaMapMarkerAlt, FaHeart, FaBirthdayCake, FaIdCard } from "react-icons/fa";
import UsersContext from '../../context/UsersContext';
import Loader from '../Loader';
import { useLocalStorage } from "../useLocalStorage";

import CardUserSpecific from '../CardUserSpecific';


function UserSpecific() {

    const { users, isLoading } = React.useContext(UsersContext);

    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const userId = params.get("id");

    const receivedUser = users.find(user => user.login.uuid === userId);

    const [id, setId] = React.useState(receivedUser.id.name);

    const [itemsInStorage, setItemsInStorage] = useLocalStorage("users", [])

    const findExistingUser = itemsInStorage.find(user => user.login.uuid === userId)

    // Add favourite to localtorage and ui
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

    //click event to remove item from localstorage and ui
    const removeFavourite = () => {
        const filterCurrentFavourite = itemsInStorage.filter(item => item.login.uuid !== userId)
        setItemsInStorage(filterCurrentFavourite)
        toast.warning("Removed from favourite")

    }


    if (!isLoading) {
        return (

            <CardUserSpecific user={receivedUser} removeFavourite={removeFavourite} addTofavourite={addTofavourite} id={id} setId={setId} findExistingUser={findExistingUser} />
        )

    } else {
        return <Loader />
    }

}

export default UserSpecific;

