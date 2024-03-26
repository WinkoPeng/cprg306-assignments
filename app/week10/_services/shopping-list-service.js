import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemRef = collection(db, `users/${userId}/items`);
  const querySnapshot = await getDocs(itemRef);
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      data: doc.data(),
    });
  });

  return items;
};

export const addItem = async (userId, item) => {
  const itemRef = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemRef, item);
  return docRef.id;
};