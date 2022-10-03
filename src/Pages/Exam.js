import React, { useEffect, useState } from 'react'
import styles from './Exam.module.css'
import Quiz from '../components/Quiz/Quiz'

const Exam = ({ id }) => {
  const [quizesTaken, setQuizesTaken] = useState(parseInt(localStorage.getItem('quizNum')) || 0)

  const quizTakenHandler = () => setQuizesTaken(prev => prev + 1)

  useEffect(() => {
    localStorage.setItem('quizNum', quizesTaken)
  }, [quizesTaken])

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

      <Quiz id={id} key={id} quizTakenHandler={quizTakenHandler} />
    </div>
  )
}

export default Exam
