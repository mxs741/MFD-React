import { NavLink, useNavigate } from "react-router-dom";
import { pages, Paths } from "../constants/const";
import { useAuth } from "../context/AuthProvider";

const Navigation = (): JSX.Element => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    signout(() => navigate(Paths.Login));
  };

  return (
    <nav style={{ display: "flex" }}>
      <ul className="nav-list">
        {Object.entries(pages).map(([key, value]) => (
          <li key={key}>
            <NavLink
              className={({ isActive }) =>
                `nav-list-item ${isActive && "active"}`
              }
              to={key !== "Home" ? `categories/${value}` : value}
            >
              {key}
            </NavLink>
          </li>
        ))}
      </ul>
      {user && (
        <button className="button" onClick={handleSignout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navigation;
