import { FC } from "react";
import {
  FcPortraitMode,
  FcReading,
  FcFaq,
  FcLock,
  FcWorkflow,
  FcPicture,
} from "react-icons/fc";
import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "types/signup";
import { CREATE_USER } from "lib/query";
import { NextRouter, useRouter } from "next/router";
import { WebsiteUrls } from "types/enums";
import styles from "../index.module.scss";
import FieldComponent from "../../FieldComponent";

const SignUp: FC = () => {
  const router: NextRouter = useRouter();
  const [createUser, { data, error }] = useMutation(CREATE_USER);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({
    firstName,
    lastName,
    email,
    password,
    position,
    isAuth,
  }) => {
    createUser({
      variables: {
        input: {
          firstName,
          lastName,
          email,
          password,
          position,
          isAuth: true,
        },
      },
    });
    localStorage.setItem(
      "username",
      JSON.stringify([firstName, lastName].join(" "))
    );
    reset();
    !error && router.push(WebsiteUrls.SIGNIN);
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
