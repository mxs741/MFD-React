import { useNavigate } from "react-router-dom";
import { Paths } from "../constants/const";
import { useAuth } from "../context/AuthProvider";

const Home = (): JSX.Element => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(Paths.Login);
  };

  return (
    <div>
      <h1 className="title">Hello!</h1>
      {!user && (
        <button className="button login-button" onClick={handleLogin}>
          login
        </button>
      )}
    </div>
  );
};

export default Home;
