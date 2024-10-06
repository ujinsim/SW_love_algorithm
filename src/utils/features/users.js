import { types } from "@/constants/types";
import {
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  limit,
  startAfter,
} from "firebase/firestore";
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
        GENDER: gender,
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

export const getAllUsers = async (lastDoc = null, gender = null) => {
  try {
    const db = getFirestore();
    let usersQuery = collection(db, "USERS"); // "USERS" 컬렉션 참조

    // PICK_ID 필드가 존재하고 빈 배열인 문서만 조회
    usersQuery = query(usersQuery, where("PICKED_ID", "==", []));

    // 성별 필터링
    if (gender) {
      usersQuery = query(usersQuery, where("GENDER", "==", gender));
    }

    // 페이징을 위해 마지막 문서 이후부터 시작
    if (lastDoc) {
      usersQuery = query(usersQuery, startAfter(lastDoc));
    }

    // 최대 4개의 문서 가져오기
    usersQuery = query(usersQuery, limit(8));

    // Firestore에서 문서들 조회
    const querySnapshot = await getDocs(usersQuery);

    // 문서들 데이터 가져오기
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // 마지막 문서 스냅샷 (페이징을 위한 참조)
    const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

    return { users, lastVisibleDoc }; // 유저 데이터와 마지막 문서 반환
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
};

// compatibleWith 배열을 가져오는 함수
const getCompatibleWith = (selectType) => {
  const type = types.find((item) => item.code === selectType);
  return type ? type.compatibleWith : [];
};

export const fetchCompatibleUsers = async (instagramId, pickedUserId) => {
  try {
    const db = getFirestore();

    // 1. 현재 유저의 PICK_ID 업데이트
    await updateDoc(doc(db, "USERS", instagramId), {
      PICK_ID: pickedUserId,
    });

    // 2. 선택된 유저의 PICKED_ID 업데이트
    await updateDoc(doc(db, "USERS", pickedUserId), {
      PICKED_ID: instagramId,
    });

    console.log("Compatible user processed successfully:", pickedUserId);
    return [pickedUserId]; // 처리된 유저 ID 반환
  } catch (error) {
    console.error("Error processing compatible users:", error);
    throw error;
  }
};
