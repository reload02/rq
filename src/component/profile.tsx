import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import LogoutButton from "./LogOut";
import { database } from "../firebase";
import { ref, get, set } from "firebase/database";
const Profile: React.FC = () => {
  const { user } = useAuth(); // Context에서 user 가져오기

  const [name, setName] = useState("");
  const [tempName, setTempName] = useState("");

  const fetchData = async () => {
    try {
      const result = await getUserName(user!.uid);
      if (result === null) setName(user?.displayName);
      setName(result); // 데이터를 상태로 저장
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    setTempName(name);
  }, []);

  const getUserName = async (userId: string): Promise<string | null> => {
    const userRef = ref(database, `users/${userId}/name`); // 읽어올 경로 설정

    try {
      const snapshot = await get(userRef); // 데이터 읽기
      if (snapshot.exists()) {
        const userData = snapshot.val(); // 데이터를 User 타입으로 변환
        console.log("User data fetched successfully:", userData);
        return userData; // 데이터를 반환
      } else {
        console.log("No user data found for the given userId.");
        return null; // 데이터가 없는 경우
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error; // 에러를 호출한 곳으로 전달
    }
  };

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  const userRef = ref(database, `users/${user.uid}/name`);

  return (
    <div className="mx-auto p-4">
      <h1 className="text-xl font-bold">User Profile</h1>
      <div className="flex pt-5">
        <img
          src={user.photoURL || ""}
          alt="User Avatar"
          className="h-16 w-16 rounded-full"
        />
        <div className="p-2">
          <p>Name: {name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <div className="p-10">
        <div>
          <input
            className="border-2"
            value={tempName}
            onChange={(e) => {
              setTempName(e.target.value);
            }}
          />{" "}
          <button
            onClick={() => {
              set(userRef, tempName);
              setName(tempName);
              setTempName("");
            }}
            className="mx-auto h-9 w-11 rounded-lg bg-blue-300"
          >
            변경
          </button>
        </div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Profile;
