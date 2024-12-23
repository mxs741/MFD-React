import { NavLink, useParams } from "react-router-dom";
import { CategoryType } from "../../types/types";
import { useLoadOnScroll } from "../../hooks/useLoadOnScroll";
import { useCallback, useEffect, useRef, useState } from "react";

export const Category = (): JSX.Element => {
  const { name } = useParams();

  const [pageNumber, setPageNumber] = useState(1);
  const { data, hasMore, isLoading, error } = useLoadOnScroll(
    name!,
    pageNumber
  );

  useEffect(() => {
    setPageNumber(1);
  }, [name]);

  const observer = useRef<IntersectionObserver>();

  const ref = useCallback(
    (node: HTMLLIElement) => {
      if (isLoading) return;
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  return (
    <div style={{ marginTop: "50px", fontSize: "20px" }}>
      <ul style={{ height: "75vh", overflowX: "auto" }}>
        {Array.isArray(data) &&
          data.map((item: CategoryType, index: number) => {
            if (data.length - 15 === index + 1) {
              return (
                <li ref={ref} key={index}>
                  <NavLink
                    className="list-item"
                    to={`/categories/${name}/${item.id}`}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={index}>
                <NavLink
                  className="list-item"
                  to={`/categories/${name}/${item.id}`}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        {isLoading && <li>Loading</li>}
        {error && <li>Error</li>}
      </ul>
    </div>
  );
};
