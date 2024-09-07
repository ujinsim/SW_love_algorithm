import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "../firebase/firebase_config";
import { saveUserData } from "./users";
import { saveUserIsPicked } from "./users";
import { useAuthStore } from "@/store/authStore";

const join = async (
  password,
  instagramId,
  selectedType,
  gender,
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
      instagramId,
      introduction,
      selectedEmoji
    );

    useAuthStore.getState().setInstagramId(instagramId);

    return { success: true };
  } catch (error) {
    console.error("Signup error:", error.code, error.message);
    return { success: false, error: error.message };
  }
};

export { join };
