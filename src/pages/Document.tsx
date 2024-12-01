import DocsBox from "../component/DocsBox";
import SampleDocs from "../component/SampleDosc";
import Header from "../component/Header";

const Doc: React.FC = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-row overflow-y-auto">
        <div className="w-[230px] bg-[#f9f9f9]">
          <DocsBox
            boxName="First Contents"
            docsName={["First Docs", "Second Docs"]}
            endPoint={["firstdocs", "seconddocs"]}
          />
          <DocsBox
            boxName="Second Contents"
            docsName={["Third Docs", "Fourth Docs"]}
            endPoint={["thirdtdocs", "fourthdocs"]}
          />
          <DocsBox
            boxName="Third Content"
            docsName={["How to use"]}
            endPoint={["howuse"]}
          />
          <DocsBox
            boxName="Fourth Content"
            docsName={["Test1", "Test2", "Test3"]}
            endPoint={["test1", "test2", "test3"]}
          />
        </div>
        <div className="flex flex-1 justify-center overflow-y-auto">
          <SampleDocs />
        </div>
      </div>
    </div>
  );
};

export default Doc;
