import { ChangeEvent, FormEvent } from "react";
import { FontSize, Radius } from "./sizeEnums";

export interface FormProps {
  onSubmit: OnSubmit;
}

export type OnSubmit = <T>(event: FormEvent, formValues: T) => void;

export interface InputProps {
  description: string;
  error: string;
  icon: any;
  label: string;
  name: string;
  radius: keyof typeof Radius;
  required: boolean;
  size: keyof typeof FontSize;
  type: string;
  value: string;
  variant: "default" | "filled" | "unstyled";
}
