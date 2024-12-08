import { NavLink } from "react-router-dom";
import { pages } from "../constants/const";

const Navigation = (): JSX.Element => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navigation;
