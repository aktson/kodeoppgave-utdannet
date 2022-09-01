import React from 'react';
import UserCard from '../UserCard';
import { getFromStorage } from "./UserSpecific";

function Favourite() {

    const usersInStorage = getFromStorage("users");

    const users = usersInStorage.map(user => {
        return <UserCard user={user} key={user.login.uuid} />
    })

    if (usersInStorage.length === 0) {
        return (
            <section className='flex justify-center items-center my-6'>
                <div className='px-8 py-10 shadow-lg bg-indigo-100 text-2xl'>No favourite user here yet!!</div>
            </section>
        )
    } else {
        return (
            <section className='flex justify-center items-center my-6'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>{users}</div>
            </section>
        )
    }

}

export default Favourite;