import { useNavigate } from "react-router-dom";
import "./tailwind.css";

interface DocsBoxProps {
  boxName: string;
}

const DocsBox: React.FC<DocsBoxProps> = ({ boxName }) => {
  const nav = useNavigate();
  return (
    <div className="ml-4 w-[170px]">
      <h1 className="">{boxName}</h1>
      <p
        className="docList"
        onClick={() => {
          nav("/document/test1");
        }}
      >
        first Docs
      </p>
      <p
        className="docList"
        onClick={() => {
          nav("/document/test2");
        }}
      >
        second Docs
      </p>
      <p
        className="docList"
        onClick={() => {
          nav("/document/test3");
        }}
      >
        third Docs
      </p>
    </div>
  );
};

export default DocsBox;
