import { openPopup } from '../../../store/popupSlice/PopupSlice';
import React from 'react';
import { sendEmail} from '../../../store/emailSlice/EmailSlice';
import styles from './Input.module.scss';
import { SubmitButton } from '../buttons/SubmitButton';
import { useTsDispatch } from '../../hooks/tsHook';
import { Resolver, useForm } from 'react-hook-form';

type FormValues = {
  Email: string;
};

const resolver: any = async (values: any) => {
  return {
    values: values.Email ? values : {},
    errors: !values.Email
      ? {
          Email: {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Введите email в правильном формате",
            },
          },
        }
      : {},
  };
};

export const Input = () => {
  const dispatch = useTsDispatch();
  
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset
  } = useForm<FormValues>({
    resolver,
    mode: 'onBlur',
  });

  const onSubmit = (data: any) => {
    dispatch(sendEmail(data.Email));
    dispatch(openPopup());
    reset();
  }


  return (
      <form className={styles.input__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input__wrapper}>
          <input 
            className={styles.input}
            type='email'
            placeholder='Enter your Email and get notified'
            {...register('Email')} 
          />
          <div className={styles.input__submitbutton}>
            <SubmitButton />
          </div>
        </div>
        <div className={styles.input__error_wrapper}>
          {errors.Email && <span className={styles.input__error}>{errors.Email.message}</span>}
        </div>
      </form>
  )
}
