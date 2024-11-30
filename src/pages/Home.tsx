import { useNavigate } from "react-router-dom";
import LoginButton from "../component/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Home: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    if (!isLoading && isAuthenticated) nav("document/test1");
  }, [isLoading]);
  const nav = useNavigate();
  return (
    <div>
      <LoginButton />
    </div>
  );
};

export default Home;
