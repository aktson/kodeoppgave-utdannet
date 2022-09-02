import React from 'react';


function Sort({ handleSorting }) {

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