import { useNavigate } from "react-router-dom";
const Doc: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="w-[230px] bg-blue-500">
        <button
          onClick={() => {
            nav("/");
          }}
          className="w-[100px]"
        >
          홈으로
        </button>
      </div>
      <div className="flex-1 bg-green-500"></div>
    </div>
  );
};

export default Doc;
