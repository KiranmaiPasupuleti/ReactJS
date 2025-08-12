import React from 'react'
import './App.css'
import UserCard from './Task1/UserCard'
import Title from './Task1/Title'
import styles from '../src/Task1/styling.module.css'
import Courses from './Task1/Courses'
import Counter from './Task2/Counter'
// const data = 
//   {
//     "id": 1,
//     "avatar": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
//     "name": "Chrisse",
//     "address": "4018 Sachs Trail",
//     "karma": 79073,
//     "followers": 66868,
//     "posts": 1841,
//     "is_following": true
//   }
const App = () => {
  return (
    <div className={styles.app}>
      {/* <Title/>
      <UserCard data={data}/>
      <Courses/> */}
      <Counter/>
    </div>
  )
}

export default App