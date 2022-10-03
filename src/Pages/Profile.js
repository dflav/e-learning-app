import React from 'react'
import { useState } from 'react'
import styles from './Profile.module.css'
import { FaPencilAlt } from 'react-icons/fa'
import { BsPersonCircle } from 'react-icons/bs'
import { IoIosStats } from 'react-icons/io'
import { MdGrade } from 'react-icons/md'
import { useRef } from 'react'
import { useEffect } from 'react'
import QuizData from '../components/Quiz/QuizData'
import { useMemo } from 'react'

const Profile = () => {
  const ref = useRef()
  const [firstname, setFirstname] = useState(localStorage.getItem('firstname') || '')
  const [lastname, setLastname] = useState(localStorage.getItem('lastname') || '')
  const [email, setEmail] = useState(localStorage.getItem('email') || '')
  const [showForm, setShowForm] = useState(true)
  const [grades, setGrades] = useState(true)

  const lessonNum = parseInt(localStorage.getItem('lessonNum')) || 0
  const quizNum = parseInt(localStorage.getItem('quizNum')) || 0

  const allGrades = useMemo(() => QuizData.map(quiz => parseInt(localStorage.getItem(`quiz ${quiz.id}`)) || 0), [])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('showForm')) !== null) setShowForm(false)
  }, [])

  const firstnameChangeHandler = e => setFirstname(e.target.value)
  const lastnameChangeHandler = e => setLastname(e.target.value)
  const emailChangeHandler = e => setEmail(e.target.value)

  const showGrades = () => setGrades(prev => !prev)

  const submitHandler = e => {
    e.preventDefault()
    if (firstname.trim() !== '' && lastname.trim() !== '' && email.trim() !== '') {
      localStorage.setItem('firstname', firstname)
      localStorage.setItem('lastname', lastname)
      localStorage.setItem('email', email)
      localStorage.setItem('showForm', JSON.stringify(false))
      setShowForm(false)
    } else {
      ref.current.focus()
    }
  }

  const gradeSum = allGrades.reduce((prevGrade, currentGrafe) => prevGrade + currentGrafe)
  const numOfQuestions = useMemo(
    () => QuizData.map(quiz => quiz.questions.length).reduce((prev, cur) => prev + cur),
    []
  )
  const finalGrade = (10 * gradeSum) / numOfQuestions

  let gradeSymbol

  if (finalGrade <= 4.9) gradeSymbol = 'F'
  else if (finalGrade <= 6.49) gradeSymbol = 'C'
  else if (finalGrade <= 8.49) gradeSymbol = 'B'
  else gradeSymbol = 'A'

  const expandSign = grades ? '+' : '-'

  return (
    <div className={styles.container}>
      <section>
        <span>
          <h1>Προφίλ</h1>
        </span>
        <p className={styles.title}>Δες τα στατιστικά σου!</p>
      </section>

      {showForm && (
        <div className={styles.form_container}>
          <h1>Log in</h1>
          <form onSubmit={submitHandler}>
            <label htmlFor='firstName'>Όνομα</label>
            <input
              ref={ref}
              type='text'
              value={firstname}
              id='firstName'
              placeholder='Βάλε το όνομα σου!'
              onChange={firstnameChangeHandler}
            />

            <label htmlFor='lastName'>Επίθετο</label>
            <input
              type='text'
              value={lastname}
              id='lastName'
              placeholder='Βάλε το επίθετο σου!'
              onChange={lastnameChangeHandler}
            />

            <label htmlFor='email'>Email</label>
            <input
              type='email'
              value={email}
              id='email'
              placeholder='Βάλε το email σου!'
              onChange={emailChangeHandler}
            />

            <button type='submit' className={styles.btn}>
              Υποβολή
            </button>
          </form>
        </div>
      )}
      {!showForm && (
        <div className={styles.stats_container}>
          <div className={styles.info}>
            <h1>
              <BsPersonCircle />
              Προσωπικά Στοιχεία
            </h1>
            <span>Όνομα : {firstname}</span>
            <span>Επίθετο : {lastname}</span>
            <span>Email : {email}</span>
          </div>

          <div className={styles.info}>
            <h1>
              <IoIosStats />
              Στατιστικά
            </h1>
            <span>Μαθήματα που έχεις διαβάσει : {lessonNum} </span>
            <span>Τεστ που έχεις κάνει : {quizNum}</span>
          </div>

          <div className={styles.grades}>
            <h1>
              <MdGrade />
              Βαθμός : <span>{gradeSymbol}</span>
            </h1>
            <button type='button' onClick={showGrades} className={styles.btn}>
              Αναλυτικά {expandSign}
            </button>
          </div>
          <ul hidden={grades}>
            {allGrades.map((grade, index) => (
              <li key={index}>
                <FaPencilAlt />
                {index !== 4 ? `Quiz ${index + 1} ` : 'Επαναληπτικό '}: <span>{grade}</span> /
                {QuizData[index].questions.length}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Profile
