import { types } from "@/constants/types";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  deleteDoc,
  arrayRemove,
} from "firebase/firestore";
import { getUserData } from "./users";

// compatibleWith 배열을 가져오는 함수
const getCompatibleWith = (selectType) => {
  const type = types.find((item) => item.code === selectType);
  return type ? type.compatibleWith : [];
};

// Firestore에서 뽑기 가능한 유저를 가져오는 함수
export const fetchCompatibleUsers = async (
  targetGender,
  selectType,
  instagramId
) => {
  const compatibleWith = getCompatibleWith(selectType);

  try {
    const db = getFirestore();
    const docRef = doc(db, "IS_PICKED", "FALSE");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.log("No document found for IS_PICKED/FALSE.");
      return []; // 문서가 없는 경우 빈 배열 반환
    }

    const data = docSnap.data();

    // 중첩된 성별 및 타입에 해당하는 배열 접근
    const genderData = data[targetGender]; // 예: data["FEMALE"]

    if (!genderData) {
      console.log(`No data found for gender: ${targetGender}`);
      return []; // 성별 데이터가 없는 경우 빈 배열 반환
    }

    for (const type of compatibleWith) {
      if (genderData[type]) {
        const typeArray = genderData[type]; // 예: genderData["AAA"]

        if (Array.isArray(typeArray) && typeArray.length > 0) {
          const pickedUserId = typeArray[0]; // 첫 번째 유저

          // 1. 현재 유저 정보 수정
          await updateDoc(doc(db, "USERS", instagramId), {
            PICK_ID: pickedUserId,
          });

          // 2. 픽된 유저 정보 수정
          await updateDoc(doc(db, "USERS", pickedUserId), {
            PICKED_ID: instagramId,
          });

          // 3. 픽된 유저를 "IS_PICKED/TRUE"로 이동
          const trueDocRef = doc(db, "IS_PICKED", "TRUE");
          await updateDoc(trueDocRef, {
            [`${targetGender}.${type}`]: arrayUnion(pickedUserId),
          });

          const falsedocRef = doc(db, "IS_PICKED", "FALSE");
          // 4. 원래 FALSE 문서에서 픽된 유저를 제거
          await updateDoc(falsedocRef, {
            [`${targetGender}.${type}`]: arrayRemove(pickedUserId),
          });

          console.log("Compatible user processed successfully:", pickedUserId);
          return [pickedUserId]; // 처리된 유저를 반환
        } else {
          console.log(
            `No users found for gender: ${targetGender} and type: ${type}`
          );
        }
      }
    }

    // 모든 타입을 처리했지만 유저가 없을 경우 대기 중 상태로 분류
    console.log(
      "No compatible users found. Waiting for users to be available."
    );
    return []; // 유저가 없을 경우 빈 배열 반환
  } catch (error) {
    console.error("Error fetching compatible users:", error);
    throw error;
  }
};
