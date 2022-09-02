import React from 'react'
import { FaSearch } from "react-icons/fa";
import UsersContext from '../context/UsersContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchInput() {

    const { users, setUsers } = React.useContext(UsersContext)

    const [value, setValue] = React.useState("");

    const [filterUsers, setFilterUsers] = React.useState([])

    const handleKeyupEvent = (event) => {
        event.preventDefault();
        if (value === "") {
            setUsers(users)
            return null;
        }
        const filteredUsers = users.filter(user => {
            if (user.name.first.toLowerCase().trim().includes(value) || user.name.last.toLowerCase().trim().includes(value)) {
                return true
            }
        })

        if (filteredUsers.length === 0) {
            toast.error("No users found")


        } else {
            setUsers(filterUsers)

        }
    }

    return (
        <>
            <form onKeyUp={handleKeyupEvent} className="w-full ">
                <ToastContainer />
                <label className="relative sm:flex-initial sm:w-full ">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FaSearch />
                    </span>
                    <input className="input" placeholder="search user" type="text" name="search" value={value} onChange={(e) => setValue(e.target.value)} />
                </label>
            </form>

        </>
    )
}

export default SearchInput