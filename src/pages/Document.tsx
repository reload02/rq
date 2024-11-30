import { useNavigate } from "react-router-dom";
import DocsBox from "../component/DocsBox";
import ShowDocs from "../component/ShowDocs";
import Header from "../component/Header";

const Doc: React.FC = () => {
  const nav = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex h-screen">
        <div className="h-full w-[230px] bg-[#f9f9f9]">
          <button
            onClick={() => {
              nav("/");
            }}
            className="w-[100px]"
          >
            홈으로
          </button>
          <DocsBox boxName="1번 내용들" />
          <DocsBox boxName="2번 내용들" />
          <DocsBox boxName="3번 내용들" />
          <DocsBox boxName="4번 내용들" />
        </div>
        <div className="flex-1 overflow-y-auto">
          <ShowDocs />
        </div>
      </div>
    </div>
  );
};

export default Doc;
