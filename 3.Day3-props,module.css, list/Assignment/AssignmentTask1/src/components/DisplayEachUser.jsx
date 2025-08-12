import React from 'react'
import styles from './DisplayEachUser.module.css'
export const DisplayEachUser = (props) => {
  const {address,avatar,first_name,followers,id,is_following,karma, last_name,posts} = props
    console.log(address,avatar,first_name,followers,id,is_following,karma, last_name,posts)
  return (
    <div className={styles.userCard}>
        <div>
            <img className={styles.imageStyling} src={avatar}/>
        </div>
        <div>
            <h3>{first_name}</h3>
            <p>{last_name}</p>
        </div>
        <div>
            <h3>{karma}</h3>
            <p>Karma</p>
        </div>
        <div>
            <h3>{followers}</h3>
            <p>Followers</p>
        </div>
        <div>
            <h3>{posts}</h3>
            <p>Posts</p>
        </div>
        <div>
            <button className={styles.followBtn}>{is_following ? "UnFollow" : "Follow"}</button>
        </div>

    </div>
  )
}
