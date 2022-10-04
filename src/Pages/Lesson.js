import React, { useEffect, useState } from 'react'
import styles from './Lesson.module.css'
import Pdf from '../components/Pdf/Pdf'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

const Lesson = ({ id }) => {
  const [lessonsRead, setLessonsRead] = useState(parseInt(localStorage.getItem('lessonNum')) || 0)

  const checkLessonHandler = value => setLessonsRead(prev => prev + value)

  useEffect(() => {
    localStorage.setItem('lessonNum', lessonsRead)
  }, [lessonsRead])

  return (
    <div className={styles.container}>
      <section>
        <span>
          <h1>Μαθήματα</h1>
        </span>

        <p className={styles.title}>
          Πληροφορική Α΄ Γυμνασίου
          <br />
          Ενότητα 2<br />
          Κεφάλαια 1 - 4
        </p>
      </section>
      <div className={styles.navigation}>
        {id !== 1 && (
          <Link to={`/e-learning-app/lessons/IT${id - 1}`} className={styles.btn}>
            <MdArrowBackIos className={styles.center} />
          </Link>
        )}
        {id !== 4 && (
          <Link to={`/e-learning-app/lessons/IT${id + 1}`} className={styles.btn}>
            <MdArrowForwardIos />
          </Link>
        )}
      </div>
      <Pdf key={id} id={id} checkLessonHandler={checkLessonHandler} />
    </div>
  )
}

export default Lesson
