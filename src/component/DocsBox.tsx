import { useNavigate } from "react-router-dom";
import "./tailwind.css";

interface DocsBoxProps {
  boxName: string;
}

const DocsBox: React.FC<DocsBoxProps> = ({ boxName }) => {
  const nav = useNavigate();
  return (
    <div className="ml-4 w-[170px]">
      <h1 className="font-bold">{boxName}</h1>
      <p
        className="docList"
        onClick={() => {
          nav("/document/test1");
        }}
      >
        1번 문서
      </p>
      <p
        className="docList"
        onClick={() => {
          nav("/document/test2");
        }}
      >
        2번 문서
      </p>
      <p
        className="docList"
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
