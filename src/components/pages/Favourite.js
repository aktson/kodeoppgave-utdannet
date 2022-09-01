import React from 'react';
import UserCard from '../UserCard';
import { useLocalStorage } from '../useLocalStorage';

function Favourite() {

    const [itemsInStorage] = useLocalStorage("users", [])

    const users = itemsInStorage.map(user => {
        return <UserCard user={user} key={user.login.uuid} />
    })

    return (
        <section className='flex justify-center items-center my-6'>
            {itemsInStorage.length === 0 ? <div className='px-8 py-5 shadow-lg bg-pink-500 text-xl text-white'>No favourite user here yet!!</div> :
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>{users}</div>}
        </section>
    )
}

export default Favourite;