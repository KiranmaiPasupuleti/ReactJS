import styles from './../styling.module.css'
import PropTypes from "prop-types";
const CoffeeCard = (props) => {
    const {data} = props
console.log(data)    
  return (
    <div className={styles.coffeeCardsContainer}>
        {data.map((eachCard) => {
            const {id,description,image,ingredients,price,title} = eachCard
            return (
                <div className={styles.coffeeCard} key={id}>
                    <div className={styles.coffeeImg}><img className={styles.img} src={image}  /> </div>
                    <div className={styles.coffeeContent}> 
                        <h2>{title}</h2>
                        <p>{price}</p>
                        <p>{description}</p>
                        <p>Ingredients:</p>
                        <ul>
                            {ingredients.map((item,index) => (<li key={index}>{item}</li>))}
                        </ul>
                    </div>
                </div>
            )
        })}
    </div>
  )
}


CoffeeCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};
export default CoffeeCard