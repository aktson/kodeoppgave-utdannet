import React from 'react'
import UserCard from '../UserCard';
import UsersContext from '../../context/UsersContext';
import Loader from '../Loader';
import Hero from '../layout/Hero';


function Home() {

    const { isLoading, users } = React.useContext(UsersContext);


    if (!isLoading) {
        return (
            <>
                <Hero />
                <section className='flex flex-col justify-center items-center my-5 gap-6'>
                    <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl'>
                        {users.map(user => (
                            <UserCard key={user.login.uuid} user={user} />
                        ))}
                    </div>
                    <button className='btn bg-indigo-700'>Load more</button>
                </section>
            </>
        )

    } else {
        return <Loader />
    }

}

export default Home