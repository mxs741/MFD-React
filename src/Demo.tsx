import { useToggle } from "./useToggle";

export const Demo = () => {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return <button onClick={() => toggle()}>{value}</button>;
};
