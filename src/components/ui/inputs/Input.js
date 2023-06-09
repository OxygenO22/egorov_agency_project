import { sendEmail } from "../../../store/emailSlice/EmailSlice";
import { openPopup } from "../../../store/popupSlice/PopupSlice";
import styles from "./Input.module.scss";
import { SubmitButton } from "../buttons/SubmitButton";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";


export const Input = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    dispatch(sendEmail(data.Email));
    dispatch(openPopup());
    reset();
  };

  return (
    <form className={styles.input__form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.input__wrapper}>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter your Email and get notified"
          {...register("Email", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Введите email в правильном формате",
            },
          })}
        />
        <div className={styles.input__submitbutton}>
          <SubmitButton />
        </div>
      </div>
      <div className={styles.input__error_wrapper}>
        {errors.Email && (
          <span className={styles.input__error}>{errors.Email.message}</span>
        )}
      </div>
    </form>
  );
};
