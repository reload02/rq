import React from "react";
import { auth } from "../firebase"; // Firebase 인증 객체 가져오기
import { useAuth } from "../Hooks/useAuth"; // 사용자 정보를 제공하는 커스텀 훅
import { useNavigate } from "react-router-dom";

const LogoutButton: React.FC = () => {
  const { setUser } = useAuth(); // Auth Context에서 사용자 상태 변경 함수 가져오기
  const nav = useNavigate();
  const handleLogout = async () => {
    try {
      await nav("/");
      await auth.signOut(); // Firebase 로그아웃 처리
      setUser(null); // 사용자 상태를 null로 초기화

      console.log("User logged out");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-30 mx-auto rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
