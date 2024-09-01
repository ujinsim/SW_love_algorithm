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

import { getDoc } from "firebase/firestore";

export const getUserData = async (userId) => {
  try {
    const db = getFirestore();

    // Reference to the user's document in the USERS collection
    const userDocRef = doc(db, "USERS", userId);

    // Fetch the document
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      // Document data exists
      console.log("User data:", userDoc.data());
      return userDoc.data(); // Return the user data
    } else {
      console.log("No such user found!");
      return null; // Return null if the user document doesn't exist
    }
  } catch (error) {
    console.error("Error fetching user data: ", error);
    throw error;
  }
};
