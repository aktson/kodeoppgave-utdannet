import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserCard from '../UserCard';
import UsersContext from '../../context/UsersContext';
import Loader from '../Loader';
import Hero from '../layout/Hero';
import Pagination from '../Pagination';
import SearchInput from '../SearchInput';
import Sort from '../Sort';



function Home() {

    const { isLoading, users } = React.useContext(UsersContext);


    const [currentPage, setCurrentPage] = React.useState(1);
    const [usersPerPage] = React.useState(9);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const currentUsersOnPage = users.slice(indexOfFirstUser, indexOfLastUser)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }



    // filter function for search inputs
    const [value, setValue] = React.useState("");
    const [filterUsers, setFilterUsers] = React.useState([]);

    const handleSearchChange = (e) => {
        setValue(e.target.value)

        if (value !== "") {
            const filteredUsers = users.filter(user => {
                if (user.name.first.toLowerCase().trim().includes(value) || user.name.last.toLowerCase().trim().includes(value)) {
                    return true
                }
            })
            if (filteredUsers.length === 0) {
                toast.warning("No users found")
            }
            setFilterUsers(filteredUsers)
        } else {
            setFilterUsers(users)
        }
    }


    const searchFilteredData = filterUsers.map(user => {
        return <UserCard key={user.login.uuid} user={user} />
    })


    const usersOnpage = currentUsersOnPage.map(user => (
        <UserCard key={user.login.uuid} user={user} />
    ))

    if (!isLoading) {
        return (
            <>
                <Hero />
                <ToastContainer autoClose={2000} />
                <section className='flex flex-col justify-center items-center my-5 gap-6 p-4 sm:p-1'>
                    <div className='flex shadow-xl gap-4 w-full container max-w-4xl p-6  bg-slate-200'>
                        <SearchInput handleSearchChange={handleSearchChange} value={value} />
                        <Sort />
                    </div>
                    <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl'>
                        {value.length > 1 ? searchFilteredData : usersOnpage}
                    </div>
                    <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
                </section>
            </>
        )

    } else {
        return <Loader />
    }

}

export default Home