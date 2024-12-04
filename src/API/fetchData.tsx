import { useParams } from "react-router-dom";
import DocsTemplete from "../Docs/DocsTemplete";
import SampleDocs from "../Docs/SampleDosc";

const fetchDoc = () => {
  const { docsID } = useParams();
  switch (docsID) {
    case "test1":
      return <SampleDocs />;
    case "test2":
      return <div></div>;
    default:
      return <DocsTemplete />;
  }
};

export default fetchDoc;
