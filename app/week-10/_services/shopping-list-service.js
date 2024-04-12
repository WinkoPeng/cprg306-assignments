import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


// Retrieve all items for a specific user from Firestore
export const getItems = async (userId) => {
    try {
      const docRef = collection(db, "users", userId, "items");
      const docSnap = await getDocs(docRef);
      
      const items = [];

      docSnap.forEach((doc) => {
          items.push({id: doc.id, ...doc.data() });
      });
      
      return items;      
    } 
    catch (error) {
      console.error("Error in getItems: ", error);
    }
};


  // Add a new event
export const addItem = async (userId, item) => {
    try {        
      const docRef = await addDoc(collection(db, "users", userId, "items"), item);
      return docRef.id;
    } 
    catch (error) {
      console.error("Error in addItem:", error);
    }
};