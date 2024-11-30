import { useNavigate } from "react-router-dom";

const DocsBox: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className="ml-4">
      <h1 className="font-bold">1번 문서 박스</h1>
      <p
        className="hover:bg-slate-500"
        onClick={() => {
          nav("/document/test1");
        }}
      >
        1번 문서
      </p>
      <p
        className="hover:bg-slate-500"
        onClick={() => {
          nav("/document/test2");
        }}
      >
        2번 문서
      </p>
      <p
        className="hover:bg-slate-500"
        onClick={() => {
          nav("/document/test3");
        }}
      >
        3번 문서
      </p>
    </div>
  );
};

export default DocsBox;
