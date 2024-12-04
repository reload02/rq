import Header from "../component/Header";
import DocsBox from "../component/DocsBox";
import { useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import LogoutButton from "../component/LogOut";
import { useParams } from "react-router-dom";
import Profile from "../component/profile";

const Setting: React.FC = () => {
  const { d } = useParams();
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-row overflow-y-auto">
        <div className="w-[230px] bg-[#f9f9f9]">
          <DocsBox
            boxName="Profile"
            docsName={["Your Profile"]}
            endPoint={["profile"]}
          />
          <DocsBox
            boxName="Organize"
            docsName={["General", "APIkey", "AdminKey"]}
          />
        </div>
        {d === "profile" ? <Profile /> : <GrantAPI />}
      </div>
    </div>
  );
};

const GrantAPI: React.FC = () => {
  const [key, setKey] = useState<number>();
  const { user } = useAuth();
  if (!user) return null;
  const ps: string | undefined = user?.photoURL || "";
  return (
    <div className="flex flex-1 flex-col p-10">
      <div className="flex flex-row justify-center">
        <img src={ps} className="h-10 w-10" />
        <div>{user.displayName}</div>
      </div>
      <div className="flex flex-row justify-center">
        <textarea
          placeholder="발급버튼을 누르시오"
          className="h-[50px] w-[500px] resize-none bg-slate-200 p-3 focus:outline-none"
          readOnly
          value={key}
        ></textarea>
        {typeof key !== "number" ? (
          <button
            className="w-20 rounded-xl bg-red-300"
            onClick={() => {
              setKey(Math.floor(Math.random() * 10000000000000000));
            }}
          >
            발급
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Setting;
