import React from 'react'
import styles from './Lesson.module.css'
import pdfs from '../components/Pdf/PdfData'
import Pdf from '../components/Pdf/Pdf'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

const Lesson = ({ id }) => {
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
          Κεφάλαια 5 - 8
        </p>
      </section>
      <div className={styles.navigation}>
        {id !== 1 && (
          <Link to={`/lessons/IT${id - 1}`} className={styles.btn}>
            <MdArrowBackIos className={styles.center} />
          </Link>
        )}
        {id !== 4 && (
          <Link to={`/lessons/IT${id + 1}`} className={styles.btn}>
            <MdArrowForwardIos />
          </Link>
        )}
      </div>
      <Pdf pdf={pdfs[id - 1].pdf} info={pdfs[id - 1].info} id={id} />
    </div>
  )
}

export default Lesson
