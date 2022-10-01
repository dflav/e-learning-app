import React from 'react'
import { useState } from 'react'
import styles from './Quiz.module.css'

const Quiz = ({ id }) => {
  const [start, setStart] = useState(false)

  const handleStartQuiz = () => setStart(true)

  const startPanel =
    id !== 5 ? (
      <>
        <h1>Κεφάλαιο {id}</h1>
        <p>Hardware και Software του υπολογιστή</p>
      </>
    ) : (
      <>
        <h1>Επαναληπτικό</h1>
        <p> Δοκίμασε τις γνώσεις σου πάνω σε όλα τα κεφάλαια!</p>
      </>
    )

  return (
    <div className={styles.container}>
      {!start ? (
        <>
          {startPanel}
          <button type='button' className={styles.btn} onClick={handleStartQuiz}>
            Ξεκίνα το Quiz!
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default Quiz
