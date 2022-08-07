import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener, signOutUser, createUserDocumentsFromAuth } from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    // signOutUser();
    // UserContext --- firebase/onAuthStateChanged
    useEffect(() => {
        async function fetchData() {
            const unsubscribe = onAuthStateChangedListener ((user) => {
                if (user) {
                    createUserDocumentsFromAuth(user);
                }
                setCurrentUser(user);
            });

            return unsubscribe;
        }
        fetchData();
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};