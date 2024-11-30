import { useNavigate } from "react-router-dom";
import DocsBox from "../component/DocsBox";
import ShowDocs from "../component/ShowDocs";
import Header from "../component/Header";

const Doc: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-row overflow-y-auto">
        <div className="w-[230px] bg-[#f9f9f9]">
          <DocsBox boxName="First Contents" />
          <DocsBox boxName="Second Contents" />
          <DocsBox boxName="Third Content" />
          <DocsBox boxName="Fourth Content" />
        </div>
        <div className="flex flex-1 justify-center overflow-y-auto">
          <ShowDocs />
        </div>
      </div>
    </div>
  );
};

export default Doc;
