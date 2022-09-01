import React from 'react';
import UsersContext from '../context/UsersContext';


function SortAlphabatic() {

    const { users, setUsers } = React.useContext(UsersContext);

    const handleChange = (event) => {
        const selectedValue = event.target.value;

        if (selectedValue === "alphabatic") {

            const alphabaticOrdered = users.sort((a, b) => a.name.first.localeCompare(b.name.first));

            setUsers(alphabaticOrdered)

        } else if (selectedValue === "age") {

            const sortedByAge = users.sort((a, b) => parseInt(a.dob.age) - parseInt(b.dob.age));

            setUsers(sortedByAge)
        }
    }
    return (
        <>
            <label className="inline" htmlFor="cars"></label>
            <select id="cars" className='input sm:flex-initial sm:w-96' onChange={handleChange}>
                <option value="">Sort</option>
                <option value="alphabatic">Alphabatic</option>
                <option value="age">By age</option>
            </select>
        </>

    )
}

export default SortAlphabatic