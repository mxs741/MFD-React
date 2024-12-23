import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { pages, Paths } from "../../constants/const";

export const Navigation = (): JSX.Element => {
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
