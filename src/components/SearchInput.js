import React from 'react'
import { FaSearch } from "react-icons/fa";



function SearchInput({ handleSearchChange, value }) {


    return (
        <>
            <form className="w-full ">
                <label className="relative sm:flex-initial sm:w-full ">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FaSearch />
                    </span>
                    <input className="input" placeholder="search user" type="text" name="search" value={value} onChange={handleSearchChange} />
                </label>
            </form>

        </>
    )
}

export default SearchInput