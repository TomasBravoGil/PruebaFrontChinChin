import { signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from "./config"

export const registerWithEmailAndPassword = async () => {}

export const signInWithEmailAndPassword = async () => {}

export const signInWithGoogle = async () => {   
    try {
        const result = await signInWithPopup(auth, googleProvider);
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