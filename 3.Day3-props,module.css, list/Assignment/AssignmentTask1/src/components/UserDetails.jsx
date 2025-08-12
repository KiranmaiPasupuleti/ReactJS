import { DisplayEachUser } from "./DisplayEachUser"
import styles from './userDetails.module.css'
// import React from 'react'
const UserDetails = ({data}) => {
  
  return (
    <div >
        <div className={styles.app}>
            <div>
                <button className={styles.btn}>Sort by Ascending</button>
                <button className={styles.btn}>Sort by Descending</button>
            </div>
            {data.map((eachUser) => {
                return <DisplayEachUser key={eachUser.id} {...eachUser}/>
            })}
        </div>
    </div>
  )
}

export default UserDetails
