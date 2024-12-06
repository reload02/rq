import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useAuth } from "../Hooks/useAuth";
import { ref, get, set } from "firebase/database";
import { database } from "../firebase";

const Login: React.FC = () => {
  const { setUser } = useAuth(); // Context에서 setUser 가져오기

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user); // Context의 상태 업데이트
      console.log("User info:", user);
      const userRef = ref(database, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if (!snapshot.exists()) {
        // 사용자 정보가 없으면 새로 추가
        await set(userRef, {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
        });
        console.log("New user added to database.");
      } else {
        console.log("Existing user logged in.");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-6 text-2xl font-bold">Welcome to the App</h1>
      <button
        onClick={handleGoogleLogin}
        className="rounded-md bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
