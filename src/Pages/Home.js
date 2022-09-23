import React from 'react'
import styles from './Home.module.css'
import book from '../images/book.png'
import quiz from '../images/quiz.png'
import guide from '../images/guide-book.png'
import stats from '../images/analytics.png'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Καλως ήρθες στην εφαρμογή Πληροφορικής Α&#39; Γυμνασίου!</div>
      <div className={styles['grid-container']}>
        <div className={styles.card}>
          <span>Διάβασε κάθε κεφάλαιο στην σελίδα των μαθημάτων!</span>

          <img src={book} alt='' />
        </div>

        <div className={styles.card}>
          <span>Κάνε quiz και δοκιμασε την γνώση σου!</span>

          <img src={quiz} alt='' />
        </div>
        <div className={styles.card}>
          <span>Δες τα στατιστικά σου! </span>
          <img src={stats} alt='' />
        </div>
        <div className={styles.card}>
          <span>Αν χρειάζεσαι βοήθεια, πήγαινε στο εγχειρίδιο της σελίδας!</span>
          <img src={guide} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Home
