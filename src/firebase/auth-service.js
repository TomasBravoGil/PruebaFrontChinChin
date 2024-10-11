import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from "./config"
import { createUser } from "./users-service";

export const registerWithEmailAndPassword = async (email, password, extraData) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await createUser(result.user.uid, {
            email,
            ...extraData
        })
    } catch (error) {
        console.log(error);
    }

}

export const logInWithEmailAndPassword = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
    }


}

export const signInWithGoogle = async () => {   
    try {
        const result = await signInWithPopup(auth, googleProvider);
        await createUser(result.user.uid, {
            email,
            ...extraData
        })
    } catch (error) {
        console.error(error);
    }
}



export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log({error})
    }
}