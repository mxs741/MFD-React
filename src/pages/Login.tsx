import { ChangeEvent, FormEvent, useRef } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = (): JSX.Element => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const formRef = useRef({
    login: "",
    password: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    signin(formRef.current.login, () => navigate("/"));
  };

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    formRef.current = {
      ...formRef.current,
      [e.target.name]: e.target.value,
    };
  };

  return (
    <div className="form-container">
      <form onChange={handleChange} onSubmit={onSubmit} className="form">
        <input
          className="input"
          name="login"
          type="text"
          placeholder="login"
          required
        />
        <input
          className="input"
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <button className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
