import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "../firebase/firebase_config";

export const saveUserData = async (
  userId,
  selectType,
  gender,
  targetGender,
  instagramId,
  introduction,
  selectEmoji
) => {
  try {
    const db = getFirestore();
    const userDocRef = doc(db, "USERS", instagramId);

    await setDoc(
      userDocRef,
      {
        TYPE: selectType,
        GENDER: gender,
        TARGET_GENDER: targetGender,
        INTRODUCTION: introduction,
        PICKED_ID: [],
        PICK_ID: [],
        USER_ID: userId,
        EMOJI: selectEmoji,
      },
      { merge: true }
    );

    console.log("User data successfully added.");
  } catch (error) {
    console.error("Error adding user data: ", error);
    throw error;
  }
};
