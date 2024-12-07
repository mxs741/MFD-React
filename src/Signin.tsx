import { ChangeEvent, useRef, useState } from "react";
import { Input } from "./Input";
import { FormProps } from "./types";

export const Signin = (props: FormProps) => {
  const { onSubmit } = props;

  const formRef = useRef({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    formRef.current = {
      ...formRef.current,
      [e.target.name]: e.target.value,
    };
    console.log(formRef.current);
  };

  return (
    <div className="form-container">
      <form
        onChange={handleChange}
        onSubmit={(e) => onSubmit(e, formRef.current)}
        className="form"
      >
        <Input
          name="email"
          type="email"
          label="Почта"
          required
          variant="filled"
          size="md"
          radius="md"
        />
        <Input
          name="password"
          type="password"
          label="Пароль"
          size="md"
          radius="md"
        />
        <button className="button">Войти</button>
      </form>
    </div>
  );
};
