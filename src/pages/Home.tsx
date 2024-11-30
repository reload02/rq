import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const nav = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          nav("/document");
        }}
      >
        문서 보러가기
      </button>
    </div>
  );
};

export default Home;
