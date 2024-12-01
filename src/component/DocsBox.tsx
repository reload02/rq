import { useNavigate } from "react-router-dom";
import "./tailwind.css";

interface DocsBoxProps {
  boxName: string;
  docsName: string[];
  endPoint?: string[];
}

const DocsBox: React.FC<DocsBoxProps> = ({ boxName, docsName, endPoint }) => {
  const nav = useNavigate();
  return (
    <div className="ml-4 w-[170px]">
      <h1 className="">{boxName}</h1>
      {docsName.map((docName, index) => {
        return (
          <p
            key={docName}
            className="docList"
            onClick={() => {
              endPoint && endPoint[index]
                ? nav(`./../${endPoint[index]}`)
                : nav(`./../${docName}`);
            }}
          >
            {docName}
          </p>
        );
      })}
    </div>
  );
};

export default DocsBox;
