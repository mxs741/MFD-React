import { NavLink, useParams } from "react-router-dom";
import { CategoryType } from "../types/types";
import { useData } from "../hooks/useData";

const Category = (): JSX.Element => {
  const { name } = useParams();
  const data = useData(name);

  return (
    <div style={{ marginTop: "50px", fontSize: "20px" }}>
      <ul>
        {Array.isArray(data) &&
          data.map((item: CategoryType) => {
            return (
              <li key={item.id}>
                <NavLink
                  className="list-item"
                  to={`/categories/${name}/${item.id}`}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Category;
