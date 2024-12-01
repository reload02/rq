import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const nav = useNavigate();
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
        className="mr-10"
        onClick={() => {
          nav("/profile/profile");
        }}
      >
        Profile
      </button>
    </div>
  );
};

export default Header;
