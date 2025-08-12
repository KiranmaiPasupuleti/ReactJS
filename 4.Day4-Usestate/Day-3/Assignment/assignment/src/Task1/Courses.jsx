import React from 'react'
import styles from './styling.module.css'

const Courses = () => {
  return (
    <div className={styles.coursesApp}>
      <div>
      <h2>Full Time Courses</h2>
      <ol>
        <li>Full Stack development
          <ul>
            <li>Eligibility: 18-28 years</li>
            <li>Duration: 30 weeks</li>
          </ul>
        </li>
      </ol>
    </div><div>
      <h2>Part Time Courses</h2>
      <ol>
        <li>Full Stack development
          <ul>
            <li>Eligibility: 18-28 years</li>
            <li>Duration: 30 weeks</li>
          </ul>
        </li>
        <li>Data analytics
          <ul>
            <li>Eligibility: 18-28 years</li>
            <li>Duration: 30 weeks</li>
          </ul>
        </li>
      </ol>
      
    </div>
    </div>
  )
}

export default Courses