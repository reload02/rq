import Header from "../component/Header";
import { useAuth0 } from "@auth0/auth0-react";
import DocsBox from "../component/DocsBox";
import { useState } from "react";
const Profile: React.FC = () => {
  const [key, setKey] = useState(0);
  const { user } = useAuth0();
  const ps: string | undefined = user?.picture;
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-row overflow-y-auto">
        <div className="w-[230px] bg-[#f9f9f9]">
          <DocsBox boxName="Profile" />
          <DocsBox boxName="Organize" />
        </div>
        <div className="flex flex-col justify-center overflow-y-auto">
          <div className="flex flex-row">
            <img src={ps} className="h-10 w-10" />
            <div>{user?.name}</div>
          </div>
          <div className="flex flex-row">
            <textarea
              className="h-[50px] w-[500px] resize-none bg-slate-200 p-3 focus:outline-none"
              readOnly
              value={key}
            ></textarea>
            <button
              className="w-20 rounded-xl bg-red-300"
              onClick={() => {
                setKey(Math.floor(Math.random() * 10000000000000000));
              }}
            >
              생성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
