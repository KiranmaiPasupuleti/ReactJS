// import React from 'react'
import styles from "./TourFigma.module.css";
const TourFigma = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Our Tours</h2>
        <div className={styles.line}></div>
      </div>
      <div className={styles.cardsContainer}>
        {/* card-1 */}
        <div className={styles.eachCard}>
          {/* image */}
          <div>
            <img className={styles.image} src="src\assets\img1.jpg" />
          </div>
          {/* content */}
          <div>
            <h3 className={styles.heading}>Best of paris in 7 days Tour</h3>
            <p className={styles.p}>
              Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...
            </p>
            <a className={styles.readmore}>Read More</a>
            <div className={styles.btnContainer}>
              <button className={styles.interestBtn}>Not Interested</button>
            </div>
          </div>
        </div>
        {/* card-2  */}
        <div className={styles.eachCard}>
          {/* image */}
          <div>
            <img className={styles.image} src="src\assets\img2.jpg" />
          </div>
          {/* content */}
          <div>
            <h3 className={styles.heading}>Best of paris in 7 days Tour</h3>
            <p className={styles.p}>
              Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...
            </p>
            <a className={styles.readmore}>Read More</a>
            <div className={styles.btnContainer}>
              <button className={styles.interestBtn}>Not Interested</button>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className={styles.eachCard}>
          {/* image */}
          <div>
            <img className={styles.image} src="src\assets\img3.jpg" />
          </div>
          {/* content */}
          <div>
            <h3 className={styles.heading}>Best of paris in 7 days Tour</h3>
            <p className={styles.p}>
              Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...
            </p>
            <a className={styles.readmore}>Read More</a>
            <div className={styles.btnContainer}>
              <button className={styles.interestBtn}>Not Interested</button>
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className={styles.eachCard}>
          {/* image */}
          <div>
            <img className={styles.image} src="src\assets\img4.jpg" />
          </div>
          {/* content */}
          <div>
            <h3 className={styles.heading}>Best of paris in 7 days Tour</h3>
            <p className={styles.p}>
              Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...
            </p>
            <a className={styles.readmore}>Read More</a>
            <div className={styles.btnContainer}>
              <button className={styles.interestBtn}>Not Interested</button>
            </div>
          </div>
        </div>
        {/* card5 */}
        <div className={styles.eachCard}>
          {/* image */}
          <div>
            <img className={styles.image} src="src\assets\img5.jpg" />
          </div>
          {/* content */}
          <div>
            <h3 className={styles.heading}>Best of paris in 7 days Tour</h3>
            <p className={styles.p}>
              Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...
            </p>
            <a className={styles.readmore}>Read More</a>
            <div className={styles.btnContainer}>
              <button className={styles.interestBtn}>Not Interested</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourFigma;
