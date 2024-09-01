import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../firebase/firebase_config";

const signIn = async (instagramId, password) => {
  const email = `${instagramId}@naver.com`;
  try {
    const auth = getAuth();

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;

    console.log("Login successful:", user);

    return { user };
  } catch (error) {
    const errorMessage = {
      "auth/user-not-found": "User not found",
      "auth/wrong-password": "Incorrect password",
      "auth/invalid-email": "Invalid email format",
    };

    alert(errorMessage[error.code] || "Login failed");
    console.error("Login error:", error);

    throw error;
  }
};

export { signIn };
