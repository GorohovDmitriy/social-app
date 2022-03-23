import { FC, ReactNode } from "react";
import { FieldErrors, FieldPath, UseFormRegister } from "react-hook-form";
import { Inputs } from "types/signup";
import styles from "../Auth/index.module.scss";

interface IFieldProps {
  errors: FieldErrors<Inputs>;
  register: UseFormRegister<Inputs>;
  name: FieldPath<Inputs>;
  labelIcon: ReactNode;
  errorMsg: string;
  placeholder: string;
}

const FieldComponent: FC<IFieldProps> = ({
  errors,
  register,
  errorMsg,
  name,
  labelIcon,
  placeholder,
}) => {
  return (
    <div
      className={[
        styles.auth__form__input,
        errors.firstName && styles.auth__form__input__error,
      ].join(" ")}
    >
      <label>{labelIcon}</label>
      <input
        {...register(name, { required: true })}
        placeholder={placeholder}
        name={name}
      />
      {errors.firstName && <span>{errorMsg}</span>}
    </div>
  );
};

export default FieldComponent;
