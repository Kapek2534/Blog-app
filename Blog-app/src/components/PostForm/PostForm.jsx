import styles from "./PostForm.module.css";

import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

export function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitSuccessful },
    reset,
  } = useForm({
    mode: "onChange",
  });

  if (isSubmitSuccessful) {
    return (
      <>
        <span className={styles.title}>Post dodany!</span>
        <button onClick={() => reset()}>Dodaj kolejny post</button>
      </>
    );
  }

  const onSubmit = (data) => {
    console.log("Dane z formularza:", data);

    reset();
  };

  return (
    <div className={styles.formWrapper}>
      <Form onSubmit={handleSubmit(onSubmit)} className={styles.postForm}>
        <div>
          <label htmlFor="title">Tytuł:</label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Podaj tytuł",
            })}
          />
          {errors.title && (
            <span className={styles.error}>{errors.title.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="content">Treść:</label>
          <textarea
            id="content"
            {...register("content", {
              required: "Podaj treść",
            })}
          />
          {errors.content && (
            <span className={styles.error}>{errors.content.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="author">Autor:</label>
          <input
            id="author"
            {...register("author", {
              required: "Podaj autora",
            })}
          />
          {errors.author && (
            <span className={styles.error}>{errors.author.message}</span>
          )}
        </div>
        <button disabled={!isDirty}>Dodaj post</button>
      </Form>
    </div>
  );
}
