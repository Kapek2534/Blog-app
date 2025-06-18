import { useNavigate } from "react-router-dom";
import { BACK_END_URL } from "../../constants/api";
import styles from "./PostForm.module.css";

import { LightmodeContext } from "../../contexts/LightmodeContext";

import { useForm } from "react-hook-form";
import { useContext } from "react";

export function PostForm() {
  const navigate = useNavigate();

  const [isDark] = useContext(LightmodeContext);

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
        <button className={styles.addAnotherPost} onClick={() => reset()}>
          Dodaj kolejny post
        </button>
      </>
    );
  }

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${BACK_END_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          description: data.content,
          author: data.author,
        }),
      });

      if (!response.ok) {
        throw new Error("Nie udało się dodać posta");
      }

      reset();
      navigate("/posts");
    } catch (error) {
      console.error(error);
      alert("Błąd dodawania posta");
    }
  };

  return (
    <div className={`${styles.formWrapper} ${isDark && styles.dark}`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.postForm} ${isDark && styles.dark}`}
      >
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
      </form>
    </div>
  );
}
