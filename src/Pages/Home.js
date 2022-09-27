import React from 'react'
import styles from './Home.module.css'
import book from '../images/book.png'
import quiz from '../images/quiz.png'
import guide from '../images/guide-book.png'
import stats from '../images/analytics.png'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Καλως ήρθες στην εφαρμογή Πληροφορικής Α&#39; Γυμνασίου!</div>
      <div className={styles['grid-container']}>
        <Link to={'./lessons/IT1'} className={styles.card}>
          <span>Διάβασε κάθε κεφάλαιο στην σελίδα των μαθημάτων!</span>

          <img src={book} alt='' />
        </Link>

        <Link to={'./quiz/IT1'} className={styles.card}>
          <span>Κάνε quiz και δοκίμασε την γνώση σου!</span>

          <img src={quiz} alt='' />
        </Link>
        <Link to={'./profile'} className={styles.card}>
          <span>Δες τα στατιστικά σου! </span>
          <img src={stats} alt='' />
        </Link>
        <Link to={'./guide'} className={styles.card}>
          <span>Αν χρειάζεσαι βοήθεια, πήγαινε στο εγχειρίδιο της σελίδας!</span>
          <img src={guide} alt='' />
        </Link>
      </div>
    </div>
  )
}

export default Home
