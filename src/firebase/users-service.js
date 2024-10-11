import {
    doc,
    addDoc,
    collection,
    updateDoc,
    getDoc,
    setDoc,
    getDocs,
    query,
    where,
  } from "firebase/firestore";
  import { db } from "./config.js";
  
  export const usersCollection = "users";
  
  export async function createUser(userId, data) {
  
      return setDoc(doc(db, usersCollection, userId), data);
    
  }

  export async function getUserProfile(email) {
    const userQuery = query(
      collection(db, usersCollection),
      where("email", "==", email)
    );
  
    const results = await getDocs(userQuery);
  
    if (results.size > 0) {
      const [user] = results.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      return user;
    }
  
    return null;
  }