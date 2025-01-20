import React, { useState } from "react";
import styles from "./post-editor.module.css";

const PostEditor = () => {
  const [postText, setPostText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };

  return (
    <div className={styles.postEditor}>
      <textarea
        className={styles.input}
        value={postText}
        onChange={handleTextChange}
        placeholder="Compose new post"
      />
      <div className={styles.icons}>
        <span className={styles.icon}>📷</span>{" "}
        {/* Заглушка для загрузки фото */}
        <span className={styles.icon}>🎥</span>{" "}
        {/* Заглушка для загрузки видео */}
        <span className={styles.icon}>📊</span> {/* Заглушка для опросов */}
      </div>
      <button className={styles.postButton}>Post</button>
    </div>
  );
};

export default PostEditor;
