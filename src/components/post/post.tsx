import styles from "./post.module.css";

import MoreIcon from "../../assets/more.svg?react";
import LikeIcon from "../../assets/like.svg?react";
import CommentIcon from "../../assets/comment.svg?react";
import BookmarkIcon from "../../assets/bookmarks.svg?react";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            className={styles.avatar}
          />
          <span className={styles.username}>Username</span>
        </div>
        <MoreIcon className={styles.icon} />
      </div>

      <div className={styles.content}>
        <img
          src="https://via.placeholder.com/400x300"
          alt="Post content"
          className={styles.placeholder}
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.actions}>
          <LikeIcon className={styles.icon} />
          <CommentIcon className={styles.icon} />
        </div>
        <BookmarkIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default Post;
