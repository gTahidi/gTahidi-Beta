import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addUserToWaitlist = async (userData: any, userId: string) => {
  const usersRef = doc(db, "gtahidi-waitlist", userId);
  try {
    await setDoc(usersRef, userData, {
      merge: true,
    });
  } catch (error) {}
};
