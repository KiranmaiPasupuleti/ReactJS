// import React from 'react'
import data from '../db.js'
import UserDetails from './components/UserDetails.jsx'
const App = () => {
  return (
    <div className='myApp'>
      {/* <h1>hello</h1> */}
      <UserDetails data={data}/>
    </div>
  )
}

export default App