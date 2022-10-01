import React from 'react'
import styles from './Test.module.css'
import Quiz from '../components/Quiz/Quiz'

const Test = ({ id }) => {
  return (
    <div className={styles.container}>
      <section>
        <span>
          <h1>Quiz</h1>
        </span>

        <p className={styles.title}>
          Πόσο καλά ξέρεις τα μαθήματα;
          <br /> Κάνε quiz για τα κεφάλαια που έχεις διαβάσει και δοκίμασε τις γνώσεις σου!
        </p>
      </section>

      <Quiz id={id} />
    </div>
  )
}

export default Test
