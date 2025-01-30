import styles from "./profile.module.css";

import ArrowIcon from "../../assets/arrow.svg?react";
import EditIcon from "../../assets/edit.svg";
import ShareIcon from "../../assets/share.svg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.top}>
        <ArrowIcon className={styles.arrow} />
        <div className={styles.nameContainer}>
          <div className={styles.username}>Username</div>
          <div className={styles.posts}>Posts: 42</div>
        </div>
      </div>

      <div className={styles.cover}></div>

      <div className={styles.info}>
        <div className={styles.left}>
          <img src="https://placehold.co/80x80" alt="Avatar" className={styles.avatar} />
          <div className={styles.details}>
            <div className={styles.name}>Username</div>
            <div className={styles.nickname}>@nickname</div>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.edit}>
          <img src={EditIcon} alt="Edit" className={styles.icon} />
            Edit Profile
          </button>
          <button className={styles.share}>
          <img src={ShareIcon} alt="Share" className={styles.icon} />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
