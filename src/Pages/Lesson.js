import React from 'react'
import styles from './Lesson.module.css'
import pdf5 from '../Pdfs/presentation5.pdf'
import pdf6 from '../Pdfs/presentation6.pdf'
import pdf7 from '../Pdfs/presentation7.pdf'
import pdf8 from '../Pdfs/presentation8.pdf'
import Pdf from '../components/Pdf'

const Lesson = ({ id }) => {
  const pdf = [pdf5, pdf6, pdf7, pdf8]

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
      <Pdf pdf={pdf[id - 1]} id={id} />
    </div>
  )
}

export default Lesson
