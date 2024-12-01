import { useNavigate } from "react-router-dom";
import LoginButton from "../component/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Home: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    const nav = useNavigate();
    if (!isLoading && isAuthenticated) nav("document/test");
  }, [isLoading]);

  return (
    <div>
      <LoginButton />
    </div>
  );
};

export default Home;
