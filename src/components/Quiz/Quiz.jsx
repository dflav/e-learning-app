import React from 'react'
import { useState } from 'react'
import QuizData from './QuizData'
import styles from './Quiz.module.css'
import { useMemo } from 'react'
import { useEffect } from 'react'

const StartQuiz = ({ id, handleStartQuiz }) => {
  return (
    <>
      {id !== 5 ? <h1>Κεφάλαιο {id}</h1> : <h1>Επαναληπτικό</h1>}
      <p>{QuizData[id - 1].lesson}</p>
      <button type='button' className={styles.btn} onClick={handleStartQuiz}>
        Ξεκίνα το Quiz!
      </button>
    </>
  )
}

const Quiz = ({ id, quizTakenHandler }) => {
  const [start, setStart] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const questions = useMemo(() => QuizData[id - 1].questions.sort(() => 0.5 - Math.random()), [id])

  useEffect(() => {
    if (start) localStorage.setItem(`quiz ${id}`, score)
  }, [start, score, id])

  const handleStartQuiz = () => setStart(true)
  const handleAnswerButtonClick = isCorrect => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
      quizTakenHandler()
    }
  }

  const handleResetQuiz = () => {
    setCurrentQuestion(0)
    setShowScore(false)
    setScore(0)
  }

  return (
    <div className={styles.container}>
      {!start ? (
        <StartQuiz id={id} handleStartQuiz={handleStartQuiz} />
      ) : showScore ? (
        <>
          <div className={styles.score}>
            Απάντησες {score} από τις {questions.length} ερωτήσεις σωστά!
          </div>
          <button className={styles.btn} onClick={handleResetQuiz}>
            Δοκίμασε ξανά
          </button>
        </>
      ) : (
        <>
          <h1>
            Ερώτηση {currentQuestion + 1}
            <span>/{questions.length}</span>
          </h1>
          <p>{questions[currentQuestion].questionText}</p>
          <div className={styles.answers}>
            {questions[currentQuestion].answerOptions.map(answerOption => (
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} key={answerOption.id}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Quiz
