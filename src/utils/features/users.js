import { types } from "@/constants/types";
import {
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "../firebase/firebase_config";
import { arrayUnion } from "firebase/firestore";

export const saveUserData = async (
  userId,
  selectType,
  gender,

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
        INSTAGRAM_ID: instagramId,
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

export const saveUserIsPicked = async (instagramId, selectType, gender) => {
  try {
    const db = getFirestore();
    const userDocRef = doc(db, `IS_PICKED`, "FALSE");

    const updateData = {
      [`${gender}.${selectType}`]: arrayUnion(instagramId),
    };

    await updateDoc(userDocRef, updateData);

    console.log("User data successfully added.");
  } catch (error) {
    console.error("Error adding user data: ", error);
    throw error;
  }
};

//남자 여자 필터
// 남자중에 조회
// 여자중에 조회
// isPick에 들어가면 해당 유저 조회

/**
 * 특정 Instagram ID를 가진 사용자의 데이터를 Firestore에서 가져오는 함수
 * @param {string} instagramId - 조회할 사용자의 Instagram ID
 * @returns {Promise<Object|null>} - 사용자의 데이터가 담긴 객체 또는 데이터가 없는 경우 null
 */
export const getUserData = async (instagramId) => {
  try {
    const db = getFirestore();
    const userDocRef = doc(db, "USERS", instagramId); // "users" 컬렉션에 있는 문서를 조회
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
