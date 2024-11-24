import { useWindowScroll } from "./useWindowScroll";

export const Demo = () => {
  const [scroll, scrollTo] = useWindowScroll();

  console.log("render");
  return (
    <div style={{ height: "200vh" }}>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
};
