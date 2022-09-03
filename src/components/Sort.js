import React, { useEffect } from 'react';
import UsersContext from '../context/UsersContext';


function Sort() {

    const { users, setUsers } = React.useContext(UsersContext)


    const handleSorting = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "none") {
            setUsers(users)
        }

        if (selectedValue === "alphabatic") {
            const alphabaticOrdered = [...users].sort((a, b) => a.name.first.localeCompare(b.name.first));
            setUsers(alphabaticOrdered)

        } else if (selectedValue === "age") {
            const sortedByAge = [...users].sort((a, b) => parseInt(a.dob.age) - parseInt(b.dob.age));
            setUsers(sortedByAge)

        }
    }


    return (
        <>
            <label className="inline" htmlFor="users"></label>
            <select id="users" name="users" className='input sm:flex-initial sm:w-96' onChange={handleSorting}>
                <option value="none" >Sort</option>
                <option value="alphabatic">Alphabatic</option>
                <option value="age">By age</option>
            </select>

        </>

    )
}

export default Sort