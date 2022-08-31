import React from 'react'
import { createContext, useEffect } from "react";
import { baseUrl } from '../settings';

const UsersContext = createContext();

export function UsersProvider({ children }) {

    const [isLoading, setIsLoading] = React.useState(true);
    const [users, setUsers] = React.useState([]);


    async function getUsers() {
        try {

            const response = await fetch(baseUrl + "?seed=00000&page=1&results=10");
            const data = await response.json();
            console.log(data)
            const fetchedUsers = data.results;

            setIsLoading(false)
            setUsers(fetchedUsers)


        } catch (error) {

        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    async function getSpecificUser(login) {
        try {

            const response = await fetch(baseUrl + "");
            const data = await response.json();
            console.log(data)
            const fetchedUsers = data.results;

            setIsLoading(false)
            setUsers(fetchedUsers)


        } catch (error) {

        }

    }

    return <UsersContext.Provider value={{
        isLoading, getUsers, users
    }}>
        {children}
    </UsersContext.Provider>
}

export default UsersContext;