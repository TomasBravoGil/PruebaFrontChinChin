import { onAuthStateChanged } from "firebase/auth";
import React, {useContext, createContext, useEffect, useState} from "react";
import { auth } from "../firebase/config";
import { getUserProfile } from "../firebase/users-service";

export const UserContext = createContext();

export function UserContextProvider({ children }){
    const[user, setUser] = useState(null);

    const [isLoadingUser, setIsLoadingUser] = useState(true);

    useEffect(()=>{
        onAuthStateChanged(auth, async (firebaseUser) =>{
            setIsLoadingUser(true);
            //console.log(firebaseUser)
            //TODO: Update this
            if(firebaseUser && !user){
                const profile = await getUserProfile(firebaseUser.email);
                setUser(profile)
            } else{
                setUser(null);
            }
            setIsLoadingUser(false);
        });
    }, []);

    return(
        <UserContext.Provider
        value= {  {          
            user,
            setIsLoadingUser,
            isLoadingUser}
        }>
            {children}
        </UserContext.Provider>
    )
} 

export function useUser(){   
        return useContext(UserContext)
}