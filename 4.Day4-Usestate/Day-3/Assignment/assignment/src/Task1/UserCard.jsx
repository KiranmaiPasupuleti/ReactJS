import React, { useState } from "react";
import styles from './styling.module.css'
const UserCard = (props) => {
  console.log(props)
  const { name, avatar, posts, followers, address,isFollowing } = props.data;
  const [toggle,setToggle] = useState(isFollowing)
  console.log(toggle)
  return (
    <div className={styles.usercardContainer}>
      <div>
        <img className={styles.avatar} src={avatar} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{address}</p>
        <div className={styles.postsFollowers}>
          <div className={styles.posts}>
            <h3>Posts</h3>
            <p>{posts}</p>
          </div>
          <div className={styles.followers}>
            <h3>Followers</h3>
            <p>{followers}</p>
          </div>
        </div>
      </div>
      <div>
        <button className={styles.btn} onClick={() => setToggle(!toggle)}>{toggle ? "UnFollow" : "Follow"}</button>
      </div>
    </div>
  );
};

export default UserCard;
