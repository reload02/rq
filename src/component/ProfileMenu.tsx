import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Firebase 인증 객체 가져오기

const DropdownMenu: React.FC<{ photo: string }> = ({
  photo,
}: {
  photo: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // 메뉴 영역 참조

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

  // 메뉴 상태 토글
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // 외부 클릭 감지 핸들러
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false); // 외부 클릭 시 메뉴 닫기
    }
  };

  // 외부 클릭 감지 이벤트 등록 및 해제
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      {/* 토글 버튼 */}
      <img
        onClick={toggleMenu}
        src={photo}
        className="m-3 h-10 w-10 rounded-full"
      />

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div
          className={`visible absolute right-5 mt-2 w-48 scale-100 rounded-md bg-white shadow-lg transition-all`}
        >
          <ul>
            <li
              onClick={() => {
                nav("/setting/profile");
              }}
              className="px-4 py-2 hover:bg-gray-100"
            >
              setting
            </li>
            <li
              onClick={handleLogout}
              className="px-4 py-2 text-red-400 hover:bg-gray-100"
            >
              LogOut
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
