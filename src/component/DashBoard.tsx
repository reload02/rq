import { ref, get } from "firebase/database";
import { database } from "../firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import ChartComponent from "./ChartComponent";

export interface DailyValues {
  [date: string]: number;
}

const DashBoard: React.FC = () => {
  const [data, setData] = useState<DailyValues | null>(null);
  const { user } = useAuth();

  const fetchData = async () => {
    try {
      const result = await getUser(user!.uid);
      setData(result); // 데이터를 상태로 저장
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const data1: DailyValues = {
    "2024-11-01": 1,
    "2024-11-02": 2,
    "2024-11-03": 4,
    "2024-11-04": 7,
    "2024-11-05": 2,
    "2024-11-06": 4,
  };

  useEffect(() => {
    fetchData(); // 컴포넌트 마운트 시 데이터 로드
  }, []);
  if (!data) return;
  return (
    <>
      <div className="mx-auto my-[200px] w-[600px]">
        <ChartComponent data={data} />
      </div>
    </>
  );
};

const getUser = async (userId: string): Promise<DailyValues | null> => {
  const userRef = ref(database, `useage/${userId}`); // 읽어올 경로 설정

  try {
    const snapshot = await get(userRef); // 데이터 읽기
    if (snapshot.exists()) {
      const userData = snapshot.val() as DailyValues; // 데이터를 User 타입으로 변환
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

export default DashBoard;
