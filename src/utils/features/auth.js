import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "../firebase/firebase_config";
import { saveUserData } from "./users";

const join = async (
  password,
  instagramId,
  selectedType,
  gender,
  targetGender,
  introduction,
  selectedEmoji
) => {
  try {
    const auth = getAuth();
    const email = `${instagramId}@naver.com`;

    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await saveUserData(
      user.uid,
      selectedType,
      gender,
      targetGender,
      instagramId,
      introduction,
      selectedEmoji
    );

    return { success: true };
  } catch (error) {
    console.error("Signup error:", error.code, error.message);
    return { success: false, error: error.message };
  }
};

export { join };
