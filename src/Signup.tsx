import { ChangeEvent, useRef, useState } from "react";
import { Input } from "./Input";
import { FormProps } from "./types";

export const Signup = (props: FormProps) => {
  const { onSubmit } = props;

  const formRef = useRef({
    name: "",
    nickname: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    formRef.current = {
      ...formRef.current,
      [e.target.name]:
        e.target.name === "nickname" ? `@${e.target.value}` : e.target.value,
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
          name="name"
          type="text"
          label="Имя"
          required
          variant="filled"
          size="md"
          radius="md"
        />
        <Input
          name="nickname"
          type="text"
          label="Ник"
          required
          variant="filled"
          size="md"
          radius="md"
        />
        <Input
          name="email"
          type="email"
          label="Почта"
          required
          variant="filled"
          size="md"
          radius="md"
        />
        <div>
          Пол {<span style={{ color: "red" }}>*</span>}
          <Input
            name="gender"
            type="radio"
            label="М"
            value="male"
            variant="filled"
            required
            size="md"
            radius="md"
          />
          <Input
            name="gender"
            type="radio"
            label="Ж"
            value="female"
            variant="filled"
            required
            size="md"
            radius="md"
          />
        </div>
        <Input
          name="password"
          type="password"
          label="Пароль"
          required
          variant="filled"
          size="md"
          radius="md"
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Повторить пароль"
          required
          variant="filled"
          size="md"
          radius="md"
        />
        <button className="button">Зарегистрироваться</button>
      </form>
    </div>
  );
};
