export const addUserToWaitlist = async (userData: any, userId: string) => {
  const usersRef = doc(db, "gtahidi-waitlist", userId);
  await setDoc(usersRef, userData, {
    merge: true,
  });
};
