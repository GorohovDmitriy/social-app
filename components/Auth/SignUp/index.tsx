import { FC } from "react";
import {
  FcPortraitMode,
  FcReading,
  FcFaq,
  FcLock,
  FcWorkflow,
  FcPicture,
} from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../index.module.scss";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  position: string;
  files: any;
}

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
  };

  return (
    <div className={styles.wrapper__auth}>
      <div className={styles.auth}>
        <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
          <div
            className={[
              styles.auth__form__input,
              errors.firstName && styles.auth__form__input__error,
            ].join(" ")}
          >
            <label>
              <FcPortraitMode size={25} />
            </label>
            <input
              placeholder="First name"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span>first name is required</span>}
          </div>
          <div
            className={[
              styles.auth__form__input,
              errors.lastName && styles.auth__form__input__error,
            ].join(" ")}
          >
            <label>
              <FcReading size={25} />
            </label>
            <input
              placeholder="Last name"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <span>last name is required</span>}
          </div>
          <div
            className={[
              styles.auth__form__input,
              errors.email && styles.auth__form__input__error,
            ].join(" ")}
          >
            <label>
              <FcFaq size={25} />
            </label>
            <input
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>email is required</span>}
          </div>
          <div
            className={[
              styles.auth__form__input,
              errors.password && styles.auth__form__input__error,
            ].join(" ")}
          >
            <label>
              <FcLock size={25} />
            </label>
            <input
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>password is required</span>}
          </div>
          <div
            className={[
              styles.auth__form__input,
              errors.position && styles.auth__form__input__error,
            ].join(" ")}
          >
            <label>
              <FcWorkflow size={25} />
            </label>
            <input
              placeholder="Position"
              {...register("position", { required: true })}
            />
            {errors.position && <span>position field is required</span>}
          </div>
          <div className={styles.auth__form__file}>
            <label>
              <FcPicture size={25} /> Choose a Photo
            </label>
            <input type="file" {...register("files")} />
          </div>
          <button className={styles.auth__form__submit} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
