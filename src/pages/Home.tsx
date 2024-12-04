import { useNavigate } from "react-router-dom";
import Login from "../component/login";
import { useAuth } from "../Hooks/useAuth";
import { useEffect } from "react";

const Home: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/document/test1"); // 리디렉션은 렌더링 후 실행
    }
  }, [user, navigate]);

  if (user === null) {
    return <Login />; // 로그인 컴포넌트 렌더링
  }

  // 로딩 상태나 다른 처리 로직이 필요하면 여기에 추가
  return null;
};

export default Home;
