import React from 'react'
import styles from './Exam.module.css'
import Quiz from '../components/Quiz/Quiz'

const Exam = ({ id }) => {
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

      <Quiz id={id} key={id} />
    </div>
  )
}

export default Exam
