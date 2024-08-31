"use client";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "../firebase/firebase_config";

export const saveUserData = async (
  userId,
  gender,
  instagramId,
  introduction
) => {
  try {
    const db = getFirestore();

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userDocRef = doc(db, "USERS", userId);

      await setDoc(
        userDocRef,
        {
          GENDER: gender,
          INSTAGRAM_ID: instagramId,
          INTRODUCTION: introduction,
          PICKED_ID: [],
          PICK_ID: [],
          USER_ID: userId,
        },
        { merge: true }
      );
    }

    console.log("User data successfully added.");
  } catch (error) {
    console.error("Error adding user data: ", error);
    throw error;
  }
};
