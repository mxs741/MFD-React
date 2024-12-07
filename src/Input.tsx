import { AtSign } from "lucide-react";
import { FontSize, Padding, Radius } from "./sizeEnums";
import { InputProps } from "./types";

export const Input = (props: Partial<InputProps>) => {
  const {
    description,
    error,
    label,
    name,
    radius,
    required,
    size,
    type,
    value = "",
    variant,
  } = props;

  return (
    <div
      className="input-container"
      style={{
        flexDirection: type === "radio" ? "row-reverse" : "column",
        justifyContent: "start",
      }}
    >
      {label && (
        <label
          id={name}
          style={{ fontSize: size && `${FontSize[size] + 2}px` }}
        >
          {label}
          {required && type !== "radio" && (
            <span style={{ color: "red" }}> *</span>
          )}
        </label>
      )}

      {description && (
        <span
          style={{
            fontSize: size && `${FontSize[size] - 2}px`,
            color: "#ccc",
          }}
        >
          {description}
        </span>
      )}

      <div
        style={{
          fontSize: size && `${FontSize[size]}px`,
          borderRadius: radius && `calc(${Radius[radius]} * 1em)`,
          width: "inherit",
          position: "relative",
        }}
      >
        {name === "nickname" && (
          <div
            className="icon-wrapper"
            style={{ width: `${size && Padding[size]}` }}
          >
            <AtSign size={size && FontSize[size]} />
          </div>
        )}
        <input
          style={{
            fontSize: size && `${FontSize[size]}px`,
            borderRadius: radius && `calc(${Radius[radius]} * 1em)`,
            paddingLeft:
              name === "nickname" ? `${size && Padding[size]}` : "6px",
          }}
          className={`input ${variant ?? "default"} ${error && "error"}`}
          name={name}
          placeholder={name}
          value={type === "radio" ? value : undefined}
          type={type}
          required={required}
        />
      </div>

      {error && (
        <span
          style={{ fontSize: size && `${FontSize[size] - 3}px`, color: "red" }}
        >
          {error}
        </span>
      )}
    </div>
  );
};
