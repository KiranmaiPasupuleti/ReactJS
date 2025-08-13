import { useEffect, useState } from 'react'
import styles from './../styling.module.css'
import CoffeeCard from '../Component/CoffeeCard'
const Coffee = () => {
    const [fetchedData,setFetchedData] = useState([])
    
    useEffect(()=>{
        console.log("useEffect called")
        getCoffeeList()
    },[])

    async function getCoffeeList(){
            let response = await fetch('http://localhost:3000/coffee')
            let data = await response.json()
            setFetchedData(data)
            // console.log(data,"data in coffee")
        }
  return (
    <div>
        <div>
        <button onClick={getCoffeeList} className={styles.getBtn}>Get Coffee</button>
    </div>
    <div>
        {fetchedData.length > 0 ?  <CoffeeCard  data={fetchedData} /> : null}
    </div>
    </div>
    
  )
}

export default Coffee