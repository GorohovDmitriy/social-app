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
import { Inputs } from "types/signup";
import FieldComponent from "../../FieldComponent";

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
          <FieldComponent
            errorMsg="first name is required"
            errors={errors}
            placeholder="First Name"
            register={register}
            name="firstName"
            labelIcon={<FcPortraitMode size={25} />}
          />
          <FieldComponent
            errorMsg="last name is required"
            errors={errors}
            placeholder="Last Name"
            register={register}
            name="lastName"
            labelIcon={<FcReading size={25} />}
          />
          <FieldComponent
            errorMsg="email is required"
            errors={errors}
            placeholder="Email"
            register={register}
            name="email"
            labelIcon={<FcFaq size={25} />}
          />
          <FieldComponent
            errorMsg="password is required"
            errors={errors}
            placeholder="Password"
            register={register}
            name="password"
            labelIcon={<FcLock size={25} />}
          />
          <FieldComponent
            errorMsg="position field is required"
            errors={errors}
            placeholder="Position"
            register={register}
            name="position"
            labelIcon={<FcWorkflow size={25} />}
          />
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
