import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import DropdownMenu from "./ProfileMenu";

const Header: React.FC = () => {
  const nav = useNavigate();
  const { user } = useAuth();
  return (
    <div className="flex h-16 justify-end bg-[#f9f9f9]">
      <button className="mr-10">DashBoard</button>
      <button
        className="mr-10"
        onClick={() => {
          nav("/document/firstdocs");
        }}
      >
        Docs
      </button>
      <button
        className="mr-5"
        onClick={() => {
          nav("/setting/profile");
        }}
      >
        ⚙️
      </button>

      <DropdownMenu photo={user?.photoURL || ""} />
    </div>
  );
};

export default Header;
