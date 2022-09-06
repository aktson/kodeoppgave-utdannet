import React from 'react';
import { useLocalStorage } from '../useLocalStorage';
import CardFavourite from '../CardFavourite';

function Favourite() {

    const [itemsInStorage] = useLocalStorage("users", [])

    const users = itemsInStorage.map(user => {
        return <CardFavourite user={user} key={user.login.uuid} />
    })

    return (
        <section className='flex justify-center items-center my-6'>
            {itemsInStorage.length === 0 ? <div className='px-8 py-5 shadow-lg bg-teal-600 text-xl text-white'>No favourite user here yet!!</div> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-4'>{users}</div>}
        </section>
    )
}

export default Favourite;