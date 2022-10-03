import React from 'react'
import { useState } from 'react'
import styles from './Pdf.module.css'
import data from './PdfData.js'

const Pdf = ({ id, checkLessonHandler }) => {
  const [pdf, setPdf] = useState(false)
  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem(`checkbox ${id}`)) || false)

  const showPdf = () => setPdf(prev => !prev)

  const checkboxHandler = e => {
    setIsChecked(e.target.checked)
    localStorage.setItem(`checkbox ${id}`, JSON.stringify(e.target.checked))

    if (e.target.checked) {
      checkLessonHandler(1)
    } else {
      checkLessonHandler(-1)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Κεφάλαιο {id}</h1>
      <button onClick={showPdf} className={styles.pdfBtn}>
        PDF
      </button>
      {!pdf && <p className={styles.info}>{data[id - 1].info}</p>}
      {pdf && (
        <object data={data[id - 1].pdf} type='application/pdf' className={styles.pdf}>
          PDF
        </object>
      )}
      <div className={styles.form}>
        <input
          id='checkbox'
          type='checkbox'
          className={styles.checkbox}
          checked={isChecked}
          onChange={checkboxHandler}
        />
        <label htmlFor='checkbox'> Διάβασα το κεφάλαιο!</label>
      </div>
    </div>
  )
}

export default Pdf
