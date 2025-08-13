// import React from 'react'
import { useState } from 'react';
import data from './products'
import styles from './styling.module.css'
const AllItems = () => {
    const [productsData,setProductsData] = useState(data);
    console.log(productsData)
    function addCart(id){
        const cartedData = productsData.filter((eachProduct) => {
            return eachProduct.id === id
        })
        console.log(`Item ${id} added to cart`)
        setProductsData(cartedData) //
    }
  return (
    <div>
        <div>
            {productsData.map((eachProduct) => {
                return (
                <div className={styles.eachProduct} key={eachProduct.id}> 
                <h1>{eachProduct.id}.  {eachProduct.title}</h1>
                <button onClick={() => {addCart(eachProduct.id)}}>Add to cart</button>
                 </div>
                 )
            })}
        </div>
    </div>
  )
}

export default AllItems