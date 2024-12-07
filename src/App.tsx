import { FormEvent, useState } from "react";
import { Signup } from "./Signup";
import { Signin } from "./Signin";

const App = () => {
  const [registered, setRegistered] = useState(false);

  const onSubmit = <T extends unknown>(e: FormEvent, values: T) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <>
      {registered ? (
        <Signin onSubmit={onSubmit} />
      ) : (
        <Signup onSubmit={onSubmit} />
      )}
      <button
        style={{ display: "block", margin: "0 auto" }}
        onClick={() => setRegistered((prev) => !prev)}
      >
        Переключатель
      </button>
    </>
  );
};

export default App;
