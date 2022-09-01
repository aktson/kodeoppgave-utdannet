import React from 'react'
import { createContext, useEffect } from "react";
import { toast } from 'react-toastify';
import { baseUrl } from '../settings';

const UsersContext = createContext();

export function UsersProvider({ children }) {

    const [isLoading, setIsLoading] = React.useState(true);
    const [users, setUsers] = React.useState([]);


    async function getUsers() {
        try {

            const response = await fetch(baseUrl + "?seed=00000&page=1&results=10", {
                mode: "cors",
            });
            const data = await response.json();

            const fetchedUsers = data.results;

            setIsLoading(false)
            setUsers(fetchedUsers)


        } catch (error) {
            console.log(error)
            toast.error("Unknown error occured")

        }
    }

    useEffect(() => {
        getUsers();
    }, [])



    return <UsersContext.Provider value={{
        isLoading, getUsers, users, setUsers
    }}>
        {children}
    </UsersContext.Provider>
}

export default UsersContext;