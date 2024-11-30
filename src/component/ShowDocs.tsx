import { useParams } from "react-router-dom";

const ShowDocs: React.FC = () => {
  const { docsID } = useParams();
  return <h1>문서의 제목 : {docsID}</h1>;
};

export default ShowDocs;
