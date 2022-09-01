import React, { useEffect } from "react";

const getStorageData = (keyName, defaultValue) => {

    const savedItem = localStorage.getItem(keyName);
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || defaultValue;
}

export const useLocalStorage = (keyName, initialValue) => {
    const [itemsInStorage, setItemsInStorage] = React.useState(() => {
        return getStorageData(keyName, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(itemsInStorage));
    }, [keyName, itemsInStorage]);

    return [itemsInStorage, setItemsInStorage];
}