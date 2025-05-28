import styles from "./PostForm.module.css";

import { Form } from "react-router-dom";

export function PostForm() {
  return (
    <div className={styles.formWrapper}>
      <Form method="post" className={styles.postForm}>
        <label>
          Tytuł:
          <input type="text" name="title" required />
        </label>
        <br />

        <label>
          Treść:
          <textarea name="content" required />
        </label>
        <br />

        <label>
          Autor:
          <input type="text" name="author" required />
        </label>
        <br />

        <button type="submit">Dodaj post</button>
      </Form>
    </div>
  );
}
